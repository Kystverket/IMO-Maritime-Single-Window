using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Password
    {
        public Password()
        {
            User = new HashSet<User>();
        }

        public int PasswordId { get; set; }
        public string Hash { get; set; }
        public string Salt { get; set; }

        public ICollection<User> User { get; set; }
    }
}
