using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.SpreadSheet.Sheets
{
    public class PersonOnBoardSheet : BaseSheet
    {
        public int NumberAddress = 1;
        public string NumberIdentificator = "Number";

        public int LastNameAddress = 3;
        public string LastNameIdentificator = "Last_Name";

        public int FirstNameAddress = 4;
        public string FirstNameIdentificator = "First_Name";

        public int MiddleNameAddress = 5;
        public string MiddleNameIdentificator = "Middle_Name";

        public int NationalityAddress = 6;
        public string NationalityIdentificator = "Nationality";

        public int SexAddress = 7;
        public string SexIdentificator = "Sex";

        public int DateOfBirthAddress = 8;
        public string DateOfBirthIdentificator = "Date_of_Birth";

        public int DocumentNumberAddress = 9;
        public string DocumentNumberIdentificator = "Document_Number";

        public int CountryOfIssueAddress = 10;
        public string CountryOfIssueIdentificator = "Country_of_Issue";

        public int DateOfExpiryAddress = 11;
        public string DateOfExpiryIdentificator = "Date_of_Expiry";

        public int PortOfEmbarkAddress = 12;
        public string PortOfEmbarkIdentificator = "Port_of_Embarkation";

        public int PortOfDebarkAddress = 13;
        public string PortOfDebarkIdentificator = "Port_of_Debarkation";
    }
}
