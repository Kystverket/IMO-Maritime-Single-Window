using IMOMaritimeSingleWindow.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.SpreadSheet.SpreadSheetValidators
{
    public class ShipStoresSpreadSheetValidator
    {

        public List<SHIP_STORE_ERRORS> ValidateShipStoreSpreadsheetModel(FalShipStores shipStore)
        {
            var errors = new List<SHIP_STORE_ERRORS>();

            if (string.IsNullOrWhiteSpace(shipStore.ArticleName))
                errors.Add(SHIP_STORE_ERRORS.NAME_OF_ARTICLE);

            bool is_integer = unchecked(shipStore.Quantity == (int)shipStore.Quantity);

            if ((!string.IsNullOrWhiteSpace(shipStore.ArticleName) && shipStore.Quantity == null) || !is_integer)
                errors.Add(SHIP_STORE_ERRORS.QUANTITY);

            return errors;
        }

        public List<string> ConvertErrorsToMsg(List<SHIP_STORE_ERRORS> errors)
        {
            var errorMsgs = new List<string>();

            foreach(var error in errors)
            {
                switch(error)
                {
                    case SHIP_STORE_ERRORS.NAME_OF_ARTICLE:
                        errorMsgs.Add("Missing Article Name");
                        break;

                    case SHIP_STORE_ERRORS.QUANTITY:
                        errorMsgs.Add("Quantity must be an integer");
                        break;

                    default:
                        break;
                }
            }
            return errorMsgs;
        }
    }
}
