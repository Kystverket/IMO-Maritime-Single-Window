using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class User
    {
        public int? AccessFailedCount { get; set; }
        public string ConcurrencyStamp { get; set; }
        public string CustomField { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public bool? LockoutEnabled { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public string PasswordHash { get; set; }
        public string PhoneNumber { get; set; }
        public bool? PhoneNumberConfirmed { get; set; }
        public string SecurityStamp { get; set; }
        public bool? TwoFactorEnabled { get; set; }
        public string UserName { get; set; }
        public int UserId { get; set; }
        public Guid? UserUuid { get; set; }
        public int? PasswordId { get; set; }

        public Password Password { get; set; }
    }
}
