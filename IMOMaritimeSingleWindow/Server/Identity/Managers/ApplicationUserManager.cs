using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity.Models;

namespace IMOMaritimeSingleWindow.Identity
{
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

        public override Task<IdentityResult> CreateAsync(ApplicationUser user)
        {
            var result = base.CreateAsync(user);
            return result;
        }

        public override Task<bool> CheckPasswordAsync(ApplicationUser user, string password)
        {
            
            return base.CheckPasswordAsync(user, password);
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
}
