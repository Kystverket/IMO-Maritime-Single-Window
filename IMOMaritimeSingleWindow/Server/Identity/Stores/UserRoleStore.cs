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
            var role = _roleStore.FindByNameAsync(roleName).GetAwaiter().GetResult();
            if (role == null)
                throw new ArgumentException($"no role with rolename \"{roleName}\" exists!");

            var _user = FindByIdAsync(user.Id.ToString()).GetAwaiter().GetResult();

            User User = _unitOfWork.Users.Get(user.Id);
            if (User.Role != null)
                throw new Exception("User already belong to a role. Call update instead.");
            Role Role = _unitOfWork.Roles.GetByNormalizedName(roleName);
            User.Role = Role;

            // Update user
            _unitOfWork.Users.Update(User);
            _unitOfWork.Complete();
            
            return Task.CompletedTask;
            
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
            throw new NotImplementedException();
        }

        public Task RemoveFromRoleAsync(ApplicationUser user, string roleName, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
