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

        public IEnumerable<Organization> GetOrganizations(Guid id)
        {
            var organizations = open_ssnContext.User
                .Where(usr => usr.UserId == 1)
                .Select(usr => usr.Organization)
                .ToList();
                
            throw new NotImplementedException();
        }

        public IEnumerable<Organization> GetOrganizationsBy(Expression<Func<Organization, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Organization> GetOrganizationsByUserName(string userName)
        {
            return open_ssnContext.User
                .Where(usr => usr.NormalizedEmail == userName)
                .Select(usr => usr.Organization)
                .ToList();

        }
    }
}
