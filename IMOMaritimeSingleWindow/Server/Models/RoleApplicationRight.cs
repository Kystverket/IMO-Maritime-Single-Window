using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class RoleApplicationRight
    {
        public int RoleApplicationRightId { get; set; }
        public int RoleId { get; set; }
        public int ApplicationRightId { get; set; }

        public ApplicationRight ApplicationRight { get; set; }
        public Role Role { get; set; }
    }
}
