using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IUserRoleRepository<TKey> : IRepository<UserRole, TKey>
        where TKey : IEquatable<TKey>
    {
        //IEnumerable<Role> GetRolesForUser(TKey userId);
        //IEnumerable<User> GetUsersForRole(TKey roleId);
    }
}
