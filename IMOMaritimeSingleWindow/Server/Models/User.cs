using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class User
    {
        public User()
        {
            UserLogin = new HashSet<UserLogin>();
            UserRole = new HashSet<UserRole>();
            UserToken = new HashSet<UserToken>();
            PortCall = new HashSet<PortCall>();
        }

        public int AccessFailedCount { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool LockoutEnabled { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public string NormalizedEmail { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public string SecurityStamp { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public int UserId { get; set; }
        public int? PasswordId { get; set; }
        public int? OrganizationId { get; set; }
        public int? PersonId { get; set; }

        public Organization Organization { get; set; }
        public Password Password { get; set; }
        public Person Person { get; set; }
        public ICollection<UserLogin> UserLogin { get; set; }
        public ICollection<UserRole> UserRole { get; set; }
        public ICollection<UserToken> UserToken { get; set; }
        public ICollection<PortCall> PortCall {get; set;}
    }
}
