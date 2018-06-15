using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class UserToken : IdentityUserToken<Guid>
    {
        public Guid UserTokenId { get; set; }
        public override Guid UserId { get; set; }
        public string Name { get; set; }
        public override string Value { get; set; }
        public string Discriminator { get; set; }
        public override string LoginProvider { get; set; }

        public User User { get; set; }
    }
}
