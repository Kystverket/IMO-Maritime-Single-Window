using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.TestModels
{
    public partial class Person
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public Guid IdentityId { get; set; }
        public string LastName { get; set; }

        public ApplicationUser Identity { get; set; }
    }
}
