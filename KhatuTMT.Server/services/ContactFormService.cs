    using System.Net;
    using System.Net.Mail;
    using KhatuTMT.Server.Controllers;

    namespace KhatuTMT.Server.Services
    {
        public class ContactFormService
        {
            private readonly IConfiguration _config;

            public ContactFormService(IConfiguration config)
            {
                _config = config;
            }

            public async Task SendEmail(
                ContactFormController.ContactFormModel model,
                string ip)
            {
                try
                {
                    string siteName = _config["SiteSettings:SiteName"];
                    string date = DateTime.Now.ToString("dd MMM yyyy");

                    string body = $@"
    <!DOCTYPE html>
    <html>
    <head><meta charset='UTF-8'></head>
    <body style='margin:0;padding:0;background:#f4f6f8;font-family:Verdana,Arial,sans-serif;'>
    <table width='100%' cellpadding='0' cellspacing='0' bgcolor='#f4f6f8' style='background:#f4f6f8;padding:20px 0;'>
      <tr>
        <td align='left'>
          <table width='700' cellpadding='0' cellspacing='0' bgcolor='#ffffff' style='width:700px;background:#ffffff;padding:30px;border-radius:8px;'>

         
            <!-- TITLE -->
            <tr>
              <td align='left' style='font-size:22px;font-weight:bold;color:#6F1A07;padding:20px 0 10px 0;'>
                New Contact Form Enquiry
              </td>
            </tr>

            <!-- DATE -->
            <tr>
              <td align='left' style='padding-bottom:20px;font-size:14px;color:#333;'>
                <strong>Date:</strong>&nbsp;{date}
              </td>
            </tr>

            <!-- DETAILS TABLE -->
            <tr>
              <td>
                <table width='100%' cellpadding='0' cellspacing='0' style='font-size:14px;line-height:22px;'>

                  <tr>
                    <td width='180' valign='top' style='padding:12px 10px 12px 0;border-bottom:1px solid #f1f1f1;font-weight:bold;color:#333;'>Name</td>
                    <td valign='top' style='padding:12px 0;border-bottom:1px solid #f1f1f1;color:#555;'>{model.Name}</td>
                  </tr>

                  <tr>
                    <td width='180' valign='top' style='padding:12px 10px 12px 0;border-bottom:1px solid #f1f1f1;font-weight:bold;color:#333;'>Company Name</td>
                    <td valign='top' style='padding:12px 0;border-bottom:1px solid #f1f1f1;color:#555;'>{model.CompanyName ?? "-"}</td>
                  </tr>

                  <tr>
                    <td width='180' valign='top' style='padding:12px 10px 12px 0;border-bottom:1px solid #f1f1f1;font-weight:bold;color:#333;'>Email</td>
                    <td valign='top' style='padding:12px 0;border-bottom:1px solid #f1f1f1;color:#555;'>{model.Email}</td>
                  </tr>

                  <tr>
                    <td width='180' valign='top' style='padding:12px 10px 12px 0;border-bottom:1px solid #f1f1f1;font-weight:bold;color:#333;'>Phone</td>
                    <td valign='top' style='padding:12px 0;border-bottom:1px solid #f1f1f1;color:#555;'>{model.Phone}</td>
                  </tr>

                  <tr>
                    <td width='180' valign='top' style='padding:12px 10px 12px 0;border-bottom:1px solid #f1f1f1;font-weight:bold;color:#333;'>Country</td>
                    <td valign='top' style='padding:12px 0;border-bottom:1px solid #f1f1f1;color:#555;'>{model.Country}</td>
                  </tr>

                  <tr>
                    <td width='180' valign='top' style='padding:12px 10px 12px 0;border-bottom:1px solid #f1f1f1;font-weight:bold;color:#333;'>State</td>
                    <td valign='top' style='padding:12px 0;border-bottom:1px solid #f1f1f1;color:#555;'>{model.State}</td>
                  </tr>

                  <tr>
                    <td width='180' valign='top' style='padding:12px 10px 12px 0;border-bottom:1px solid #f1f1f1;font-weight:bold;color:#333;'>Message</td>
                    <td valign='top' style='padding:12px 0;border-bottom:1px solid #f1f1f1;color:#555;'>{model.Message?.Replace("\n", "<br/>") ?? "-"}</td>
                  </tr>

                  <tr>
                    <td width='180' valign='top' style='padding:12px 10px 12px 0;font-weight:bold;color:#333;'>IP Address</td>
                    <td valign='top' style='padding:12px 0;color:#555;'>{ip}</td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td align='left' style='padding-top:25px;font-size:12px;color:#999;border-top:1px solid #f1f1f1;'>
                This email was generated automatically by {siteName}.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
    </body>
    </html>";

                    MailMessage msg = new MailMessage();
                    msg.From = new MailAddress(_config["SMTP:Email"]);
                    msg.To.Add(_config["SMTP:ToEmail"]);

                    if (!string.IsNullOrEmpty(model.Email))
                        msg.ReplyToList.Add(new MailAddress(model.Email));

                    var bccEmails = _config["SMTP:BccEmail"];
                    if (!string.IsNullOrEmpty(bccEmails))
                        foreach (var email in bccEmails.Split(','))
                            msg.Bcc.Add(email.Trim());

                    msg.Subject = "New Contact Form Enquiry - " + siteName;
                    msg.Body = body;
                    msg.IsBodyHtml = true;

                    SmtpClient smtp = new SmtpClient(_config["SMTP:Host"])
                    {
                        Port = int.Parse(_config["SMTP:Port"]),
                        Credentials = new NetworkCredential(
                            _config["SMTP:Email"],
                            _config["SMTP:Password"]),
                        EnableSsl = true
                    };

                    await smtp.SendMailAsync(msg);
                }
                catch (Exception ex)
                {
                    throw new Exception("Email sending failed: " + ex.Message);
                }
            }
        }
    }