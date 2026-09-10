using KhatuTMT.Server.Services;
using KhatuTMT.Server.services; // ← ErrorEmailService namespace
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ContactFormService>();
builder.Services.AddScoped<IErrorEmailService, ErrorEmailService>(); // ← NEW
builder.Services.AddSingleton<SeoRouteCatalog>();

var app = builder.Build();

// ← NEW - UseDefaultFiles() PEHLA aavvu joie
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        var exceptionFeature = context.Features
            .Get<Microsoft.AspNetCore.Diagnostics.IExceptionHandlerFeature>();

        if (exceptionFeature != null)
        {
            var errorService = context.RequestServices
                .GetRequiredService<IErrorEmailService>();

            await errorService.SendErrorEmail(
                exceptionFeature.Error,
                context
            );
        }

        context.Response.StatusCode = 500;
        await context.Response.WriteAsync("Something went wrong.");
    });
});

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseMiddleware<SeoPageMiddleware>();
app.UseDefaultFiles();
var staticRoot = !app.Environment.IsDevelopment() && File.Exists(Path.Combine(app.Environment.WebRootPath, "seo-routes.json"))
    ? app.Environment.WebRootPath
    : Path.GetFullPath(Path.Combine(app.Environment.ContentRootPath, "..", "khatutmt.client", "dist"));
app.UseStaticFiles(new StaticFileOptions { FileProvider = new PhysicalFileProvider(staticRoot) });

// The only SPA fallback is an intentionally empty shell. Known public pages are
// intercepted by SeoPageMiddleware; unknown routes receive a 404 there.
app.MapFallbackToFile("/spa-shell.html");

app.Run();
