using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PersonRole
    {
        public int PersonRoleId { get; set; }
        public int PersonId { get; set; }
        public int RoleId { get; set; }

        public Person Person { get; set; }
        public Role Role { get; set; }
    }
}
