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

        public int FirstNameAddress = 6;
        public string FirstNameIdentificator = "First_Name";

        public int MiddleNameAddress = 9;
        public string MiddleNameIdentificator = "Middle_Name";

        public int NationalityAddress = 11;
        public string NationalityIdentificator = "Nationality";

        public int SexAddress = 13;
        public string SexIdentificator = "Sex";

        public int DateOfBirthAddress = 14;
        public string DateOfBirthIdentificator = "Date_of_Birth";

        public int DocumentNumberAddress = 16;
        public string DocumentNumberIdentificator = "Document_Number";

        public int CountryOfIssueAddress = 18;
        public string CountryOfIssueIdentificator = "Country_of_Issue";

        public int DateOfExpiryAddress = 20;
        public string DateOfExpiryIdentificator = "Date_of_Expiry";

        public int PortOfEmbarkAddress = 22;
        public string PortOfEmbarkIdentificator = "Port_of_Embarkation";

        public int PortOfDebarkAddress = 23;
        public string PortOfDebarkIdentificator = "Port_of_Debarkation";

        public int PortOfClearenceAddress = 24;
        public string PortOfIdentificator = "Port_of_Clearence";
    }
}
