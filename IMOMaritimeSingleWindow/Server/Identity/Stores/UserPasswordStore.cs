using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using System.Threading;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserPasswordStore<ApplicationUser>
    {
        public Task SetPasswordHashAsync(ApplicationUser user, string passwordHash, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.PasswordHash = passwordHash;
            return Task.CompletedTask;
        }

        public Task<string> GetPasswordHashAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            return Task.FromResult(user.PasswordHash);
        }

        public Task<bool> HasPasswordAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            var _user = FindByIdAsync(user.Id.ToString()).GetAwaiter().GetResult();
            if (_user == null)
                return Task.FromResult(false);
            return Task.FromResult(_user.PasswordHash != null);
        }
    }
}
