using System.Text.Json;

namespace KhatuTMT.Server.Services;

public sealed class SeoRouteCatalog
{
    private readonly Dictionary<string, SeoRoute> _routes;

    public SeoRouteCatalog(IWebHostEnvironment environment)
    {
        var webRootFile = Path.Combine(environment.WebRootPath ?? string.Empty, "seo-routes.json");
        var clientBuildFile = Path.GetFullPath(Path.Combine(environment.ContentRootPath, "..", "khatutmt.client", "dist", "seo-routes.json"));
        var file = !environment.IsDevelopment() && File.Exists(webRootFile) ? webRootFile : clientBuildFile;
        if (!File.Exists(file))
        {
            throw new InvalidOperationException(
                "seo-routes.json is missing. Run `npm run build` in khatutmt.client before starting the production host.");
        }

        var routes = JsonSerializer.Deserialize<List<SeoRoute>>(File.ReadAllText(file), new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        }) ?? [];

        _routes = routes.ToDictionary(route => Normalize(route.Path), StringComparer.OrdinalIgnoreCase);
    }

    public bool TryGet(string path, out SeoRoute? route) => _routes.TryGetValue(Normalize(path), out route);

    private static string Normalize(string path)
    {
        var normalized = string.IsNullOrWhiteSpace(path) ? "/" : path.Trim();
        if (!normalized.StartsWith('/')) normalized = $"/{normalized}";
        return normalized.Length > 1 ? normalized.TrimEnd('/') : normalized;
    }
}

public sealed record SeoRoute(
    string Path,
    string Title,
    string Description,
    string Keywords,
    string Heading,
    string Body,
    string Canonical,
    bool Prerender,
    bool Sitemap,
    string? Robots);
