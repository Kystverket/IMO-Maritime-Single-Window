using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Role
    {
        public Role()
        {
            RoleClaim = new HashSet<RoleClaim>();
            User = new HashSet<User>();
        }

        public Guid RoleId { get; set; }
        public string Name { get; set; }
        public string NormalizedName { get; set; }
        public string Description { get; set; }
        public string ConcurrencyStamp { get; set; }

        public ICollection<RoleClaim> RoleClaim { get; set; }
        public ICollection<User> User { get; set; }
    }
}
