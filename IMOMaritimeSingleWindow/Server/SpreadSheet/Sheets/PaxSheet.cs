
namespace IMOMaritimeSingleWindow.SpreadSheet.Sheets
{
    public class PaxSheet : PersonOnBoardSheet
    {
        public override string Sheetname { get => "Passenger List"; set => base.Sheetname = value; }

        public int startRow = 19;
        public int endCol = 16;

        public int VisaNumberAddress = 15;
        public string VisaNumberIdentificator = "Visa_Number";

        public int PlaceOfBirthAddress = 16;
        public string PlaceOfBirthIdentificator = "Place_of_Birth";

        public int TransPassengerAddress = 17;
        public string TransPassengerIdentificator = "Transit_Passenger";

    }
}
