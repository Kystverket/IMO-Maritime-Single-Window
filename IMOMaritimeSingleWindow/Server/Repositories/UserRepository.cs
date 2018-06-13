using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;


using Microsoft.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

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
                .FirstOrDefault();
        }

        public User GetByUserName(string userName)
        {
            return DbSet
                .Where(usr => usr.Email == userName)
                .FirstOrDefault();
        }

        public User GetByNormalizedUserName(string normalizedUserName)
        {
            return DbSet
                .Where(usr => usr.NormalizedEmail == normalizedUserName)
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
            //user.PasswordId = passwordEntry.Entity.PasswordId;
            Context.Set<User>().Update(user);
        }

        public IQueryable<User> GetIqueryAble()
        {
            return Context.Set<User>().AsQueryable();
        }

        public int GetAccessFailedCount(Guid userId)
        {
            throw new NotImplementedException();
        }

        public bool GetLockoutEnabled(Guid userId)
        {
            throw new NotImplementedException();
        }

        public DateTimeOffset? GetLockoutEndDate(Guid userId)
        {
            throw new NotImplementedException();
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
