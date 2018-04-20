using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class UserLogin
    {
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set; }
        public string Discriminator { get; set; }
        public string ProviderDisplayName { get; set; }
        public int UserId { get; set; }
        public int UserLoginId { get; set; }

        public User User { get; set; }
    }
}
