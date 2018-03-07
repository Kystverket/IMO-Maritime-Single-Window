using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Role
    {
        public Role()
        {
            PersonRole = new HashSet<PersonRole>();
            RoleClaim = new HashSet<RoleClaim>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public string Description { get; set; }

        public ICollection<PersonRole> PersonRole { get; set; }
        public ICollection<RoleClaim> RoleClaim { get; set; }
    }
}
