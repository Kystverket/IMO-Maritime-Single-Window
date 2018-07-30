using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class IdentityDocumentType
    {
        public IdentityDocumentType()
        {
            IdentityDocument = new HashSet<IdentityDocument>();
        }
        public int Id { get; set; }
        public string Description { get; set; }

        public ICollection<IdentityDocument> IdentityDocument { get; set; }
    }
}
