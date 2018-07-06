using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Person
    {
        public Person()
        {
            User = new HashSet<User>();
        }

        public Guid PersonId { get; set; }
        public string GivenName { get; set; }
        public string Surname { get; set; }
        public string CompanyPhoneNumber { get; set; }
        public string CompanyEmail { get; set; }

        public ICollection<User> User { get; set; }
    }
}
