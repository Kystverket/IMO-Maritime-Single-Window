using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class EmailSenderOptions
    {
        [EmailAddress]
        public string From { get; set; }
    }
}
