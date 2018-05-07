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
    public class UserRepository : Repository<User, Guid>, IUserRepository<Guid>
    {
        public UserRepository(open_ssnContext context) : base(context)
        {
        }
        
        public User GetByEmail(string email)
        {
            return open_ssnContext.Set<User>()
                .Where(usr => usr.NormalizedEmail == email)
                .FirstOrDefault();
        }

        public User GetByUserName(string userName)
        {
            return open_ssnContext.Set<User>()
                .Where(usr => usr.Email == userName)
                .FirstOrDefault();
        }

        public User GetByNormalizedUserName(string normalizedUserName)
        {
            return open_ssnContext.Set<User>()
                .Where(usr => usr.NormalizedEmail == normalizedUserName)
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
