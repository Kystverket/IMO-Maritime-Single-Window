using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using AutoMapper;
using System.Threading;
using System.Diagnostics;
using System.Linq;

namespace IMOMaritimeSingleWindow.Identity.Stores
{
    public partial class UserStore : IUserRoleStore<ApplicationUser>
    {
        public Task AddToRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken = default)
        {
            cancellationToken.ThrowIfCancellationRequested();
            if(user==null)
                throw new ArgumentNullException(nameof(user));
            if (roleName == null)
                throw new ArgumentNullException(nameof(roleName));

            // check if role name exists
            if (_unitOfWork.Roles.GetByNormalizedName(roleName) == null)
                throw new Exception("role does not exist!");

            SetNormalizedRoleNameAsync(user, roleName).GetAwaiter();

            return Task.CompletedTask;
        }

        public Task<IdentityResult> UpdateRoleAsync(ApplicationUser user, CancellationToken cancellationToken = default)
        {
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

        public Task<IList<string>> GetRolesAsync(ApplicationUser user, CancellationToken cancellationToken)
        {
            var userId = _unitOfWork.Users.Get(user.Id).UserId;
            var role = _unitOfWork.Users.GetRole(userId);
            var roleName = role.Name;
            return Task.FromResult<IList<string>>(new List<string> { roleName });
        }

        public Task<IList<ApplicationUser>> GetUsersInRoleAsync(string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<bool> IsInRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken)
        {
            User User = _unitOfWork.Users.GetByNormalizedUserName(user.NormalizedUserName);
            if (User.Role == null)
                return Task.FromResult<bool>(false);

            bool isInRole = User.Role.Name == roleName;
            return Task.FromResult(isInRole);
        }

        public Task RemoveFromRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task SetNormalizedRoleNameAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken = default)
        {
            if(roleName == null)
                throw new ArgumentNullException(nameof(roleName));
            user.NormalizedRoleName = roleName.ToUpper();
            return Task.CompletedTask;
        }
    }
}
