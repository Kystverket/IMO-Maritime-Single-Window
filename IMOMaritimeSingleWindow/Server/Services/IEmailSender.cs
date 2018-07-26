using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.Services
{
    public interface IEmailSender
    {
        Task SendEmail(string subject, string message, string receiver);
    }
}
