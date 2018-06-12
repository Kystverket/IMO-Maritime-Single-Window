using System;
using System.Linq;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public interface IUserRepository<TKey> : IRepository<User, TKey>
        where TKey : IEquatable<TKey>
    {
        User GetByUserName(string userName);
        User GetByNormalizedUserName(string normalizedUserName);
        void AddPassword(User user, string passwordHash);
        //User GetByEmail(string email);
        //IEnumerable<Organization> GetOrganizations(TKey id);
        //IEnumerable<Organization> GetOrganizationsByUserName(string userName);
        //IEnumerable<Organization> GetOrganizationsBy(Expression<Func<Organization, bool>> predicate);
        IQueryable<User> GetIqueryAble();
        Role GetRole(Guid userId);
    }
}
