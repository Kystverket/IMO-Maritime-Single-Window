using System;
using System.Collections.Generic;
using IMOMaritimeSingleWindow.Identity; using IMOMaritimeSingleWindow.Identity.Models;

namespace IMOMaritimeSingleWindow.IdentityModels
{
    public partial class UserLogin : ApplicationUserLogin
    {
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set; }
        public string Discriminator { get; set; }
        public string ProviderDisplayName { get; set; }
        public Guid UserId { get; set; }

        public User User { get; set; }
    }
}
