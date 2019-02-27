using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.SpreadSheet.Sheets
{
    public class ShipStoresSheet : BaseSheet
    {
        public override string Sheetname { get => "Ship Stores Declaration"; set => base.Sheetname = value; }

        public int startRow = 19;
        public int endCol = 27;

        public int NameOfArticleAddress = 3;

        public int QuantityAddress = 4;

        public int MeasurementTypeAddress = 5;

        public int LocationOnBoardAddress = 6;
    }
}
