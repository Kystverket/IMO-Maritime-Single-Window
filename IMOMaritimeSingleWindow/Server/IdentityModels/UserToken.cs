using System;
using System.Collections.Generic;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;

namespace IMOMaritimeSingleWindow.IdentityModels
{
    public partial class UserToken : ApplicationUserToken
    {
        public Guid UserId { get; set; }
        public string LoginProvider { get; set; }
        public string Name { get; set; }
        public string Discriminator { get; set; }
        public string Value { get; set; }

        public User User { get; set; }
    }
}
