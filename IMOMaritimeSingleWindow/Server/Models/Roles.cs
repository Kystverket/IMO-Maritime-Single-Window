using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Roles
    {
        public Roles()
        {
            LnkRolePermission = new HashSet<LnkRolePermission>();
        }

        public int RoleId { get; set; }
        public string Description { get; set; }

        public ICollection<Users> Users { get; set; }
        public ICollection<LnkRolePermission> LnkRolePermission { get; set; }
    }
}
