using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Repositories;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestContext = IMOMaritimeSingleWindow.Data.TestContext;

namespace IMOMaritimeSingleWindow.Tests.RepositoryTests
{
    class RoleClaimsRepositoryTest
    {
        private readonly UnitOfWork unitOfWork;
        private readonly TestContext context;
        public RoleClaimsRepositoryTest() {

            var factory = new ContextFactory();
            context = factory.CreateContext();
            unitOfWork = new UnitOfWork(context);
        }

        [OneTimeSetUp]
        public void InitialSetUp()
        {
            // Arrange for the other tests

            ClaimType claimType = new ClaimType
            {
                Name = "menu",
                Description = "Menu entries"
            };
            unitOfWork.ClaimTypes.Add(claimType);
            unitOfWork.Complete();

            claimType = unitOfWork.ClaimTypes.Single(ct => ct.Name == "menu");

            Role role = new Role
            {
                Name = "admin",
                Description = "Administrator role"
            };

            Claim claim = new Claim
            {
                ClaimType = claimType,
                ClaimValue = "portcall"
            };

            RoleClaim roleClaim = new RoleClaim
            {
                Role = role,
                Claim = claim
            };

            unitOfWork.RoleClaims.Add(roleClaim);
            unitOfWork.Complete();
        }

        /// <summary>
        /// A test that verifies the initial set up was successful
        /// </summary>
        /// <returns></returns>
        [Test]
        public async Task RoleClaimsConstructedCorrectly()
        {
            
            // Claims are added
            Assert.True( await context.Set<Claim>().AnyAsync() );
            Claim claim = null;
            claim = await context.Set<Claim>().FirstAsync(c => c.ClaimValue == "portcall");

            // Claim with the given value was added to the database
            Assert.NotNull(claim);
            Assert.NotNull(claim.ClaimId);
            ClaimType claimType = await context.Set<ClaimType>().SingleAsync(ct => ct.Name == "menu");
            Assert.NotNull(claimType);
        }

        [Test]
        public void GetClaimsForRole()
        {
            // Arrange
            var role = unitOfWork.Roles.Single(r => r.Name == "admin");
            // Act
            var claims = unitOfWork.RoleClaims.GetClaimsForRole(role.RoleId);
            // Assert
            Assert.True(claims.Any(c => c.ClaimValue == "portcall"));
        }

        [Test]
        public void GetSystemClaims()
        {
            // Arrange
            var roles = unitOfWork.Roles.Find(r => r.Name == "admin").ToList();
            // Act
            var claims = unitOfWork.RoleClaims.GetClaimsForRole(roles.First().RoleId);
            var systemClaims = unitOfWork.GetSystemClaims(claims).ToList();
            // Assert
            List<System.Security.Claims.Claim> matchingClaims = systemClaims.Where(scl => scl.Type == "menu").ToList();
            Assert.True( matchingClaims.Any() );
        }
    }
}
