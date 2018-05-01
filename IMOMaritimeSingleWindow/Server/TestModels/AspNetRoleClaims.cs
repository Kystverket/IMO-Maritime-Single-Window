using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.TestModels
{
    public partial class AspNetRoleClaims
    {
        public int Id { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
        public string Discriminator { get; set; }
        public Guid RoleId { get; set; }

        public ApplicationRole Role { get; set; }
    }
}
