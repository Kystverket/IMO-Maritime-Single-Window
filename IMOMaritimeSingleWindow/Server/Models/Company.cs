using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class Company
    {
        public Company()
        {
            Ship = new HashSet<Ship>();
            ShipCertificate = new HashSet<ShipCertificate>();
        }

        public int CompanyId { get; set; }

        public ICollection<Ship> Ship { get; set; }
        public ICollection<ShipCertificate> ShipCertificate { get; set; }
    }
}
