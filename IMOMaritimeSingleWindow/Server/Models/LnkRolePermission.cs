using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class LnkRolePermission
    {
        public int LnkRolePermissionId { get; set; }
        public int RoleId { get; set; }
        public int PermissionId { get; set; }

        public Permissions Permission { get; set; }
        public Roles Role { get; set; }
    }
}
