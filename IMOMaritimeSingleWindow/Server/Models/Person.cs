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
        public string CompanyEmail { get; set; }
        public string CompanyPhoneNumber { get; set; }

        public ICollection<User> User { get; set; }

        public override bool Equals(object obj)
        {
            // Reference equals
            if (this != obj)
                return false;
            // Type check
            if (!(obj is Person))
                return false;
            Person o = (Person)obj;
            // Field equality
            return o.GivenName == GivenName && o.Surname == Surname &&
                o.CompanyEmail == CompanyEmail && o.CompanyPhoneNumber == CompanyPhoneNumber;
        }
    }
}
