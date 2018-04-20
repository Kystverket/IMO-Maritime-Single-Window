using System;
using System.Collections.Generic;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;

namespace IMOMaritimeSingleWindow.IdentityModels
{
    public partial class UserRole : ApplicationUserRole
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
        public string Discriminator { get; set; }

        public Role Role { get; set; }
        public User User { get; set; }
    }
}
