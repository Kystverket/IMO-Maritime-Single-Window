using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class UnitOfWork : IUnitOfWork<Guid>
    {
        private readonly open_ssnContext _context;
        public UnitOfWork(open_ssnContext context)
        {
            _context = context;
            Users = new UserRepository(_context);
            RoleClaims = new RoleClaimsRepository(_context);
            Passwords = new PasswordRepository(_context);
        }

        public IUserRepository<Guid> Users { get; private set; }
        public IRoleClaimsRepository<Guid> RoleClaims { get; private set; }

        public IPasswordRepository<Guid> Passwords { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
