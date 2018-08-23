using IMOMaritimeSingleWindow.Helpers;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Services
{
    public interface IEmailSender
    {
        Task<EmailResult> SendEmail(string subject, string message, string recipient);
        Task<EmailResult> SendHtml(string subject, string html, string recipient);
    }
}
