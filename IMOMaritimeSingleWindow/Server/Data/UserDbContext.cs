
using System;
using IMOMaritimeSingleWindow.Identity;
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

        public UserDbContext() { } /* Required for migrations */

        public UserDbContext(DbContextOptions<UserDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ApplicationUser>().ToTable("ApplicationUser");
            builder.Entity<ApplicationRole>().ToTable("ApplicationRole");
            builder.Entity<ApplicationUserRole>().ToTable("ApplicationUserRole");
            builder.Entity<ApplicationUserRole>().Property(ur => ur.RoleId).HasColumnName("ApplicationRoleId");
            builder.Entity<ApplicationUserRole>().Property(ur => ur.UserId).HasColumnName("ApplicationUserId");

            builder.Entity<ApplicationUserToken>().ToTable("ApplicationUserToken");
            builder.Entity<ApplicationUserLogin>().ToTable("ApplicationUserLogin");
            builder.Entity<ApplicationRoleClaim>().ToTable("ApplicationRoleRight");
            builder.Entity<ApplicationUserClaim>().ToTable("ApplicationUserRight"); //To be coupled through role?

            builder.Entity<ApplicationUser>().Ignore(entity => entity.PasswordHash);

            foreach (var entity in builder.Model.GetEntityTypes())
            {
                // Replace table names
                entity.Relational().TableName = entity.Relational().TableName.ToSnakeCase();

                // Replace column names            
                foreach (var property in entity.GetProperties())
                {
                    property.Relational().ColumnName = property.Name.ToSnakeCase();
                }

                foreach (var key in entity.GetKeys())
                {
                    key.Relational().Name = key.Relational().Name.ToSnakeCase();
                }

                foreach (var key in entity.GetForeignKeys())
                {
                    key.Relational().Name = key.Relational().Name.ToSnakeCase();
                }

                foreach (var index in entity.GetIndexes())
                {
                    index.Relational().Name = index.Relational().Name.ToSnakeCase();
                }
            }


            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);


            //builder.Entity<ApplicationUser>(entity => entity.ToTable(name: "ApplicationUser" ));
            //builder.Entity<ApplicationRole>(entity => entity.ToTable(name: "ApplicationRole"));
            //builder.Entity<ApplicationUserRole>(entity => entity.ToTable(name: "ApplicationUserRole"));
            //builder.Entity<ApplicationUserToken>(entity => entity.ToTable(name: "ApplicationUserToken"));
            //builder.Entity<ApplicationUserLogin>(entity => entity.ToTable(name: "ApplicationUserLogin"));
            //builder.Entity<ApplicationRoleClaim>(entity => entity.ToTable(name: "ApplicationRoleClaim"));
            //builder.Entity<ApplicationUserClaim>(entity => entity.ToTable(name: "ApplicationUserClaim"));



            
            

            /*
            builder.Entity<ApplicationUser>().ToTable(nameof(ApplicationUser));
            builder.Entity<ApplicationRole>().ToTable(nameof(ApplicationRole));
            builder.Entity<ApplicationUserRole>().ToTable(nameof(ApplicationUserRole));
            builder.Entity<ApplicationUserToken>().ToTable(nameof(ApplicationUserToken));
            builder.Entity<ApplicationUserLogin>().ToTable(nameof(ApplicationUserLogin));
            builder.Entity<ApplicationRoleClaim>().ToTable(nameof(ApplicationRoleClaim));
            builder.Entity<ApplicationUserClaim>().ToTable(nameof(ApplicationUserClaim)); //To be coupled through role?
            */

            builder.Entity<Password>().Property(p => p.PasswordId).UseNpgsqlSerialColumn();
                
        }
    }
}
