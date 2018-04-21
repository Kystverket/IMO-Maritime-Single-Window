using System;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Helpers
{
    public class ShipFlagCodeSearchResult
    {
        public ShipFlagCodeSearchResult(){}

        public ShipFlagCode ShipFlagCode {get; set;}

        public Country Country {get; set;}
    }
}