using System;
using System.Collections.Generic;
using IMOMaritimeSingleWindow.Models;

namespace IMOMaritimeSingleWindow.Helpers {
    public class ShipOverview {
        
        public ShipOverview() {
        }

        public Ship Ship {get; set;}

        public Country Country {get; set;}
        
        public ShipType ShipType {get; set;}

        public List<ShipContact> ContactList {get; set;}

    }
}