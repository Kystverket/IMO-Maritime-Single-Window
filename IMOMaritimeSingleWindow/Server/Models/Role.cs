using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Role
    {
        public Role()
        {
            RoleClaim = new HashSet<RoleClaim>();
            UserRole = new HashSet<UserRole>();
        }

        public string ConcurrencyStamp { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public string NormalizedName { get; set; }
        public int RoleId { get; set; }

        public ICollection<RoleClaim> RoleClaim { get; set; }
        public ICollection<UserRole> UserRole { get; set; }
    }
}
