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
        #region custom methods
        public Task<string> GetPasswordHashAsync(User user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (HasPassword(user).GetAwaiter().GetResult())
            {
                Password password = _unitOfWork.Passwords.Get(user.PasswordId.Value);
                string passwordHash = password.Hash;
                return Task.FromResult<string>(passwordHash);
            }
            else
            {
                throw new NullReferenceException(nameof(user.PasswordId));
            }
        }

        public Task<bool> HasPassword(User user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            return Task.FromResult(user.PasswordId.HasValue);
        }

        public Task UpdatePasswordAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            var User = _unitOfWork.Users.GetByNormalizedUserName(user.NormalizedUserName);
            Password pw = _unitOfWork.Passwords.Get(User.PasswordId.Value);
            pw.Hash = user.PasswordHash;

            _unitOfWork.Passwords.Update(pw);

            return Task.CompletedTask;
        }

        //public Task<IdentityResult> UpdatePasswordAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        //{
        //    var User = _unitOfWork.Users.GetByNormalizedUserName(user.NormalizedUserName);
        //    Password pw = _unitOfWork.Passwords.Get(User.PasswordId.Value);
        //    pw.Hash = user.PasswordHash;

        //    _unitOfWork.Passwords.Update(pw);

        //    // Expect only the user table to be affected
        //    var affectedEntities = _unitOfWork.Complete();
        //    if (affectedEntities > 1)
        //        return Task.FromResult(IdentityResult.Failed());
        //    return Task.FromResult(IdentityResult.Success);
        //}
        
        #endregion
    }
}
