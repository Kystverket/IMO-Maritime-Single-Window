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
        public string CompanyName { get; set; }
        public int? InvoiceReceiverNo { get; set; }
        public string CompanyOrgNo { get; set; }
        public string Remark { get; set; }
        public bool IsActive { get; set; }
        public bool IsVerified { get; set; }
        public bool IsInvoiceReceiver { get; set; }

        public ICollection<Ship> Ship { get; set; }
        public ICollection<ShipCertificate> ShipCertificate { get; set; }
    }
}
