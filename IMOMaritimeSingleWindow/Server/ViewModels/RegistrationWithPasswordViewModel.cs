

using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.ViewModels
{
    public class RegistrationWithPasswordViewModel
    {
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
        //[Phone]
        //[StringLength(maximumLength: 11, MinimumLength = 8)]
        public string PhoneNumber { get; set; }
        public string CompanyPhoneNumber { get; set; }
        [EmailAddress]
        public string CompanyEmail { get; set; }

        public string GivenName { get; set; }
        public string Surname { get; set; }
        public string RoleName { get; set; }
        public int OrganizationId { get; set; }
    }
}
