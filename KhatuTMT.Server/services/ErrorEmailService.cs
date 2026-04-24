using System.Net;
using System.Net.Mail;

namespace KhatuTMT.Server.services
{
    public interface IErrorEmailService
    {
        Task SendErrorEmail(Exception ex, HttpContext context);
    }

    public class ErrorEmailService : IErrorEmailService
    {
        public async Task SendErrorEmail(Exception ex, HttpContext context)
        {
            try
            {
                string ipAddress = context.Request.Headers["X-Forwarded-For"].FirstOrDefault();

                if (!string.IsNullOrWhiteSpace(ipAddress))
                {
                    ipAddress = ipAddress.Split(',').First().Trim();
                }
                else
                {
                    ipAddress = context.Connection.RemoteIpAddress?.ToString();
                }

                string fullUrl = $"{context.Request.Scheme}://{context.Request.Host}{context.Request.PathBase}{context.Request.Path}{context.Request.QueryString}";

                string body = $@"
<html>
<body style='font-family:Verdana;font-size:12px;color:#000;'>
<table width='100%' cellpadding='0' cellspacing='0'>
<tr><td height='40'></td></tr>
<tr><td align='center'><h2 style='color:#97000F;'>Exception Raised</h2></td></tr>
<tr><td height='20'></td></tr>
<tr>
<td>
<table width='100%' border='0' cellpadding='5' cellspacing='0' style='border-collapse:collapse;'>
<tr><td width='20%'><b>URL</b></td><td>{fullUrl}</td></tr>
<tr><td><b>Date</b></td><td>{DateTime.Now}</td></tr>
<tr><td><b>IP Address</b></td><td>{ipAddress}</td></tr>
<tr><td><b>Browser</b></td><td>{context.Request.Headers["User-Agent"]}</td></tr>
<tr><td valign='top'><b>Error Message</b></td><td>{ex.Message}</td></tr>
<tr><td valign='top'><b>Stack Trace</b></td><td><pre style='white-space:pre-wrap'>{ex.StackTrace}</pre></td></tr>
</table>
</td>
</tr>
</table>
</body>
</html>";

                MailMessage msg = new MailMessage();
                msg.From = new MailAddress("forms@yourwebsitepreview.com");
                msg.To.Add("testing@yourwebsitepreview.com");
                msg.Subject = "Error in KhatuTMT";   // ← Subject change karyo
                msg.Body = body;
                msg.IsBodyHtml = true;

                SmtpClient smtp = new SmtpClient("mail.yourwebsitepreview.com")
                {
                    Port = 99,
                    Credentials = new NetworkCredential(
                        "forms@yourwebsitepreview.com",
                        "AsjYHqUj]w6Eq5\"("
                    )
                };

                await smtp.SendMailAsync(msg);
            }
            catch (Exception smtpEx)
            {
                await File.AppendAllTextAsync(
                    Path.Combine(AppContext.BaseDirectory, "smtp_error.log"),
                    $"[{DateTime.Now}] {smtpEx.Message}\n{smtpEx.StackTrace}\n\n"
                );
            }
        }
    }
}