

using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.ViewModels
{
    public class RegistrationViewModel
    {
        [EmailAddress]
        public string Email { get; set; }
        
        [Phone]
        [StringLength(maximumLength:11, MinimumLength = 8)]
        public string PhoneNumber { get; set; }
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
