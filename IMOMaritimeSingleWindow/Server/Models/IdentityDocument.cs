using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class IdentityDocument
    {
        public IdentityDocument()
        {
            PersonOnBoard = new HashSet<PersonOnBoard>();
        }

        public long IdentityDocumentId { get; set; }
        public int? IdentityDocumentTypeId { get; set; }
        public int? IssuingNationId { get; set; }
        public long? VisaOrResidencePermitNumber { get; set; }
        public DateTime? IdentityDocumentIssueDate { get; set; }
        public DateTime? IdentityDocumentExpiryDate { get; set; }

        public IdentityDocumentType IdentityDocumentType { get; set; }
        public Country IssuingNation { get; set; }
        public ICollection<PersonOnBoard> PersonOnBoard { get; set; }
    }
}
