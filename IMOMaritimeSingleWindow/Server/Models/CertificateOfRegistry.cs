using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class CertificateOfRegistry
    {
        public CertificateOfRegistry()
        {
            Ship = new HashSet<Ship>();
        }

        public int CertificateOfRegistryId { get; set; }
        public DateTimeOffset? DateOfIssue { get; set; }
        public string CertificateNumber { get; set; }
        public int? PortLocationId { get; set; }
        public string OwnerName { get; set; }

        public Location CertificateOfRegistryNavigation { get; set; }
        public ICollection<Ship> Ship { get; set; }
    }
}
