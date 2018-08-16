using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Organization
    {
        public Organization()
        {
            CompanySecurityOfficer = new HashSet<CompanySecurityOfficer>();
            InternationalShipSecurityCertificate = new HashSet<InternationalShipSecurityCertificate>();
            OrganizationPortCall = new HashSet<OrganizationPortCall>();
            Ship = new HashSet<Ship>();
            ShipCertificate = new HashSet<ShipCertificate>();
            User = new HashSet<User>();
        }

        public int OrganizationId { get; set; }
        public string Name { get; set; }
        public int? InvoiceReceiverNo { get; set; }
        public string OrganizationNo { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public int? OrganizationTypeId { get; set; }
        public string ImoCompanyNumber { get; set; }
        public string ClearanceIsNullString { get; set; }
        public string ClearanceIsTrueString { get; set; }
        public string ClearanceIsFalseString { get; set; }
        public bool? IsRecognizedSecurityOrganization { get; set; }

        public OrganizationType OrganizationType { get; set; }
        public ICollection<CompanySecurityOfficer> CompanySecurityOfficer { get; set; }
        public ICollection<InternationalShipSecurityCertificate> InternationalShipSecurityCertificate { get; set; }
        public ICollection<OrganizationPortCall> OrganizationPortCall { get; set; }
        public ICollection<Ship> Ship { get; set; }
        public ICollection<ShipCertificate> ShipCertificate { get; set; }
        public ICollection<User> User { get; set; }
    }
}
