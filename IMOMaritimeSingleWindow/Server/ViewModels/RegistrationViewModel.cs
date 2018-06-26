
/*  This was adopted from an example project written by
 *  author: Marc Macniel (https://github.com/mmacneil)
 *  cited in a blog post
 *  url: https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login
 *  demonstrating how to implement a framework for authenticating users with JWT
 *  in an ASP.NET Core 2/Angular 5 web application.
 *  
 *  The original class this class is based upon can be found on the project's GitHub repository
 *  url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth
 *  file url: https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/ViewModels/RegisrationViewModel.cs
 */

using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.ViewModels
{
    public class RegistrationViewModel
    {
        [EmailAddress]
        public string Email { get; set; }
        //[Phone]
        //[StringLength(maximumLength: 11, MinimumLength = 8)]
        public string PhoneNumber { get; set; }
        public string CompanyPhoneNumber { get; set; }
        //[EmailAddress]
        public string CompanyEmail { get; set; }

        public string GivenName { get; set; }
        public string Surname { get; set; }
        public string RoleName { get; set; }
        public int? OrganizationId { get; set; }
    }
}
