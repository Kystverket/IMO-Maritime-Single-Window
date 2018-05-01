using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.TestModels
{
    public partial class AspNetUserRoles
    {
        public Guid UserId { get; set; }
        public Guid RoleId { get; set; }
        public string Discriminator { get; set; }

        public ApplicationRole Role { get; set; }
        public ApplicationUser User { get; set; }
    }
}
