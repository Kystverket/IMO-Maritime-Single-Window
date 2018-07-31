using IMOMaritimeSingleWindow.Helpers;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Services
{
    public class EmailSender : IEmailSender
    {
        readonly SendGridClient _emailClient;
        readonly EmailSenderOptions _senderOptions;

        public EmailSender(SendGridClient emailClient, EmailSenderOptions senderOptions)
        {
            _emailClient = emailClient;
            _senderOptions = senderOptions;
        }

        public async Task SendEmail(string subject, string message, string recipient)
        {
            
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(_senderOptions.From),
                Subject = subject,
                PlainTextContent = message
            };
            
            msg.AddTo(new EmailAddress(recipient));
            var result = await _emailClient.SendEmailAsync(msg);
        }

        public async Task SendHtml(string subject, string html, string recipient)
        {
            var msg = new SendGridMessage()
            {
                From = new EmailAddress(_senderOptions.From),
                Subject = subject,
                HtmlContent = html
            };

            msg.AddTo(new EmailAddress(recipient));
            var result = await _emailClient.SendEmailAsync(msg);
        }
    }
}
