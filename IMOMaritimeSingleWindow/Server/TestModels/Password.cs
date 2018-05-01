using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.TestModels
{
    public partial class Password
    {
        public int PasswordId { get; set; }
        public Guid IdentityId { get; set; }
        public string PasswordHash { get; set; }

        public ApplicationUser Identity { get; set; }
    }
}
