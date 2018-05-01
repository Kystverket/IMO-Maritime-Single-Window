using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.TestModels
{
    public partial class AspNetUserTokens
    {
        public Guid UserId { get; set; }
        public string LoginProvider { get; set; }
        public string Name { get; set; }
        public string Discriminator { get; set; }
        public string Value { get; set; }

        public ApplicationUser User { get; set; }
    }
}
