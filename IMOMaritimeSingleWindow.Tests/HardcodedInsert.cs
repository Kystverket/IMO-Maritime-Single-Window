using System.Linq;
using IMOMaritimeSingleWindow.Tests.Data;
using IMOMaritimeSingleWindow.Helpers;
using IMOMaritimeSingleWindow.ViewModels.Mappings;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Identity.Stores;
using AutoMapper;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Repositories;
using NUnit.Framework;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Tests
{

    public class HardCodedBase
    {
        protected open_ssnContext DatabaseContext;
        protected readonly UnitOfWork UnitOfWork;

        public HardCodedBase()
        {
            // Using real database
            //var RealDatabaseContext = StorageBuilder.GetContext();
            //UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(RealDatabaseContext);
            //DatabaseContext = RealDatabaseContext;

            // Using in-memory database
            var InMemoryDatabaseContext = StorageBuilder.GetInMemContextWithRoleData();
            DatabaseContext = InMemoryDatabaseContext;
            UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(InMemoryDatabaseContext);

            // Configure auto-mapper
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile<IdentityEntitiesToModelsMappingProfile>());
            var mapper = configuration.CreateMapper();
        }
    }

    public class HardcodedInsert : HardCodedBase
    {

        [Test]
        public void InsertsData()
        {
            // Create new claim type
            ClaimType menuClaimType = new ClaimType
            {
                Name = "Menu",
                Description = "Claims representing access to the different menus of the application."
            };
            UnitOfWork.ClaimTypes.Add(menuClaimType);

            UnitOfWork.Complete();

            Role adminRole = UnitOfWork.Roles.Find(r => r.NormalizedName == "ADMIN").FirstOrDefault();
            Role customsRole = UnitOfWork.Roles.Find(r => r.NormalizedName == "CUSTOMS").FirstOrDefault();
            List<Role> rolesToAddClaimsTo = new List<Role> { adminRole, customsRole };

            List<Claim> claims = new List<Claim>
            {
                new Claim
                {
                    ClaimType = menuClaimType,
                    ClaimValue = "PORT CALL"
                }
            };

            UnitOfWork.RoleClaims.AddClaimsToRole(claims, customsRole.RoleId);

            claims.AddRange(new List<Claim>
            {
                new Claim
                {
                    ClaimType = menuClaimType,
                    ClaimValue = "USERS"
                },
                new Claim
                {
                    ClaimType = menuClaimType,
                    ClaimValue = "SHIPS"
                },
                new Claim
                {
                    ClaimType = menuClaimType,
                    ClaimValue = "LOCATIONS"
                },
                new Claim
                {
                    ClaimType = menuClaimType,
                    ClaimValue = "ORGANIZATIONS"
                }
            });

            UnitOfWork.RoleClaims.AddClaimsToRole(claims, adminRole.RoleId);
            UnitOfWork.Complete();
        }

        [Test]
        public void UpdateAdmin()
        {
            var regClaim = UnitOfWork.Claims.Find(cl => cl.ClaimValue == "Register").FirstOrDefault();
            var clearClaim = UnitOfWork.Claims.Find(cl => cl.ClaimValue == "Clearance").FirstOrDefault();

            var adminRole = UnitOfWork.Roles.GetByNormalizedName("ADMIN");

            UnitOfWork.RoleClaims.AddClaimsToRole(new List<Claim> { regClaim, clearClaim }, adminRole.RoleId);
            UnitOfWork.Complete();
        }

        [Test]
        public void UpdateAdmin2()
        {
            var cancelClaim = UnitOfWork.Claims.Find(cl => cl.ClaimValue == "Cancel").FirstOrDefault();

            var adminRole = UnitOfWork.Roles.GetByNormalizedName("ADMIN");

            UnitOfWork.RoleClaims.Add(new RoleClaim
            {
                Claim = cancelClaim,
                Role = adminRole
            });
            UnitOfWork.Complete();
        }


        [Test]
        public void InsertUser()
        {
            Password pw = new Password
            {
                Hash = "XXXXXXXX"
            };
            Role role = UnitOfWork.Roles.GetByNormalizedName("XXXX");
            User usr = new User
            {
                Email = "xxxx@test.no",
                EmailConfirmed = true,
                NormalizedEmail = "XXXX@TEST.NO",
                Password = pw,
                Role = role
            };
            
            UnitOfWork.Users.Add(usr);
            UnitOfWork.Complete();
            
            Assert.True(true);
        }

        [Test]
        public void InsertRole()
        {
            Role role = new Role
            {
                Name = "xxxx",
                NormalizedName = "XXXX",
                Description = "XXXX"
            };

            UnitOfWork.Roles.Add(role);
            UnitOfWork.Complete();

            var menuClaims = UnitOfWork.GetClaimsByType("Menu").ToList();
            var portCallMenuClaim = UnitOfWork.GetClaimsByType("Menu").FirstOrDefault(cl => cl.ClaimValue == "PORT CALL");
            var portCallClaims = UnitOfWork.GetClaimsByType("Port Call")
                .Where(cl => cl.ClaimValue == "Clearance" || cl.ClaimValue == "View")
                .ToList();

            var claimsList = new List<Claim> { portCallMenuClaim };
            claimsList.AddRange(portCallClaims);
            UnitOfWork.RoleClaims.AddClaimsToRole(claimsList, role.RoleId);
            UnitOfWork.Complete();

            Assert.True(true);

        }

        [Test]
        public void InsertRegisterClaim()
        {
            var pcClaimType = UnitOfWork.ClaimTypes.Find(ct => ct.Name == "Port Call").FirstOrDefault();
            Claim regClaim = new Claim
            {
                ClaimValue = "Cancel",
                ClaimType = pcClaimType
            };

            UnitOfWork.Claims.Add(regClaim);
            UnitOfWork.Complete();

            Assert.True(true);
        }


        [Test]
        public void Passes()
        {
            Assert.True(true);
        }

    }
}
