
using IMOMaritimeSingleWindow.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace IMOMaritimeSingleWindow.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser/*, Role, string*/>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        //public DbSet<Person> Persons { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
      // Customize the ASP.NET Identity model and override the defaults if needed.
      // For example, you can rename the ASP.NET Identity table names and more.
      // Add your customizations after calling base.OnModelCreating(builder);

      //Renaming of ASP NET Identity table names
      
        builder.Entity<Role>(entity =>
            {
            entity.ToTable(name: "Role");
            });

            builder.Entity<AppUser>().ToTable("Person");

            builder.Entity<IdentityUserRole<string>>().ToTable("PersonRole");
            builder.Entity<IdentityUserToken<string>>().ToTable("PersonToken");
            builder.Entity<IdentityUserLogin<string>>().ToTable("PersonLogin");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaim");
            builder.Entity<PersonClaim>().ToTable("PersonClaim");
            builder.Entity<PersonClaim>(entity =>
            {
            entity.ToTable(name: "PersonClaim");
            });
        

    }
  }
}
