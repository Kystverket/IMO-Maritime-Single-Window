using IMOMaritimeSingleWindow.Data;
using IMOMaritimeSingleWindow.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace IMOMaritimeSingleWindow.SpreadSheet.MappingMethods
{
    public class CommonMappingMethods
    {
        readonly open_ssnContext _context;

        public CommonMappingMethods(open_ssnContext context)
        {
            _context = context;
        }
        public static bool ConvertTextToBool(string input)
        {
            return input.ToUpper().Equals("YES");
        }

        public static bool ConvertToTransitPax(string input)
        {
            var normalizedInput = input.ToUpper().Trim();

            if (normalizedInput == "YES" ||
                normalizedInput == "Y" ||
                normalizedInput == "TRANSIT" ||
                normalizedInput == "TRANSIT PAX" ||
                normalizedInput == "TRANSIT PASSENGER" ||
                normalizedInput == "TRANS")
            {
                return true;
            }

            return false;
        }

        public static DateTime? ConvertToDatetime(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return null;
            }

            var convertedDate = DateTime.Parse(input, CultureInfo.InvariantCulture);

            return convertedDate;
        }

        public static GENDER_TYPES ConvertToGender(string input)
        {
            var genderLetter = input.ToUpper();
            switch(genderLetter)
            {
                case "M":
                   return GENDER_TYPES.MALE;
                case "F":
                    return GENDER_TYPES.FEMALE;
                case "O":
                    return GENDER_TYPES.OTHER;
                default:
                    return GENDER_TYPES.OTHER;
            }
        }




    }
}
