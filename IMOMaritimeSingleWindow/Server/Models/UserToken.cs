using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class UserToken
    {
        public string LoginProvider { get; set; }
        public string Name { get; set; }
        public string Discriminator { get; set; }
        public string Value { get; set; }
        public int UserTokenId { get; set; }
        public int? UserId { get; set; }

        public User User { get; set; }
    }
}
