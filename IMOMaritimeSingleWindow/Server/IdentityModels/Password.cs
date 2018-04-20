using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.IdentityModels
{
    public partial class Password
    {
        public Guid UserId { get; set; }
        public Guid? IdentityId { get; set; }
        public string PasswordHash { get; set; }

        public User Identity { get; set; }
    }
}
