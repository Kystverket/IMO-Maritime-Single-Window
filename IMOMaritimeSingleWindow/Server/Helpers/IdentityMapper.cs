using System;
using IMOMaritimeSingleWindow.Identity.Models;
using IMOMaritimeSingleWindow.Models;
using IMOMaritimeSingleWindow.ViewModels;

namespace IMOMaritimeSingleWindow.Helpers
{
    // Hand-written replacement for the former AutoMapper profiles. Null sources map to null, as AutoMapper did.
    public class IdentityMapper
    {
        public User ToUser(ApplicationUser source)
        {
            if (source == null) return null;
            return UpdateUser(source, new User());
        }

        // Writes every mapped member, including nulls, onto an existing entity.
        public User UpdateUser(ApplicationUser source, User destination)
        {
            if (source == null) return destination;
            destination ??= new User();

            destination.UserId = source.Id;
            destination.Email = source.Email;
            destination.EmailConfirmed = source.EmailConfirmed;
            destination.NormalizedEmail = source.NormalizedEmail;
            destination.PhoneNumber = source.PhoneNumber;
            destination.PhoneNumberConfirmed = source.PhoneNumberConfirmed;
            destination.TwoFactorEnabled = source.TwoFactorEnabled;
            destination.SecurityStamp = source.SecurityStamp;
            destination.LockoutEnd = source.LockoutEnd;
            destination.LockoutEnabled = source.LockoutEnabled;
            destination.ConcurrencyStamp = source.ConcurrencyStamp;
            destination.AccessFailedCount = source.AccessFailedCount;
            destination.OrganizationId = source.OrganizationId;
            destination.IsActive = source.IsActive;
            return destination;
        }

        public Person ToPerson(ApplicationUser source)
        {
            if (source == null) return null;
            return new Person
            {
                GivenName = source.GivenName,
                Surname = source.Surname,
                CompanyPhoneNumber = source.CompanyPhoneNumber,
                CompanyEmail = source.CompanyEmail
            };
        }

        // PersonId and the User collection of the destination are left untouched.
        public Person UpdatePerson(Person source, Person destination)
        {
            if (source == null) return destination;
            destination ??= new Person();

            destination.GivenName = source.GivenName;
            destination.Surname = source.Surname;
            destination.CompanyPhoneNumber = source.CompanyPhoneNumber;
            destination.CompanyEmail = source.CompanyEmail;
            return destination;
        }

        public Password ToPassword(ApplicationUser source)
        {
            if (source == null) return null;
            return new Password { Hash = source.PasswordHash };
        }

        public ApplicationUser ToApplicationUser(Password source)
        {
            if (source == null) return null;
            return new ApplicationUser { PasswordHash = source.Hash };
        }

        public ApplicationUser ToApplicationUser(Person source)
        {
            if (source == null) return null;
            return new ApplicationUser
            {
                GivenName = source.GivenName,
                Surname = source.Surname,
                CompanyPhoneNumber = source.CompanyPhoneNumber,
                CompanyEmail = source.CompanyEmail
            };
        }

        public ApplicationUser ToApplicationUser(User source)
        {
            if (source == null) return null;
            return new ApplicationUser
            {
                Id = source.UserId,
                UserName = source.Email,
                NormalizedUserName = source.NormalizedEmail,
                Email = source.Email,
                EmailConfirmed = source.EmailConfirmed ?? false,
                NormalizedEmail = source.NormalizedEmail,
                PhoneNumber = source.PhoneNumber,
                PhoneNumberConfirmed = source.PhoneNumberConfirmed ?? false,
                TwoFactorEnabled = source.TwoFactorEnabled ?? false,
                SecurityStamp = source.SecurityStamp,
                LockoutEnd = source.LockoutEnd,
                LockoutEnabled = source.LockoutEnabled ?? false,
                ConcurrencyStamp = source.ConcurrencyStamp,
                AccessFailedCount = source.AccessFailedCount,
                OrganizationId = source.OrganizationId,
                IsActive = source.IsActive,
                PasswordHash = source.Password?.Hash
            };
        }

        public ApplicationUser ToApplicationUser(RegistrationViewModel source)
        {
            if (source == null) return null;
            var normalizedEmail = source.Email?.ToUpper();
            return new ApplicationUser
            {
                Id = Guid.TryParse(source.Id, out var id) ? id : Guid.Empty,
                UserName = source.Email,
                NormalizedUserName = normalizedEmail,
                Email = source.Email,
                NormalizedEmail = normalizedEmail,
                PhoneNumber = source.PhoneNumber,
                CompanyPhoneNumber = source.CompanyPhoneNumber,
                CompanyEmail = source.CompanyEmail,
                GivenName = source.GivenName,
                Surname = source.Surname,
                OrganizationId = source.OrganizationId,
                IsActive = source.IsActive
            };
        }

        // Copies members of source onto destination (created when null); null reference/nullable values never overwrite.
        public ApplicationUser Merge(ApplicationUser source, ApplicationUser destination)
        {
            if (source == null) return destination;
            destination ??= new ApplicationUser();

            destination.Id = source.Id;
            destination.EmailConfirmed = source.EmailConfirmed;
            destination.PhoneNumberConfirmed = source.PhoneNumberConfirmed;
            destination.TwoFactorEnabled = source.TwoFactorEnabled;
            destination.LockoutEnabled = source.LockoutEnabled;
            destination.AccessFailedCount = source.AccessFailedCount;
            destination.IsActive = source.IsActive;

            destination.UserName = source.UserName ?? destination.UserName;
            destination.NormalizedUserName = source.NormalizedUserName ?? destination.NormalizedUserName;
            destination.Email = source.Email ?? destination.Email;
            destination.NormalizedEmail = source.NormalizedEmail ?? destination.NormalizedEmail;
            destination.PasswordHash = source.PasswordHash ?? destination.PasswordHash;
            destination.SecurityStamp = source.SecurityStamp ?? destination.SecurityStamp;
            destination.ConcurrencyStamp = source.ConcurrencyStamp ?? destination.ConcurrencyStamp;
            destination.PhoneNumber = source.PhoneNumber ?? destination.PhoneNumber;
            destination.LockoutEnd = source.LockoutEnd ?? destination.LockoutEnd;
            destination.GivenName = source.GivenName ?? destination.GivenName;
            destination.Surname = source.Surname ?? destination.Surname;
            destination.NormalizedRoleName = source.NormalizedRoleName ?? destination.NormalizedRoleName;
            destination.OrganizationId = source.OrganizationId ?? destination.OrganizationId;
            destination.CompanyEmail = source.CompanyEmail ?? destination.CompanyEmail;
            destination.CompanyPhoneNumber = source.CompanyPhoneNumber ?? destination.CompanyPhoneNumber;
            return destination;
        }

        public Role ToRole(ApplicationRole source)
        {
            if (source == null) return null;
            return new Role
            {
                RoleId = source.Id,
                Name = source.Name,
                NormalizedName = source.NormalizedName,
                Description = source.Description,
                ConcurrencyStamp = source.ConcurrencyStamp
            };
        }

        public ApplicationRole ToApplicationRole(Role source)
        {
            if (source == null) return null;
            return new ApplicationRole
            {
                Id = source.RoleId,
                Name = source.Name,
                NormalizedName = source.NormalizedName,
                Description = source.Description,
                ConcurrencyStamp = source.ConcurrencyStamp
            };
        }
    }
}
