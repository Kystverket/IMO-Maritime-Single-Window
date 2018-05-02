using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Repositories;

namespace IMOMaritimeSingleWindow.Tests.Data
{
    public static class StorageBuilder
    {

        public static open_ssnContext GetInMemContext()
        {
            var options = new DbContextOptionsBuilder<open_ssnContext>()
                      .UseInMemoryDatabase(Guid.NewGuid().ToString())
                      .Options;
            var context = new open_ssnContext(options);

            //optionally fill database with data
            
            return context;
        }

        public static open_ssnContext GetInMemContextWithRoleData(){
            open_ssnContext context = GetInMemContext();
            AddRoleData(context);
            return context;
        }

        public static IUnitOfWork<Guid> GetUnitOfWork(open_ssnContext context)
        {
            return new UnitOfWork(context);
        }

        private static void AddRoleData(open_ssnContext context)
        {
            var con = context as DbContext;
            ClaimType claimType = new ClaimType
            {
                ClaimTypeId = Guid.NewGuid(),
                Name = "Port Call",
                Description = "Claim type for claims related to port call."
            };

            Role role = new Role
            {
                RoleId = Guid.NewGuid(),
                Name = "admin",
                NormalizedName = "ADMIN",
                Description = "Administrator role"
            };

            context.ClaimType.Add(claimType);
            context.Role.Add(role);
            context.SaveChanges();

            role = context.Set<Role>().SingleAsync(r => r.Name == "admin").GetAwaiter().GetResult();
            claimType = con.Set<ClaimType>().SingleAsync(ct => ct.Name == "Port Call").GetAwaiter().GetResult();

            List<Claim> claims = new List<Claim>
            {
                new Claim
                {
                    ClaimId = Guid.NewGuid(),
                    ClaimType = claimType,
                    ClaimValue = "View"
                },
                new Claim
                {
                    ClaimId = Guid.NewGuid(),
                    ClaimType = claimType,
                    ClaimValue = "Edit"
                }
                
            };

            List<RoleClaim> roleClaims = new List<RoleClaim>();
            foreach (var claim in claims)
                roleClaims.Add(new RoleClaim
                {
                    RoleClaimId = Guid.NewGuid(),
                    Role = role,
                    Claim = claim
                });

            role = context.Set<Role>().SingleAsync(r => r.Name == "admin").GetAwaiter().GetResult();

            context.RoleClaim.AddRange(roleClaims);
            context.SaveChanges();

            // Add new customs role

            role = new Role
            {
                RoleId = Guid.NewGuid(),
                Name = "customs",
                NormalizedName = "CUSTOMS",
                Description = "Customs role"
            };

            context.Role.Add(role);
            context.SaveChanges();

            // Make customs role have portcall view and clearance claims

            claims.RemoveAt(1);

            claims.Insert(1,
                new Claim
                {
                    ClaimId = Guid.NewGuid(),
                    ClaimType = claimType,
                    ClaimValue = "Clearance"
                });

            roleClaims.Clear();
            foreach (var claim in claims)
                roleClaims.Add(new RoleClaim
                {
                    RoleClaimId = Guid.NewGuid(),
                    Role = role,
                    Claim = claim
                });

            context.RoleClaim.AddRange(roleClaims);
            context.SaveChanges();

        }

    }
}
