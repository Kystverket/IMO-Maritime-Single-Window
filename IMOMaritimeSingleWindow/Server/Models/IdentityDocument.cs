using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class IdentityDocument
    {

        public long IdentityDocumentId { get; set; }
        public int? IdentityDocumentTypeId { get; set; }
        [MaxLength(50)]
        public string VisaOrResidencePermitNumber { get; set; }
        public DateTime? IdentityDocumentIssueDate { get; set; }
        public DateTime? IdentityDocumentExpiryDate { get; set; }
        public int? IssuingNationId { get; set; }
        [MaxLength(50)]
        public string IdentityDocumentNumber { get; set; }
        public long? PersonOnBoardId { get; set; }

        public IdentityDocumentType IdentityDocumentType { get; set; }
        public Country IssuingNation { get; set; }
        public PersonOnBoard PersonOnBoard { get; set; }
    }
}
