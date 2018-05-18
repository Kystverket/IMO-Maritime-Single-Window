using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using System.Security.Claims;

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
            //this.UserValidators.Clear();
            //this.UserValidators.Add(new CustomUserValidator<ApplicationUser>());
            //this.Options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.";
        }

        public override async Task<IdentityResult> AddToRoleAsync(ApplicationUser user, string role)
        {
            ThrowIfDisposed();
            if (user == null)
                throw new ArgumentNullException(nameof(user));

            var userRoleStore = GetUserRoleStore();

            var normalizedRole = NormalizeKey(role);
            
            if (await userRoleStore.IsInRoleAsync(user, normalizedRole, CancellationToken))
            {
                return IdentityResult.Failed();
            }
            await userRoleStore.AddToRoleAsync(user, normalizedRole, CancellationToken);

            var userStore = Store as UserStore;
            await userStore.SetNormalizedRoleNameAsync(user, role);

            //await base.AddToRoleAsync(user, role);
            return await userStore.UpdateRoleAsync(user);
        }

        public override Task<IdentityResult> CreateAsync(ApplicationUser user)
        {
            return base.CreateAsync(user);
        }

        public override Task<IdentityResult> CreateAsync(ApplicationUser user, string password)
        {
            user.EmailConfirmed = true;
            return base.CreateAsync(user, password);
        }

        private IUserRoleStore<ApplicationUser> GetUserRoleStore()
        {

            if (!(Store is IUserRoleStore<ApplicationUser> cast))
            {
                throw new NotSupportedException();
            }
            return cast;
        }

        /*
        /// <summary>
        /// Not implemented. Instead use <see cref="IMOMaritimeSingleWindow.Identity.Models.UserRoleManager.GetClaimsAsync(TUser)"/>.
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
        */
    }
}
