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

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int PersonId { get; set; }

        public ICollection<User> User { get; set; }
    }
}
