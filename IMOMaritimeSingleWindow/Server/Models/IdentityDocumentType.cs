using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public enum IDENTITY_DOCUMENT_TYPES
    {
        MUSTERBOOK,
        PASSPORT,
        RESIDENTIAL_PERMIT,
        PICTURE_ID,
        OTHER
    }
    public partial class IdentityDocumentType
    {
        //public IdentityDocumentType()
        //{
        //    IdentityDocument = new HashSet<IdentityDocument>();
        //}
        public int Id { get; set; }
        public string Description { get; set; }
        public string EnumValue { get; set; }


        //public ICollection<IdentityDocument> IdentityDocument { get; set; }
    }
}
