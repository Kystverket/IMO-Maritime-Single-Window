using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

using IMOMaritimeSingleWindow.IdentityModels;
using Microsoft.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Data;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class UserRepository : Repository<User, Guid>, IUserRepository<Guid>
    {
        public UserRepository(userdbContext context) : base(context)
        {
        }
        
        public User GetByEmail(string email)
        {
            return UserDbContext.Set<User>()
                .Where(usr => usr.NormalizedEmail == email)
                .FirstOrDefault();
        }

        public User GetByUserName(string userName)
        {
            return UserDbContext.Set<User>()
                .Where(usr => usr.UserName == userName)
                .FirstOrDefault();
        }
    }
}
