using KhatuTMT.Server.Services;
using KhatuTMT.Server.services; // ← ErrorEmailService namespace

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ContactFormService>();
builder.Services.AddScoped<IErrorEmailService, ErrorEmailService>(); // ← NEW

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

app.UseDefaultFiles();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();