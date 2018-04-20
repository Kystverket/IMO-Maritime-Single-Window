
using System;
using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.Identity
{
    public class Person
    {
        [Key]
        public Guid UserId { get; set; } //Foreign key is primary key
        public ApplicationUser Identity { get; set; }  // Navigation property
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
