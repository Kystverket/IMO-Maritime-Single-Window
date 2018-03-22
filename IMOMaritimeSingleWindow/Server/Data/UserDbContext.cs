
using System;
using IMOMaritimeSingleWindow.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
namespace IMOMaritimeSingleWindow.Data
{
    public class UserDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>
    {
        
        public UserDbContext() { } /* Required for migrations */

        public UserDbContext(DbContextOptions<UserDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            /**
            builder.Entity<ApplicationUser>(entity => entity.ToTable(name: "Person"));
            builder.Entity<ApplicationRole>(entity => entity.ToTable(name: "Role"));
            builder.Entity<ApplicationUserRole>(entity => entity.ToTable(name: "PersonRole"));
            builder.Entity<ApplicationUserToken>(entity => entity.ToTable(name: "PersonToken"));
            builder.Entity<ApplicationUserLogin>(entity => entity.ToTable(name: "PersonLogin"));
            builder.Entity<ApplicationRoleClaim>(entity => entity.ToTable(name: "RoleRight"));
            builder.Entity<ApplicationUserClaim>(entity => entity.ToTable(name: "PersonRight"));
            */

            builder.Entity<ApplicationUser>().ToTable("Person");
            builder.Entity<ApplicationRole>().ToTable("Role");
            builder.Entity<ApplicationUserRole>(entity => entity.ToTable(name: "PersonRole"));
            builder.Entity<ApplicationUserToken>(entity => entity.ToTable(name: "PersonToken"));
            builder.Entity<ApplicationUserLogin>(entity => entity.ToTable(name: "PersonLogin"));
            builder.Entity<ApplicationRoleClaim>(entity => entity.ToTable(name: "RoleRight"));
            builder.Entity<ApplicationUserClaim>(entity => entity.ToTable(name: "PersonRight")); //To be coupled through role?


            /*
            builder.Entity<ApplicationUser>().ToTable("Person");
            builder.Entity<ApplicationRole>().ToTable("Role");
            builder.Entity<ApplicationUserRole>().ToTable("PersonRole");
            builder.Entity<ApplicationUserToken>().ToTable("PersonToken");
            builder.Entity<ApplicationUserLogin>().ToTable("PersonLogin");
            builder.Entity<ApplicationRoleClaim>().ToTable("RoleRight");
            builder.Entity<ApplicationUserClaim>().ToTable("PersonRight"); //To be coupled through role?
            */

        }
    }
}
