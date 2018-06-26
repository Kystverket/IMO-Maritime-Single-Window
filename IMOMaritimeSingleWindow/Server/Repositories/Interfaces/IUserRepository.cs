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

        /// <summary>
        /// Retrieves the current failed access count for the specified user.
        /// </summary>
        /// <param name="userId">The id of the user whose failed access count should be retrieved.</param>
        /// <returns>The failed access count</returns>
        int GetAccessFailedCount(TKey userId);

        /// <summary>
        /// Retrieves a flag indicating whether user lockout can be enabled for the specified user.
        /// </summary>
        /// <param name="userId">The id of the user whose ability to be locked out should be returned.</param>
        /// <returns>A bool that has a value of true if a user can be locked out, otherwise false.</returns>
        bool GetLockoutEnabled(TKey userId);

        /// <summary>
        /// Gets the last System.DateTimeOffset a user's last lockout expired, if any. Any
        /// time in the past indicates a user is not locked out.
        /// </summary>
        /// <param name="userId">The id of the user whose lockout date should be retrieved.</param>
        /// <returns>A System.DateTimeOffset containing the last time a user's lockout expired,, if any.</returns>
        DateTimeOffset? GetLockoutEndDate(TKey userId);

        void AddPassword(User user, string passwordHash);
        //User GetByEmail(string email);
        //IEnumerable<Organization> GetOrganizations(TKey id);
        //IEnumerable<Organization> GetOrganizationsByUserName(string userName);
        //IEnumerable<Organization> GetOrganizationsBy(Expression<Func<Organization, bool>> predicate);
        IQueryable<User> GetIqueryAble();
        Role GetRole(Guid userId);
    }
}
