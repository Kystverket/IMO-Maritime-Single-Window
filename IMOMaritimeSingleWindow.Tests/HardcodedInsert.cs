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
        protected open_ssnContext RealDatabaseContext;
        protected readonly UnitOfWork UnitOfWork;

        public HardCodedBase()
        {
            RealDatabaseContext = StorageBuilder.GetContext();
            //RealDatabaseContext = StorageBuilder.GetInMemContextWithRoleData();
            UnitOfWork = (UnitOfWork)StorageBuilder.GetUnitOfWork(RealDatabaseContext);
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
        public void Passes()
        {
            Assert.True(true);
        }

    }
}
