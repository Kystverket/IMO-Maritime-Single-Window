using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
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

        public Task<string> GetPasswordHashAsync(User user, CancellationToken cancellationToken = default)
        {
            if (HasPassword(user).GetAwaiter().GetResult())
            {
                Password password = _unitOfWork.Passwords.Get(user.PasswordId.Value);
                string passwordHash = password.Hash;
                return Task.FromResult<string>(passwordHash);
            } else
            {
                throw new NullReferenceException(nameof(user.PasswordId));
            }
            
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

        public Task<bool> HasPassword(User user, CancellationToken cancellationToken = default)
        {
            return Task.FromResult(user.PasswordId.HasValue);
        }
    }
}
