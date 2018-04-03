using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Person
    {
        public Person()
        {
            PersonRole = new HashSet<PersonRole>();
            PortCall = new HashSet<PortCall>();
        }

        public int PersonId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<PersonRole> PersonRole { get; set; }
        public ICollection<PortCall> PortCall { get; set; }
    }
}
