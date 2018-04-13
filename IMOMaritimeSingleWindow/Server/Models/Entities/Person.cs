
using System;

namespace IMOMaritimeSingleWindow.Models.Entities
{
    public class Person
    {
        public Guid Id { get; set; }
        public Guid IdentityId { get; set; }
        public ApplicationUser Identity { get; set; }  // navigation property
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
