using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class OrganizationType
    {
        public OrganizationType()
        {
            Organization = new HashSet<Organization>();
        }

        public int OrganizationTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Organization> Organization { get; set; }
    }
}
