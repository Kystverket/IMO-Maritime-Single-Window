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

namespace IMOMaritimeSingleWindow.Models.Entities
{
    public class IdentityModels
    {
    }
    public class ApplicationUserLogin : IdentityUserLogin<Guid> { }

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
        public string CustomField { get; set; }

    }

    public class MyPasswordHasher : PasswordHasher<ApplicationUser>
    { 
    }

    /// Managers
    public class ApplicationUserManager : UserManager<ApplicationUser>
    {
        public ApplicationUserManager(IUserStore<ApplicationUser> store,

            IOptions<IdentityOptions> optionsAccessor,

            IPasswordHasher<ApplicationUser> passwordHasher,

            IEnumerable<IUserValidator<ApplicationUser>> userValidators,

            IEnumerable<IPasswordValidator<ApplicationUser>> passwordValidators,

            ILookupNormalizer keyNormalizer,

            IdentityErrorDescriber errors,

            IServiceProvider services,

            ILogger<UserManager<ApplicationUser>> logger)

            : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)

        {
        }

        /// <summary>
        /// Not implemented. Instead use <see cref="IMOMaritimeSingleWindow.Models.Entities.UserRoleManager.GetClaimsAsync(TUser)"/>.
        /// </summary>
        public override Task<IList<System.Security.Claims.Claim>> GetClaimsAsync(ApplicationUser user)
        {
            throw new NotImplementedException();
        }

        public override Task<IdentityResult> SetUserNameAsync(ApplicationUser user, string userName)
        {
            string _userName = userName.Split('@')[0];
            return base.SetUserNameAsync(user, _userName);
        }
    }

    public class ApplicationRoleManager : RoleManager<ApplicationRole> {

        public ApplicationRoleManager(
            IRoleStore<ApplicationRole> roleStore,
            IEnumerable<IRoleValidator<ApplicationRole>> roleValidator,
            ILookupNormalizer lookupNormalizer,
            IdentityErrorDescriber identityErrorDescriber,
            ILogger<RoleManager<ApplicationRole>> logger
        ) :base(roleStore, roleValidator, lookupNormalizer, identityErrorDescriber, logger)
        { }



    }

    /// Stores

    public class ApplicationUserStore : UserStore<ApplicationUser, ApplicationRole, UserDbContext, Guid,
        ApplicationUserClaim, ApplicationUserRole, ApplicationUserLogin, ApplicationUserToken, ApplicationRoleClaim>
   
    {
        public ApplicationUserStore(UserDbContext context)
            :base(context)
        {
        }
    }

    public class ApplicationRoleStore

        : RoleStore<ApplicationRole, UserDbContext, Guid, ApplicationUserRole, ApplicationRoleClaim>,
          IQueryableRoleStore<ApplicationRole>,
          IRoleStore<ApplicationRole>, IDisposable

    {
        public ApplicationRoleStore(UserDbContext context)
            : base(context)
        {
        }

    }

    //TODO: Implement/extend UserClaimStore and disable AddClaimsAsync method
    



}
