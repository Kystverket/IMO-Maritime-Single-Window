using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class UserLogin
    {
        public Guid UserLoginId { get; set; }
        public Guid UserId { get; set; }
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set; }
        public string ProviderDisplayName { get; set; }
        public string Discriminator { get; set; }

        public User User { get; set; }
    }
}
