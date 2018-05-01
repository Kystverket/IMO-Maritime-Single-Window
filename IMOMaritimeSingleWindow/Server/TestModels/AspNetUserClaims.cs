using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.TestModels
{
    public partial class AspNetUserClaims
    {
        public int Id { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
        public string Discriminator { get; set; }
        public Guid UserId { get; set; }

        public ApplicationUser User { get; set; }
    }
}
