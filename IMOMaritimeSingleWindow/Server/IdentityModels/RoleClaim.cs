using System;
using System.Collections.Generic;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;

namespace IMOMaritimeSingleWindow.IdentityModels
{
    public partial class RoleClaim : ApplicationRoleClaim
    {
        public int Id { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
        public string Discriminator { get; set; }
        public Guid RoleId { get; set; }

        public Role Role { get; set; }
    }
}
