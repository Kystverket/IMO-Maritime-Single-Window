using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class ApplicationRight
    {
        public ApplicationRight()
        {
            RoleApplicationRight = new HashSet<RoleApplicationRight>();
        }

        public int ApplicationRightId { get; set; }
        public int ApplicationId { get; set; }
        public string ApplicationRightName { get; set; }
        public string SystemName { get; set; }
    
        public ICollection<RoleApplicationRight> RoleApplicationRight { get; set; }
    }
}
