using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Role
    {
        public Role()
        {
            PersonRole = new HashSet<PersonRole>();
            RoleApplicationRight = new HashSet<RoleApplicationRight>();
        }

        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public string Description { get; set; }

        public ICollection<PersonRole> PersonRole { get; set; }
        public ICollection<RoleApplicationRight> RoleApplicationRight { get; set; }
    }
}
