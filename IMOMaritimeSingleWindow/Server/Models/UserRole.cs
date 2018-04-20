using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class UserRole
    {
        public string Discriminator { get; set; }
        public int UserRoleId { get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }

        public Role Role { get; set; }
        public User User { get; set; }
    }
}
