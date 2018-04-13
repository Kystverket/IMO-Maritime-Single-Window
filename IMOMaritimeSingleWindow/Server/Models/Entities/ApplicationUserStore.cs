using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;
using System.Threading;

namespace IMOMaritimeSingleWindow.Models.Entities
{
    public class ApplicationUserStore : UserStore<ApplicationUser, ApplicationRole, UserDbContext, Guid,
        ApplicationUserClaim, ApplicationUserRole, ApplicationUserLogin, ApplicationUserToken, ApplicationRoleClaim>,
        IUserPasswordStore<ApplicationUser>

    {
        public ApplicationUserStore(UserDbContext context)
            : base(context)
        {
        }

        /*
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
            await Context.Password.AddAsync(new Password { IdentityId = user.Id, PasswordHash = passwordHash });
            await Context.SaveChangesAsync();
        }
        */
        
    }
}
