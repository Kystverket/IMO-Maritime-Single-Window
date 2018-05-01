using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.TestModels
{
    public partial class AspNetUserLogins
    {
        public string LoginProvider { get; set; }
        public string ProviderKey { get; set; }
        public string Discriminator { get; set; }
        public string ProviderDisplayName { get; set; }
        [Key]
        public Guid UserId { get; set; }

        public ApplicationUser User { get; set; }
    }
}
