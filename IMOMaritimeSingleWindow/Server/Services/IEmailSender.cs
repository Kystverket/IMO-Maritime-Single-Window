using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Services
{
    public interface IEmailSender
    {
        Task SendEmail(string subject, string message, string recipient);
        Task SendHtml(string subject, string html, string recipient);
    }
}
