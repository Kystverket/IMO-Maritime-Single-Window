using System;
using System.Collections.Generic;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;

namespace IMOMaritimeSingleWindow.IdentityModels
{
    public partial class UserClaim : ApplicationUserClaim
    {
        public int Id { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
        public string Discriminator { get; set; }
        public Guid UserId { get; set; }

        public User User { get; set; }
    }
}
