using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;
using System.Threading;

using IMOMaritimeSingleWindow.TestModels;

namespace IMOMaritimeSingleWindow.Identity
{
    public class ApplicationUserStore : UserStore<ApplicationUser, ApplicationRole, usertestContext, Guid,
        AspNetUserClaims, AspNetUserRoles, AspNetUserLogins, AspNetUserTokens, AspNetRoleClaims>,
        IUserPasswordStore<ApplicationUser>

    {
        public ApplicationUserStore(usertestContext context)
            : base(context)
        {
        }

        

        public override Task<IdentityResult> CreateAsync(ApplicationUser user, CancellationToken cancellationToken = default(CancellationToken))
        {
            return base.CreateAsync(user, cancellationToken);
        }

       


        public override Task<string> GetPasswordHashAsync(ApplicationUser user, CancellationToken cancellationToken = default(CancellationToken))
        {
            var passwordHash = Context.Password
                .Where(pw => pw.IdentityId == user.Id)
                .Select(pw => pw.PasswordHash).First();
            return Task.FromResult(passwordHash);
            //return base.GetPasswordHashAsync(user, cancellationToken);
        }

        public override async Task SetPasswordHashAsync(ApplicationUser user, string passwordHash, CancellationToken cancellationToken = default(CancellationToken))
        {
            await base.SetPasswordHashAsync(user, passwordHash, cancellationToken);
            
            //await Context.Password.AddAsync(new Password { IdentityId = user.Id, PasswordHash = passwordHash });
            //await Context.SaveChangesAsync();
        }
        
        
    }
}
