using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.IdentityModels
{
    public partial class Person
    {
        public Guid UserId { get; set; }
        public string FirstName { get; set; }
        public Guid? IdentityId { get; set; }
        public string LastName { get; set; }

        public User Identity { get; set; }
    }
}
