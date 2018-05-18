using System;
using IMOMaritimeSingleWindow.Models;
using System.Collections.Generic;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class CountrySearchResult
    {
        public CountrySearchResult(){}

        public Country Country {get; set;}

        public List<ShipFlagCode> ShipFlagCodes {get; set;}
        
    }
}