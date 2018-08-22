using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class SecurityLevel
    {
        public SecurityLevel()
        {
            FalSecurity = new HashSet<FalSecurity>();
            SecurityPreviousPortOfCall = new HashSet<SecurityPreviousPortOfCall>();
        }

        public long SecurityLevelId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<FalSecurity> FalSecurity { get; set; }
        public ICollection<SecurityPreviousPortOfCall> SecurityPreviousPortOfCall { get; set; }
    }
}
