
namespace IMOMaritimeSingleWindow.SpreadSheet.Sheets
{
    public class PaxSheet : PersonOnBoardSheet
    {
        public override string Sheetname { get => "Passenger List"; set => base.Sheetname = value; }

        public int startRow = 19;
        public int endCol = 27;

        public int VisaNumberAddress = 25;
        public string VisaNumberIdentificator = "Visa_Number";

        public int PlaceOfBirthAddress = 26;
        public string PlaceOfBirthIdentificator = "Place_of_Birth";

        public int TransPassengerAddress = 27;
        public string TransPassengerIdentificator = "Transit_Passenger";

    }
}
