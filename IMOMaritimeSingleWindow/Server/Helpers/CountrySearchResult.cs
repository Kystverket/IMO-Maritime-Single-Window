using System;
using IMOMaritimeSingleWindow.Models;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class CountrySearchResult
    {
        public CountrySearchResult(){}

        public int CountryId {get; set;}

        public string CountryName {get; set;}

        public string TwoCharCode {get; set;}

        public List<ShipFlagCodeSearchResult> CountryFlagCodes {get; set;}
        
    }
}