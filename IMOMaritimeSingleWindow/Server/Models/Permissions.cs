using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Permissions
    {
        public Permissions()
        {
            LnkRolePermission = new HashSet<LnkRolePermission>();
        }

        public int PermissionId { get; set; }
        public string Description { get; set; }

        public ICollection<LnkRolePermission> LnkRolePermission { get; set; }
    }
}
