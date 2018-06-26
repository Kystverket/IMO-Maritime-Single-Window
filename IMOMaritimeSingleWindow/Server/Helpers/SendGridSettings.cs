using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class SendGridSettings
    {
        public string API_Key { get; set; }
        [EmailAddress]
        public string Email_From { get; set; }
    }
}
