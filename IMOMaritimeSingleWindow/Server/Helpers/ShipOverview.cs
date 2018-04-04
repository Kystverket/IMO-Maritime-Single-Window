using System;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Helpers {
    public class ShipOverview {
        
        public ShipOverview() {
        }

        public Ship Ship {get; set;}

        public Country Country {get; set;}
        
        public ShipType ShipType {get; set;}

    }
}