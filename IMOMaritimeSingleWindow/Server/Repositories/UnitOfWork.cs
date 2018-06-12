using System;
using System.Collections.Generic;
using System.Linq;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Repositories
{
    public class UnitOfWork : IUnitOfWork<Guid>
    {
        private readonly IDbContext _context;
        public UnitOfWork(IDbContext context)
        {
            _context = context;
            Users = new UserRepository(_context);
            RoleClaims = new RoleClaimsRepository(_context);
            Passwords = new PasswordRepository(_context);
            Persons = new PersonRepository(_context);
            Roles = new RoleRepository(_context);
            ClaimTypes = new ClaimTypeRepository(_context);
            Claims = new ClaimRepository(_context);
        }

        public IUserRepository<Guid> Users { get; private set; }
        public IRoleRepository<Guid> Roles { get; private set; }
        public IRoleClaimsRepository<Guid> RoleClaims { get; private set; }
        public IPasswordRepository<Guid> Passwords { get; private set; }
        public IPersonRepository<Guid> Persons { get; private set; }
        public IClaimTypeRepository<Guid> ClaimTypes { get; private set; }
        public IClaimRepository<Guid> Claims { get; private set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IEnumerable<System.Security.Claims.Claim> GetAllClaims()
        {
            var claims = (from c in _context.Claim
                      join ct in _context.ClaimType
                      on c.ClaimTypeId equals ct.ClaimTypeId
                      select new System.Security.Claims.Claim(ct.Name, c.ClaimValue))
                      .AsEnumerable();
            return claims;
        }


        public IEnumerable<Claim> GetClaimsByType(string typeName)
        {
            var claimType = ClaimTypes.Find(ct => typeName.Equals(ct.Name)).FirstOrDefault();
            if (claimType == null)
            {
                throw new ArgumentException("Claim type " + typeName + " does not exist.");
            }
            var claims = Claims.Find(c => c.ClaimTypeId == claimType.ClaimTypeId);
            return claims;
        }

        public IEnumerable<Claim> GetClaimsForUser(Guid userId)
        {
            var user = Users.Get(userId);
            if (user == null)
                throw new ArgumentException(nameof(userId) + "does not belong to any user");
            var roleId = user.RoleId;
            if (!roleId.HasValue)
                throw new ArgumentException("user with given " + nameof(userId) + " does not belong to any role, and therefore has no claims.");
            var claims = RoleClaims.GetClaimsForRole(roleId.Value);
            return claims;
        }

        public IEnumerable<System.Security.Claims.Claim> GetSystemClaims(IEnumerable<Claim> claims)
        {
            var systemClaims = claims.Join(_context.ClaimType,
                c => c.ClaimTypeId,
                ct => ct.ClaimTypeId,
                (c, ct) => new System.Security.Claims.Claim
                    (type: ct.Name, value: c.ClaimValue)
                ).AsEnumerable();
            return systemClaims;
        }
    }
}
