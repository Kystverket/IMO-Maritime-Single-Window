using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.SpreadSheet.SpreadSheetValidators
{
    public class PersonOnBoardSpreadSheetValidator
    {
        public List<PERSON_ON_BOARD_ERRORS> ValidatePersonOnBoardSpreadSheetModel(PersonOnBoard pob)
        {
            var errors = new List<PERSON_ON_BOARD_ERRORS>();

            if (string.IsNullOrWhiteSpace(pob.FamilyName))
                errors.Add(PERSON_ON_BOARD_ERRORS.MISSING_LAST_NAME);

            if (string.IsNullOrWhiteSpace(pob.GivenName))
                errors.Add(PERSON_ON_BOARD_ERRORS.MISSING_FIRST_NAME);

            var identityDocument = pob.IdentityDocument.FirstOrDefault();

            if (identityDocument != null)
            {
                if (string.IsNullOrWhiteSpace(identityDocument.IdentityDocumentNumber))
                    errors.Add(PERSON_ON_BOARD_ERRORS.MISSING_DOCUMENT_NUMBER);

                if (identityDocument.IdentityDocumentExpiryDate == null)
                    errors.Add(PERSON_ON_BOARD_ERRORS.MISSING_EXPIRY_DATE);

                if (identityDocument.IssuingNationId == null)
                    errors.Add(PERSON_ON_BOARD_ERRORS.MISSING_ISSUING_COUNTRY);
            }
            return errors;
        }

        public List<string> ConvertErrorsToMsg(List<PERSON_ON_BOARD_ERRORS> errors)
        {
            var errorMsgs = new List<string>();

            foreach (var error in errors)
            {
                switch (error)
                {
                    case PERSON_ON_BOARD_ERRORS.MISSING_FIRST_NAME:
                        errorMsgs.Add("Missing Given Name");
                        break;
                    case PERSON_ON_BOARD_ERRORS.MISSING_LAST_NAME:
                        errorMsgs.Add("Missing Family Name");
                        break;
                    case PERSON_ON_BOARD_ERRORS.MISSING_ISSUING_COUNTRY:
                        errorMsgs.Add("Missing issuing country");
                        break;
                    case PERSON_ON_BOARD_ERRORS.MISSING_EXPIRY_DATE:
                        errorMsgs.Add("Missing expiry date");
                        break;
                    case PERSON_ON_BOARD_ERRORS.MISSING_DOCUMENT_NUMBER:
                        errorMsgs.Add("Missing document number");
                        break;
                    default:
                        break;
                }
            }
            return errorMsgs;
        }
    }
}
