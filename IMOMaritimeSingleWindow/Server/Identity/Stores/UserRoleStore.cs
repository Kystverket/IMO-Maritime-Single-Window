using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;


namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserRoleStore<ApplicationUser>
    {

        #region IUserRoleStore
        public override Task AddToRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user == null)
                throw new ArgumentNullException(nameof(user));
            if (normalizedRoleName == null)
                throw new ArgumentNullException(nameof(normalizedRoleName));

            // check if role name exists
            if (_unitOfWork.Roles.GetByNormalizedName(normalizedRoleName) == null)
                throw new Exception("role does not exist!");

            SetNormalizedRoleNameAsync(user, normalizedRoleName).GetAwaiter();

            return Task.CompletedTask;
        }

        public override Task<IList<string>> GetRolesAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override Task<IList<ApplicationUser>> GetUsersInRoleAsync(string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override Task<bool> IsInRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override Task RemoveFromRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            var _user = GetUserById(user.Id);
            _user.Role = null;
            _user.RoleId = null;
            _unitOfWork.Users.Update(_user);
            _unitOfWork.Complete();

            return Task.CompletedTask;
        }
        #endregion // IUserRoleStore


        #region Custom Methods

        protected override Task<ApplicationRole> FindRoleAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task SetNormalizedRoleNameAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (roleName == null)
                throw new ArgumentNullException(nameof(roleName));
            user.NormalizedRoleName = roleName.ToUpper();
            return Task.CompletedTask;
        }

        public Task<IdentityResult> UpdateRoleAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            var User = _unitOfWork.Users.GetByNormalizedUserName(user.NormalizedUserName);
            var role = _unitOfWork.Roles.GetByNormalizedName(user.NormalizedRoleName);
            User.Role = role;

            _unitOfWork.Users.Update(User);

            // Expect only the user table to be affected
            var affectedEntities = _unitOfWork.Complete();
            if (affectedEntities > 1)
                return Task.FromResult(IdentityResult.Failed());
            return Task.FromResult(IdentityResult.Success);
        }

        #endregion
    }
}
