using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.ViewModels.Mappings;

using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using NUnit.Framework;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IMOMaritimeSingleWindow.Tests.RepositoryTests
{
    class RoleClaimsRepositoryTest : TestBase
    {
        
        public RoleClaimsRepositoryTest() : base() {
            //Construct the basis

            ClaimType claimType = new ClaimType
            {
                Name = "menu",
                Description = "Menu entries"
            };
            UnitOfWork.ClaimTypes.Add(claimType);
            UnitOfWork.Complete();

            claimType = UnitOfWork.ClaimTypes.Single(ct => ct.Name == "menu");

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

            
            UnitOfWork.RoleClaims.Add(roleClaim);
            UnitOfWork.Complete();
            var cc = InMemoryDatabaseContext.Set<Claim>().Single(c => c.ClaimValue == "portcall");

        }

        /// <summary>
        /// A test that verifies the insertion in the constructor was successful
        /// </summary>
        /// <returns></returns>
        [Test]
        public async Task RoleClaimsConstructedCorrectly()
        {
            var context = InMemoryDatabaseContext as DbContext;
            
            //Claims are added
            Assert.True( await context.Set<Claim>().AnyAsync() );
            Claim claim = null;
            claim = await context.Set<Claim>().FirstAsync(c => c.ClaimValue == "portcall");
            //Claim with the given value was added to the database
            Assert.NotNull(claim);
            Assert.NotNull(claim.ClaimId);
            ClaimType claimType = await context.Set<ClaimType>().SingleAsync(ct => ct.Name == "menu");
            Assert.NotNull(claimType);
        }

        [Test]
        public void GetsClaimsForUser_UoW()
        {
            var user = UnitOfWork.Users.Find(usr => usr.Email == "admin@test.no").ToList().First();
            var claims = UnitOfWork.GetClaimsForUser(user.UserId).ToList();
            Assert.True(claims.Any(c => c.ClaimValue == "portcall"));
        }

        [Test]
        public void GetClaimsForRole()
        {
            var roles = UnitOfWork.Roles.Find(r => r.Name == "admin").ToList();
            
            var claims = UnitOfWork.RoleClaims.GetClaimsForRole(roles.First().RoleId);
            Assert.True(claims.Any(c => c.ClaimValue == "portcall"));
        }

        [Test]
        public void GetSystemClaims()
        {
            var roles = UnitOfWork.Roles.Find(r => r.Name == "admin").ToList();
            var claims = UnitOfWork.RoleClaims.GetClaimsForRole(roles.First().RoleId);
            var systemClaims = UnitOfWork.GetSystemClaims(claims).ToList();
            List<System.Security.Claims.Claim> matchingClaims = systemClaims.Where(scl => scl.Type == "menu").ToList();

            Assert.True( matchingClaims.Any() );

        }
    }
}
