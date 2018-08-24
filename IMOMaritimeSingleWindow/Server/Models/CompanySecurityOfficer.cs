using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class CompanySecurityOfficer
    {
        public CompanySecurityOfficer()
        {
            FalSecurity = new HashSet<FalSecurity>();
        }

        public long CompanySecurityOfficerId { get; set; }
        public int? OrganizationId { get; set; }
        public string GivenName { get; set; }
        public string Surname { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }

        public Organization Organization { get; set; }
        public ICollection<FalSecurity> FalSecurity { get; set; }
    }
}
