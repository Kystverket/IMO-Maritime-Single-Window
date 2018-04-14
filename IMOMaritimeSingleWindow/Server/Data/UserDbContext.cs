
using System;
using IMOMaritimeSingleWindow.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using IMOMaritimeSingleWindow.Extensions;

namespace IMOMaritimeSingleWindow.Data
{
    public class UserDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>
    {

        public DbSet<Person> Person { get; set; }
        public DbSet<Password> Password { get; set; }
        public DbSet<Test> Test { get; set; }

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
            builder.Entity<ApplicationUser>(entity => entity.ToTable(name: "ApplicationUser" );
            builder.Entity<ApplicationRole>(entity => entity.ToTable(name: "ApplicationRole"));
            builder.Entity<ApplicationUserRole>(entity => entity.ToTable(name: "ApplicationUserRole"));
            builder.Entity<ApplicationUserToken>(entity => entity.ToTable(name: "ApplicationUserToken"));
            builder.Entity<ApplicationUserLogin>(entity => entity.ToTable(name: "ApplicationUserLogin"));
            builder.Entity<ApplicationRoleClaim>(entity => entity.ToTable(name: "ApplicationRoleClaim"));
            builder.Entity<ApplicationUserClaim>(entity => entity.ToTable(name: "ApplicationUserClaim"));
            */

            /**
            builder.Entity<ApplicationUser>().ToTable("Person");
            builder.Entity<ApplicationRole>().ToTable("Role");
            builder.Entity<ApplicationUserRole>(entity => entity.ToTable(name: "PersonRole"));
            builder.Entity<ApplicationUserToken>(entity => entity.ToTable(name: "PersonToken"));
            builder.Entity<ApplicationUserLogin>(entity => entity.ToTable(name: "PersonLogin"));
            builder.Entity<ApplicationRoleClaim>(entity => entity.ToTable(name: "RoleRight"));
            builder.Entity<ApplicationUserClaim>(entity => entity.ToTable(name: "PersonRight")); //To be coupled through role?
            */

            
            builder.Entity<ApplicationUser>().ToTable(nameof(ApplicationUser));
            builder.Entity<ApplicationRole>().ToTable(nameof(ApplicationRole));
            builder.Entity<ApplicationUserRole>().ToTable(nameof(ApplicationUserRole));
            builder.Entity<ApplicationUserToken>().ToTable(nameof(ApplicationUserToken));
            builder.Entity<ApplicationUserLogin>().ToTable(nameof(ApplicationUserLogin));
            builder.Entity<ApplicationRoleClaim>().ToTable(nameof(ApplicationRoleClaim));
            builder.Entity<ApplicationUserClaim>().ToTable(nameof(ApplicationUserClaim)); //To be coupled through role?

            builder.Entity<Password>().Property(p => p.PasswordId).UseNpgsqlSerialColumn();
                
        }
    }
}
