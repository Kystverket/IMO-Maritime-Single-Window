using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace IMOMaritimeSingleWindow.Models
{
    public enum PERSON_ON_BOARD_ERRORS
    {
        MISSING_FIRST_NAME,
        MISSING_LAST_NAME,
        DOCUMENT_NUMBER_NEED_MORE_INFO,
        MISSING_DOCUMENT_NUMBER,
        MISSING_EXPIRY_DATE,
        MISSING_ISSUING_COUNTRY
    }
    public partial class PersonOnBoard
    {
         public PersonOnBoard()
        {
            IdentityDocument = new HashSet<IdentityDocument>();
        }

        public long PersonOnBoardId { get; set; }
        public string FamilyName { get; set; }
        public string GivenName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int? CountryOfBirthId { get; set; }
        public int? PersonOnBoardTypeId { get; set; }
        public int? OccupationCode { get; set; }
        public string RankName { get; set; }
        public string RankCode { get; set; }
        public bool? InTransit { get; set; }
        public int? PortOfEmbarkationId { get; set; }
        public string OccupationName { get; set; }
        public int? PortOfDisembarkationId { get; set; }
        public string RoleCode { get; set; }
        public int? GenderId { get; set; }
        public string PlaceOfBirth { get; set; }
        public int? PortCallId { get; set; }
        public int? NationalityId { get; set; }
        public int? SequenceNumber { get; set; }
        [NotMapped]
        public bool IsPax { get; set; }
        [NotMapped]
        public List<PERSON_ON_BOARD_ERRORS> Errors { get; set; }
        [NotMapped]
        public int? ExcelRowNum { get; set; }
        [NotMapped]
        public List<string> ErrorMessages { get; set; }

        public Country CountryOfBirth { get; set; }
        public Gender Gender { get; set; }
        public Country Nationality { get; set; }
        public PersonOnBoardType PersonOnBoardType { get; set; }
        public PortCall PortCall { get; set; }
        public Location PortOfDisembarkation { get; set; }
        public Location PortOfEmbarkation { get; set; }
        public string CrewEffects { get; set; }
        public bool? IsCaptain { get; set; }
        public ICollection<IdentityDocument> IdentityDocument { get; set; }

        public override String ToString()
        {
            return PersonOnBoardId + "\n"
            + FamilyName + "\n"
            + GivenName + "\n"
            + DateOfBirth + "\n"
            + OccupationName;
        }
    }
}
