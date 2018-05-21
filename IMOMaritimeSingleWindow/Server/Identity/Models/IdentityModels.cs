using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;
using System.Threading;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using System.Diagnostics;
//using IMOMaritimeSingleWindow.Models.IdentityExtensionModels;

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

        public ApplicationRole() :base() { } /* Needed for EF */

        public ApplicationRole(string name)
            : base(name)
        { }

        public ApplicationRole(string name, string description)
            : base(name)
        {
            this.Description = description;
        }
        
    }
    
    public class ApplicationUser : IdentityUser<Guid> {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NormalizedRoleName { get; set; }
        public int OrganizationId { get; set; }
    }

    public class MyPasswordHasher : PasswordHasher<ApplicationUser>
    { 
    }
    

    /// Stores
    
    //TODO: Implement/extend UserClaimStore and disable AddClaimsAsync method
    



}
