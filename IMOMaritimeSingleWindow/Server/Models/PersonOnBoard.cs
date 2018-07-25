using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PersonOnBoard
    {
        public long PersonOnBoardId { get; set; }
        public string FamilyName { get; set; }
        public string GivenName { get; set; }
        public DateTimeOffset? DateOfBirth { get; set; }
        public int? CountryOfBirthId { get; set; }
        public int? PersonOnBoardTypeId { get; set; }
        public int? OccupationCode { get; set; }
        public string RankName { get; set; }
        public string RankCode { get; set; }
        public long? IdentityDocumentId { get; set; }
        public bool? InTransit { get; set; }
        public int? PortOfEmbarkationId { get; set; }
        public string OccupationName { get; set; }
        public int? PortOfDisembarkationId { get; set; }
        public string RoleCode { get; set; }
        public int? GenderId { get; set; }
        public string PlaceOfBirth { get; set; }
        public int? PortCallId { get; set; }

        public Country CountryOfBirth { get; set; }
        public Gender Gender { get; set; }
        public IdentityDocument IdentityDocument { get; set; }
        public PersonOnBoardType PersonOnBoardType { get; set; }
        public Location PortOfDisembarkation { get; set; }
        public Location PortOfEmbarkation { get; set; }
        public PortCall PortCall { get; set; }
    }
}
