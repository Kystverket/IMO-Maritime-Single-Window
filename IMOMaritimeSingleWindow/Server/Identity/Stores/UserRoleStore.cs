using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;


namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserRoleStore<ApplicationUser>
    {

        #region IUserRoleStore
        public override async Task AddToRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if (user == null)
                throw new ArgumentNullException(nameof(user));
            if (normalizedRoleName == null)
                throw new ArgumentNullException(nameof(normalizedRoleName));

            // check if role name exists
            if (await FindRoleAsync(normalizedRoleName, cancellationToken) == null)
            {
                var error = ErrorDescriber.InvalidRoleName(normalizedRoleName);
                throw new Exception(IdentityResult.Failed(error).ToString());
            }

            await SetNormalizedRoleNameAsync(user, normalizedRoleName);
        }

        public override Task<IList<string>> GetRolesAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            throw new NotSupportedException();
        }

        public override Task<IList<ApplicationUser>> GetUsersInRoleAsync(string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            throw new NotImplementedException();
        }

        public override async Task<bool> IsInRoleAsync(ApplicationUser user, string normalizedRoleName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            var Id = ConvertIdFromString(await GetUserIdAsync(user));
            var _user = _unitOfWork.Users.Get(filter: usr => usr.UserId == Id, includeProperties: nameof(User.Role)).FirstOrDefault();
            return String.Equals(_user.Role.NormalizedName, normalizedRoleName);
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

        public async Task<ApplicationRole> GetRoleAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            var userId = ConvertIdFromString(await GetUserIdAsync(user));
            var role = _unitOfWork.Users.GetRole(userId);
            return _mapper.Map<Role, ApplicationRole>(role);
        }

        public async Task<string> GetRoleNameAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            ThrowIfDisposed();
            var userId = ConvertIdFromString(await GetUserIdAsync(user));
            var role = _unitOfWork.Users.GetRole(userId);
            return role.Name;
        }

        protected override Task<ApplicationRole> FindRoleAsync(string normalizedRoleName, CancellationToken cancellationToken)
        {
            var Role = _unitOfWork.Roles.GetByNormalizedName(normalizedRoleName);
            var appRole = _mapper.Map<Role, ApplicationRole>(Role);
            return Task.FromResult(appRole);
            
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
