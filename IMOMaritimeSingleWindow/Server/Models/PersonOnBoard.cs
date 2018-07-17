using System;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Models
{
    public partial class PersonOnBoard
    {
        public long PersonOnBoardId { get; set; }
        public string GivenName { get; set; }
        public string Surname { get; set; }
        public DateTimeOffset? DateOfBirth { get; set; }
        public string PlaceOfBirth { get; set; }
        public int? CountryOfBirthId { get; set; }
        public string OccupationName { get; set; }
        public string OccupationCode { get; set; }
        public int? NationalityId { get; set; }
        public string RoleCode { get; set; }
        public bool? InTransit { get; set; }
        public string RankName { get; set; }
        public string RankCode { get; set; }
        public int? PortCallId { get; set; }
        public int? PersonOnBoardTypeId { get; set; }

        public Country CountryOfBirth { get; set; }
        public Country Nationality { get; set; }
        public PersonOnBoardType PersonOnBoardType { get; set; }
        public PortCall PortCall { get; set; }
    }
}
