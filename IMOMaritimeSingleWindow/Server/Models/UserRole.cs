using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class UserRole
    {
        public Guid UserRoleId { get; set; }
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
        public string Discriminator { get; set; }

        public Role Role { get; set; }
        public User User { get; set; }
    }
}
