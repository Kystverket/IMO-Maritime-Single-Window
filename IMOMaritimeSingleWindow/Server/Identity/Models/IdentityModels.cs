using Microsoft.AspNetCore.Identity;
using System;

namespace IMOMaritimeSingleWindow.Identity.Models
{
    public class IdentityModels
    {
    }
    public class ApplicationUserLogin : IdentityUserLogin<Guid> {
    }

    public class ApplicationUserClaim : IdentityUserClaim<Guid> {
        
    }

    public class ApplicationUserRole : IdentityUserRole<Guid> { }

    public class ApplicationUserToken : IdentityUserToken<Guid> { }

    public class ApplicationRoleClaim : IdentityRoleClaim<Guid> {  }
    
    
    public class ApplicationRole : IdentityRole<Guid>
    {
        public string Description { get; set; }

        public ApplicationRole() : base() { }

        public ApplicationRole(string name) : base(name) { }

        public ApplicationRole(string name, string description) : base(name)
        {
            this.Description = description;
        }
    }
    
public class ApplicationUser : IdentityUser<Guid>
    {
        public string GivenName { get; set; }
        public string Surname { get; set; }
        public string NormalizedRoleName { get; set; }
        public int? OrganizationId { get; set; }
        public string CompanyEmail { get; set; }
        public string CompanyPhoneNumber { get; set; }
        public bool IsActive { get; set; }
    }

    public class MyPasswordHasher : PasswordHasher<ApplicationUser>
    {
    }

}
