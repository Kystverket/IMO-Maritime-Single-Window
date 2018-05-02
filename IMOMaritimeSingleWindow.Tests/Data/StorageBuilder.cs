using System;
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
                Name = "menu",
                Description = "Menu entries"
            };

            Role role = new Role
            {
                Name = "admin",
                NormalizedName = "ADMIN",
                Description = "Administrator role"
            };

            con.Set<ClaimType>().Add(claimType);
            context.Role.Add(role);
            context.SaveChanges();

            role = context.Set<Role>().SingleAsync(r => r.Name == "admin").GetAwaiter().GetResult();
            claimType = con.Set<ClaimType>().SingleAsync(ct => ct.Name == "menu").GetAwaiter().GetResult();

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

            role = context.Set<Role>().SingleAsync(r => r.Name == "admin").GetAwaiter().GetResult();

            context.RoleClaim.Add(roleClaim);
            context.SaveChanges();
        }

    }
}
