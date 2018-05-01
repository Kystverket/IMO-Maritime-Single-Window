using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IRoleRepository<TKey> : IRepository<Role, TKey>
        where TKey : IEquatable<TKey>
    {
        Role GetByRoleName(string roleName);
        Role GetByNormalizedName(string normalizedRoleName);
    }
}