
using KhatuTMT.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace KhatuTMT.Server.Controllers
{
    [ApiController]
    [Route("api/contactform")]
    public class ContactFormController : ControllerBase
    {
        private readonly ContactFormService _emailService;

        public ContactFormController(ContactFormService emailService)
        {
            _emailService = emailService;
        }

        public class ContactFormModel
        {
            public string Name { get; set; }
            public string CompanyName { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Country { get; set; }
            public string State { get; set; }
            public string Message { get; set; }
            public string Captcha { get; set; }
            public string CaptchaAnswer { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> Submit([FromBody] ContactFormModel model)
        {
            // Captcha validation
            if (model.Captcha?.Trim() != model.CaptchaAnswer?.Trim())
            {
                return BadRequest(new
                {
                    errors = new
                    {
                        captcha = new[] { "Incorrect captcha. Please try again." }
                    }
                });
            }

            // Get IP
            string ip = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "Unknown";

            await _emailService.SendEmail(model, ip);

            return Ok(new { message = "Contact form submitted successfully." });
        }

        [HttpGet("force-error")]
        public IActionResult ForceError()
        {
            throw new Exception("Testing real global error");
        }
    }
}