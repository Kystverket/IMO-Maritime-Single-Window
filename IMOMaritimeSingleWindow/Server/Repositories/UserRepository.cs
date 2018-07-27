using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class UserRepository : EFConcreteRepository<User, Guid>, IUserRepository<Guid>
    {
        public UserRepository(IDbContext context) : base(context)
        {
        }
        
        public User GetByEmail(string email)
        {
            return DbSet
                .Where(usr => usr.NormalizedEmail == email)
                .Include(usr => usr.Person)
                .Include(usr => usr.Password)
                .FirstOrDefault();
        }

        public User GetByUserName(string userName)
        {
            return DbSet
                .Where(usr => usr.Email.Equals(userName))
                .Include(usr => usr.Person)
                .Include(usr => usr.Password)
                .FirstOrDefault();
        }

        public User GetByNormalizedUserName(string normalizedUserName)
        {
            return DbSet
                .Where(usr => usr.NormalizedEmail.Equals(normalizedUserName))
                .Include(usr => usr.Person)
                .Include(usr => usr.Password)
                .FirstOrDefault();
        }

        public Role GetRole(Guid userId)
        {
            var user = Get(userId);
            return Context.Set<Role>()
                .Where(rol => rol.RoleId == user.RoleId)
                .FirstOrDefault();
        }


        public void AddPassword(User user, string passwordHash)
        {
            var passwordEntry = Context.Set<Password>().Add(new Password { Hash = passwordHash });
            user.Password = passwordEntry.Entity;
            DbSet.Update(user);
        }

        public IQueryable<User> GetIqueryAble()
        {
            return DbSet.AsQueryable();
        }

        public int GetAccessFailedCount(Guid userId)
        {
            return DbSet
                .Where(usr => usr.UserId == userId)
                .Select(usr => usr.AccessFailedCount)
                .FirstOrDefault();
        }

        public bool GetLockoutEnabled(Guid userId)
        {
            throw new NotImplementedException();
        }

        public DateTimeOffset? GetLockoutEndDate(Guid userId)
        {
            return DbSet
                .Where(usr => usr.UserId == userId)
                .Select(usr => usr.LockoutEnd)
                .FirstOrDefault();
        }


        //public IEnumerable<Organization> GetOrganizations(Guid id)
        //{
        //    var organizations = open_ssnContext.User
        //        .Where(usr => usr.UserId == 1)
        //        .Select(usr => usr.Organization)
        //        .ToList();

        //    throw new NotImplementedException();
        //}

        //public IEnumerable<Organization> GetOrganizationsBy(Expression<Func<Organization, bool>> predicate)
        //{
        //    throw new NotImplementedException();
        //}

        //public IEnumerable<Organization> GetOrganizationsByUserName(string userName)
        //{
        //    return open_ssnContext.User
        //        .Where(usr => usr.NormalizedEmail == userName)
        //        .Select(usr => usr.Organization)
        //        .ToList();

        //}
    }
}
