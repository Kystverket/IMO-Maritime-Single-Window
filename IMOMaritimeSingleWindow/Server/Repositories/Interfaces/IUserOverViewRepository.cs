using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    /// <typeparam name="TKey">The type of the primary key used for the entity</typeparam>
    interface IUserOverviewRepository<TKey> : IRepository<User, TKey>
        where TKey : IEquatable<TKey>
    {
        IEnumerable<Claim> GetClaims(TKey userId);
        IEnumerable<Role> GetRoles(TKey userId);

    }
}
