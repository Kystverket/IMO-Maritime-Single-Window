using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

using IMOMaritimeSingleWindow.TestModels;

namespace IMOMaritimeSingleWindow.Data
{
    public partial class usertestContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>
    {
        public virtual DbSet<ApplicationRole> ApplicationRole { get; set; }
        public virtual DbSet<ApplicationUser> ApplicationUser { get; set; }
        public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }
        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }
        public virtual DbSet<Password> Password { get; set; }
        public virtual DbSet<Person> Person { get; set; }

        public usertestContext(DbContextOptions<usertestContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql(@"Server=localhost;User Id=postgres;Password=admin123;Database=usertest");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ApplicationRole>(entity =>
            {
                entity.ToTable("application_role");

                entity.HasIndex(e => e.NormalizedName)
                    .HasName("role_name_index")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.ConcurrencyStamp).HasColumnName("concurrency_stamp");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.NormalizedName).HasColumnName("normalized_name");
            });

            modelBuilder.Entity<ApplicationUser>(entity =>
            {
                entity.ToTable("application_user");

                entity.HasIndex(e => e.NormalizedEmail)
                    .HasName("email_index");

                entity.HasIndex(e => e.NormalizedUserName)
                    .HasName("user_name_index")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.AccessFailedCount).HasColumnName("access_failed_count");

                entity.Property(e => e.ConcurrencyStamp).HasColumnName("concurrency_stamp");

                entity.Property(e => e.CustomField).HasColumnName("custom_field");

                entity.Property(e => e.Email).HasColumnName("email");

                entity.Property(e => e.EmailConfirmed).HasColumnName("email_confirmed");

                entity.Property(e => e.LockoutEnabled).HasColumnName("lockout_enabled");

                entity.Property(e => e.LockoutEnd).HasColumnName("lockout_end");

                entity.Property(e => e.NormalizedEmail).HasColumnName("normalized_email");

                entity.Property(e => e.NormalizedUserName).HasColumnName("normalized_user_name");

                entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");

                entity.Property(e => e.PhoneNumberConfirmed).HasColumnName("phone_number_confirmed");

                entity.Property(e => e.SecurityStamp).HasColumnName("security_stamp");

                entity.Property(e => e.TwoFactorEnabled).HasColumnName("two_factor_enabled");

                entity.Property(e => e.UserName).HasColumnName("user_name");
            });

            modelBuilder.Entity<AspNetRoleClaims>(entity =>
            {
                entity.ToTable("asp_net_role_claims");

                entity.HasIndex(e => e.RoleId)
                    .HasName("ix_asp_net_role_claims_role_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClaimType).HasColumnName("claim_type");

                entity.Property(e => e.ClaimValue).HasColumnName("claim_value");

                entity.Property(e => e.Discriminator)
                    .IsRequired()
                    .HasColumnName("discriminator");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("fk_asp_net_role_claims_application_role_role_id");
            });

            modelBuilder.Entity<AspNetUserClaims>(entity =>
            {
                entity.ToTable("asp_net_user_claims");

                entity.HasIndex(e => e.UserId)
                    .HasName("ix_asp_net_user_claims_user_id");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClaimType).HasColumnName("claim_type");

                entity.Property(e => e.ClaimValue).HasColumnName("claim_value");

                entity.Property(e => e.Discriminator)
                    .IsRequired()
                    .HasColumnName("discriminator");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("fk_asp_net_user_claims_application_user_user_id");
            });

            modelBuilder.Entity<AspNetUserLogins>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.ToTable("asp_net_user_logins");

                entity.HasIndex(e => e.UserId)
                    .HasName("ix_asp_net_user_logins_user_id");

                entity.Property(e => e.LoginProvider).HasColumnName("login_provider");

                entity.Property(e => e.ProviderKey).HasColumnName("provider_key");

                entity.Property(e => e.Discriminator)
                    .IsRequired()
                    .HasColumnName("discriminator");

                entity.Property(e => e.ProviderDisplayName).HasColumnName("provider_display_name");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("fk_asp_net_user_logins_application_user_user_id");
            });

            modelBuilder.Entity<AspNetUserRoles>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.ToTable("asp_net_user_roles");

                entity.HasIndex(e => e.RoleId)
                    .HasName("ix_asp_net_user_roles_role_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.RoleId).HasColumnName("role_id");

                entity.Property(e => e.Discriminator)
                    .IsRequired()
                    .HasColumnName("discriminator");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("fk_asp_net_user_roles_application_role_role_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("fk_asp_net_user_roles_application_user_user_id");
            });

            modelBuilder.Entity<AspNetUserTokens>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.ToTable("asp_net_user_tokens");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.LoginProvider).HasColumnName("login_provider");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.Discriminator)
                    .IsRequired()
                    .HasColumnName("discriminator");

                entity.Property(e => e.Value).HasColumnName("value");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserTokens)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("fk_asp_net_user_tokens_application_user_user_id");
            });

            modelBuilder.Entity<Password>(entity =>
            {
                entity.ToTable("password");

                entity.HasIndex(e => e.IdentityId)
                    .HasName("ix_password_identity_id");

                entity.Property(e => e.PasswordId).HasColumnName("password_id");

                entity.Property(e => e.IdentityId).HasColumnName("identity_id");

                entity.Property(e => e.PasswordHash).HasColumnName("password_hash");

                entity.HasOne(d => d.Identity)
                    .WithMany(p => p.Password)
                    .HasForeignKey(d => d.IdentityId)
                    .HasConstraintName("fk_password_application_user_identity_id");
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("person");

                entity.HasIndex(e => e.IdentityId)
                    .HasName("ix_person_identity_id");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.FirstName).HasColumnName("first_name");

                entity.Property(e => e.IdentityId).HasColumnName("identity_id");

                entity.Property(e => e.LastName).HasColumnName("last_name");

                entity.HasOne(d => d.Identity)
                    .WithMany(p => p.Person)
                    .HasForeignKey(d => d.IdentityId)
                    .HasConstraintName("fk_person_application_user_identity_id");
            });
        }
    }
}
