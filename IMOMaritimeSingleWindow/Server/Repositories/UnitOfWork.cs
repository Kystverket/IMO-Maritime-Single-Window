using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public partial class UnitOfWork : IUnitOfWork<Guid>
    {
        private readonly open_ssnContext _context;
        public UnitOfWork(open_ssnContext context)
        {
            _context = context;
            Users = new UserRepository(_context);
            RoleClaims = new RoleClaimsRepository(_context);
            Passwords = new PasswordRepository(_context);
            Persons = new PersonRepository(_context);
            UserRoles = new UserRoleRepository(_context);
            Roles = new RoleRepository(_context);
            ClaimTypes = new ClaimTypeRepository(_context);
        }

        public IUserRepository<Guid> Users { get; private set; }
        public IRoleRepository<Guid> Roles { get; private set; }
        public IRoleClaimsRepository<Guid> RoleClaims { get; private set; }
        public IPasswordRepository<Guid> Passwords { get; private set; }
        public IPersonRepository<Guid> Persons { get; private set; }
        public IUserRoleRepository<Guid> UserRoles { get; private set; }
        public IClaimTypeRepository<Guid> ClaimTypes { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        //Additional methods

        public IEnumerable<Claim> GetClaimsForUser(Guid userId)
        {
            var userRoles = UserRoles.Find(u => u.UserId == userId).ToList();
            var claims = new List<List<Claim>>();
            foreach (var userRole in userRoles)
            {
                var role = Roles.Get(userRole.RoleId);
                claims.Add(RoleClaims.GetClaimsForRole(role.RoleId).ToList());
            }
            //Remove duplicate claims originating from various roles    
            var claimsList = claims.SelectMany(list => list).Distinct();
            return claimsList;
        }

        public IEnumerable<System.Security.Claims.Claim> GetSystemClaims(IEnumerable<Claim> claims)
        {
            var systemClaims = claims.Join(ClaimTypes.GetAll(),
                c => c.ClaimTypeId,
                ct => ct.ClaimTypeId,
                (c, ct) => new System.Security.Claims.Claim
                    (type: ct.Name, value: c.ClaimValue)
                ).AsEnumerable();
            return systemClaims;
        }
    }
}
