using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Users
    {
        public Users()
        {
        }

        public int UserId { get; set; }
        public string Email { get; set; }
        public int? OrganizationId { get; set; }
        public int? RoleId {get; set;}

        public Organization Organization { get; set; }
        public Roles Role {get; set; }
        public ICollection<PortCall> PortCall { get; set; }

    }
}
