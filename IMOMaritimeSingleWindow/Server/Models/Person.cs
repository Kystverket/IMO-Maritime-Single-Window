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
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<User> User { get; set; }
    }
}
