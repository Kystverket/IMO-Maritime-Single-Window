using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Identity.Models;
using System.Threading;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserLockoutStore<ApplicationUser>
    {

        public Task<int> GetAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            return Task.FromResult(user.AccessFailedCount);
        }

        public Task<bool> GetLockoutEnabledAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            return Task.FromResult(user.LockoutEnabled);
        }

        public Task<DateTimeOffset?> GetLockoutEndDateAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            return Task.FromResult(user.LockoutEnd);
        }

        public Task<int> IncrementAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.AccessFailedCount++;
            return Task.FromResult(user.AccessFailedCount);
        }

        public Task ResetAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.AccessFailedCount = 0;
            return Task.CompletedTask;
        }

        public Task SetLockoutEnabledAsync(ApplicationUser user, bool enabled, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.LockoutEnabled = true;
            return Task.CompletedTask;
        }

        public Task SetLockoutEndDateAsync(ApplicationUser user, DateTimeOffset? lockoutEnd, CancellationToken cancellationToken)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            user.LockoutEnd = lockoutEnd;
            return Task.CompletedTask;
        }


        //

        //public Task<int> GetAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken)
        //{
        //    cancellationToken.ThrowIfCancellationRequested();
        //    return Task.FromResult(_unitOfWork.Users.GetAccessFailedCount(user.Id));
        //}

        //public Task<bool> GetLockoutEnabledAsync(ApplicationUser user, CancellationToken cancellationToken)
        //{
        //    cancellationToken.ThrowIfCancellationRequested();
        //    return Task.FromResult(_unitOfWork.Users.GetLockoutEnabled(user.Id));
        //}

        //public Task<DateTimeOffset?> GetLockoutEndDateAsync(ApplicationUser user, CancellationToken cancellationToken)
        //{
        //    cancellationToken.ThrowIfCancellationRequested();
        //    return Task.FromResult(_unitOfWork.Users.GetLockoutEndDate(user.Id));
        //}

        //public Task<int> IncrementAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken)
        //{
        //    cancellationToken.ThrowIfCancellationRequested();
        //    var _user = _unitOfWork.Users.Get(user.Id);
        //    _user.AccessFailedCount++;
        //    _unitOfWork.Users.Update(_user);
        //    var objectsAffected = _unitOfWork.Complete();
        //    return Task.FromResult(_user.AccessFailedCount.Value);
        //}

        //public Task ResetAccessFailedCountAsync(ApplicationUser user, CancellationToken cancellationToken)
        //{
        //    cancellationToken.ThrowIfCancellationRequested();
        //    var _user = _unitOfWork.Users.Get(user.Id);
        //    _user.AccessFailedCount = 0;
        //    _unitOfWork.Users.Update(_user);
        //    _unitOfWork.Complete();
        //    return Task.CompletedTask;
        //}

        //public Task SetLockoutEnabledAsync(ApplicationUser user, bool enabled, CancellationToken cancellationToken)
        //{
        //    cancellationToken.ThrowIfCancellationRequested();
        //    var _user = _unitOfWork.Users.Get(user.Id);
        //    _user.LockoutEnabled = true;
        //    _unitOfWork.Users.Update(_user);
        //    _unitOfWork.Complete();
        //    return Task.CompletedTask;
        //}

        //public Task SetLockoutEndDateAsync(ApplicationUser user, DateTimeOffset? lockoutEnd, CancellationToken cancellationToken)
        //{
        //    cancellationToken.ThrowIfCancellationRequested();
        //    var _user = _unitOfWork.Users.Get(user.Id);
        //    _user.LockoutEnd = lockoutEnd;
        //    _unitOfWork.Users.Update(_user);
        //    _unitOfWork.Complete();
        //    return Task.CompletedTask;
        //}
    }
}
