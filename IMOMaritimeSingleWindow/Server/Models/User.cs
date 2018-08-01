using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class User
    {
        public User()
        {
            PortCall = new HashSet<PortCall>();
            UserLogin = new HashSet<UserLogin>();
            UserToken = new HashSet<UserToken>();
        }

        public Guid UserId { get; set; }
        public Guid? PasswordId { get; set; }
        public int? OrganizationId { get; set; }
        public Guid? PersonId { get; set; }
        public bool? TwoFactorEnabled { get; set; }
        public string SecurityStamp { get; set; }
        public string PhoneNumber { get; set; }
        public bool? PhoneNumberConfirmed { get; set; }
        public string Email { get; set; }
        public bool? EmailConfirmed { get; set; }
        public string NormalizedEmail { get; set; }
        public bool? LockoutEnabled { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public string ConcurrencyStamp { get; set; }
        public int AccessFailedCount { get; set; }
        public Guid? RoleId { get; set; }

        public Organization Organization { get; set; }
        public Password Password { get; set; }
        public Person Person { get; set; }
        public Role Role { get; set; }
        public ICollection<PortCall> PortCall { get; set; }
        public ICollection<UserLogin> UserLogin { get; set; }
        public ICollection<UserToken> UserToken { get; set; }
    }
}
