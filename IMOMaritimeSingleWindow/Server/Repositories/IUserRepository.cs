using System;
using System.Linq.Expressions;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//using IMOMaritimeSingleWindow.IdentityModels;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IUserRepository<TKey> : IRepository<User, TKey>
        where TKey : IEquatable<TKey>
    {
        User GetByUserName(string userName);
        User GetByEmail(string email);
        IEnumerable<Organization> GetOrganizations(TKey id);
        IEnumerable<Organization> GetOrganizationsByUserName(string userName);
        IEnumerable<Organization> GetOrganizationsBy(Expression<Func<Organization, bool>> predicate);
        
    }
}
