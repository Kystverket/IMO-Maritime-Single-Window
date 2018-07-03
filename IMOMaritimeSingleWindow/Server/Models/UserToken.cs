using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class UserToken
    {
        public Guid UserTokenId { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public string Discriminator { get; set; }
        public string LoginProvider { get; set; }

        public User User { get; set; }
    }
}
