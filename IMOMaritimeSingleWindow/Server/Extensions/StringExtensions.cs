
/*  Adds an extension method to the string class for transforming
 *  text to snake_case format.
 *  This was taken from a post written by Andrew Lock
 *  url: https://andrewlock.net/customising-asp-net-core-identity-ef-core-naming-conventions-for-postgresql/
 *  on date: 20.04.2018
*/

using System.Text.RegularExpressions;

namespace IMOMaritimeSingleWindow.Extensions
{

    public static class StringExtensions
    {
        public static string ToSnakeCase(this string input)
        {
            if (string.IsNullOrEmpty(input)) { return input; }

            var startUnderscores = Regex.Match(input, @"^_+");
            return startUnderscores + Regex.Replace(input, @"([a-z0-9])([A-Z])", "$1_$2").ToLower();
        }
    }
}
