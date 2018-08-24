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

        public override bool Equals(object obj)
        {
            // Null check
            if (obj == null)
                return false;
            // Reference equals
            if (this == obj)
                return true;
            // Type check
            if (!(obj is Person))
                return false;
            Person o = (Person)obj;
            // Field equality
            return o.GivenName.Equals(GivenName) && o.Surname.Equals(Surname) &&
                   o.CompanyEmail.Equals(CompanyEmail) && o.CompanyPhoneNumber.Equals(CompanyPhoneNumber);
        }

        public override int GetHashCode()
        {
            throw new NotImplementedException();
        }
    }
}
