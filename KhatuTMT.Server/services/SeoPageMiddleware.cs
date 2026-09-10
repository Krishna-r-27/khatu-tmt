using System.Net;
using System.Text;
using System.Text.RegularExpressions;

namespace KhatuTMT.Server.Services;

/// <summary>Serves crawler-complete HTML before the SPA static-file fallback can run.</summary>
public sealed class SeoPageMiddleware(RequestDelegate next, IWebHostEnvironment environment, SeoRouteCatalog catalog)
{
    private static readonly Regex TitlePattern = new("<title>.*?</title>", RegexOptions.IgnoreCase | RegexOptions.Singleline | RegexOptions.Compiled);
    private readonly string _webRoot = ResolveStaticRoot(environment);

    public async Task InvokeAsync(HttpContext context)
    {
        if (!HttpMethods.IsGet(context.Request.Method) || IsApiOrAssetRequest(context.Request.Path) || !AcceptsHtml(context))
        {
            await next(context);
            return;
        }

        var path = Normalize(context.Request.Path);
        if (catalog.TryGet(path, out var route) && route is not null)
        {
            var source = route.Prerender
                ? Path.Combine(_webRoot, route.Path == "/" ? "index.html" : route.Path.TrimStart('/').Replace('/', Path.DirectorySeparatorChar), "index.html")
                : Path.Combine(_webRoot, "spa-shell.html");
            var html = await ReadOrShellAsync(source);
            await WriteHtml(context, InjectPage(html, route), StatusCodes.Status200OK);
            return;
        }

        // Unknown browser routes are real 404s. They must never inherit homepage HTML or metadata.
        await WriteHtml(context, NotFoundHtml(path), StatusCodes.Status404NotFound);
    }

    private async Task<string> ReadOrShellAsync(string source)
    {
        if (File.Exists(source)) return await File.ReadAllTextAsync(source);
        var shell = Path.Combine(_webRoot, "spa-shell.html");
        if (File.Exists(shell)) return await File.ReadAllTextAsync(shell);
        throw new FileNotFoundException("Neither a route HTML file nor spa-shell.html was deployed.");
    }

    private static async Task WriteHtml(HttpContext context, string html, int status)
    {
        context.Response.StatusCode = status;
        context.Response.ContentType = "text/html; charset=utf-8";
        context.Response.Headers.CacheControl = "public, max-age=300";
        await context.Response.WriteAsync(html);
    }

    private static string InjectPage(string html, SeoRoute route)
    {
        var encodedTitle = WebUtility.HtmlEncode(route.Title);
        var head = Meta("description", route.Description) + Meta("keywords", route.Keywords) +
                   $"<link rel=\"canonical\" href=\"{WebUtility.HtmlEncode(route.Canonical)}\" />" +
                   Property("og:title", route.Title) + Property("og:description", route.Description) + Property("og:url", route.Canonical) + Property("og:type", "website") +
                   Meta("twitter:card", "summary_large_image") + Meta("twitter:title", route.Title) + Meta("twitter:description", route.Description) + Meta("twitter:url", route.Canonical) +
                   Meta("robots", route.Robots ?? "index, follow");
        html = Regex.Replace(html, "<meta\\s+(?:name|property)=[\"'](?:description|keywords|robots|twitter:[^\"']+|og:[^\"']+)[\"'][^>]*>", string.Empty, RegexOptions.IgnoreCase);
        html = Regex.Replace(html, "<link\\s+rel=[\"']canonical[\"'][^>]*>", string.Empty, RegexOptions.IgnoreCase);
        html = TitlePattern.Replace(html, $"<title>{encodedTitle}</title>", 1);
        html = html.Replace("</head>", $"{head}</head>", StringComparison.OrdinalIgnoreCase);

        var body = $"<main id=\"seo-content\"><h1>{WebUtility.HtmlEncode(route.Heading)}</h1><p>{WebUtility.HtmlEncode(route.Body)}</p><nav aria-label=\"Primary\"><a href=\"/\">Home</a> <a href=\"/about-us\">About us</a> <a href=\"/products\">Products</a> <a href=\"/manufacturing-facilities\">Manufacturing facilities</a> <a href=\"/what-is-tmt\">What is TMT?</a> <a href=\"/contact-us\">Contact us</a></nav></main>";
        return ReplaceRoot(html, body);
    }

    private static string NotFoundHtml(string path) => $"<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Page Not Found | Khatu TMT</title><meta name=\"description\" content=\"The requested Khatu TMT page could not be found.\"><meta name=\"robots\" content=\"noindex, nofollow\"></head><body><main id=\"seo-content\"><h1>Page not found</h1><p>The page {WebUtility.HtmlEncode(path)} could not be found.</p><p><a href=\"/\">Return to Khatu TMT home</a></p></main></body></html>";
    private static string Meta(string name, string value) => $"<meta name=\"{name}\" content=\"{WebUtility.HtmlEncode(value)}\" />";
    private static string Property(string property, string value) => $"<meta property=\"{property}\" content=\"{WebUtility.HtmlEncode(value)}\" />";
    private static bool AcceptsHtml(HttpContext context) => !context.Request.Headers.Accept.Any() || context.Request.Headers.Accept.ToString().Contains("text/html", StringComparison.OrdinalIgnoreCase) || context.Request.Headers.UserAgent.Any();
    private static bool IsApiOrAssetRequest(PathString path) => path.StartsWithSegments("/api") || Path.HasExtension(path.Value);
    private static string Normalize(PathString path) => path.Value is null or "" or "/" ? "/" : path.Value.TrimEnd('/');

    private static string ReplaceRoot(string html, string body)
    {
        var rootStart = html.IndexOf("<div id=\"root\"", StringComparison.OrdinalIgnoreCase);
        if (rootStart < 0) rootStart = html.IndexOf("<div id='root'", StringComparison.OrdinalIgnoreCase);
        var bodyEnd = html.IndexOf("</body>", StringComparison.OrdinalIgnoreCase);
        if (rootStart < 0 || bodyEnd < 0) return html.Replace("</body>", $"{body}</body>", StringComparison.OrdinalIgnoreCase);
        var openEnd = html.IndexOf('>', rootStart);
        var closeStart = html.LastIndexOf("</div>", bodyEnd, StringComparison.OrdinalIgnoreCase);
        if (openEnd < 0 || closeStart < openEnd) return html.Replace("</body>", $"{body}</body>", StringComparison.OrdinalIgnoreCase);
        return string.Concat(html.AsSpan(0, openEnd + 1), body, html.AsSpan(closeStart));
    }

    private static string ResolveStaticRoot(IWebHostEnvironment environment)
    {
        var webRoot = environment.WebRootPath ?? throw new InvalidOperationException("The web root is required for SEO pages.");
        return !environment.IsDevelopment() && File.Exists(Path.Combine(webRoot, "seo-routes.json"))
            ? webRoot
            : Path.GetFullPath(Path.Combine(environment.ContentRootPath, "..", "khatutmt.client", "dist"));
    }
}
