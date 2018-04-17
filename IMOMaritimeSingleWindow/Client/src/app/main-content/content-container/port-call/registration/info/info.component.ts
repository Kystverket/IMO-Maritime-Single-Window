import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../shared/services/port-call.service';

const SHIP_NAME = "Ship Name:";
const CALL_SIGN = "Call Sign:";
const IMO_NO = "IMO no:";
const GROSS_TONNAGE = "Gross Tonnage:";
const LENGTH = "Length:";
const SHIP_TYPE = "Ship Type:";

const LOCATION = "Location:";
const LOCATION_CODE = "Location Code:";
const ETA = "ETA:";
const ETD = "ETD:";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  shipFlag: string;
  locationFlag: string;

  portCallShipInfo: any[] = [
    { description: SHIP_NAME, data: null },
    { description: CALL_SIGN, data: null },
    { description: IMO_NO, data: null },
    { description: GROSS_TONNAGE, data: null },
    { description: LENGTH, data: null },
    { description: SHIP_TYPE, data: null }
  ];

  portCallLocationInfo: any[] = [
    { description: LOCATION, data: null },
    { description: LOCATION_CODE, data: null },
    { description: ETA, data: null },
    { description: ETD, data: null }
  ];

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.overviewData$.subscribe(
      data => {
        if (data != null) {
          // Ship
          if (data.shipOverview != null) {
            if (data.shipOverview.country != null) {
              this.shipFlag = data.shipOverview.country.twoCharCode;
            }
            this.portCallShipInfo.find(p => p.description == SHIP_NAME).data = data.shipOverview.ship.name;
            this.portCallShipInfo.find(p => p.description == CALL_SIGN).data = data.shipOverview.ship.callSign;
            this.portCallShipInfo.find(p => p.description == IMO_NO).data = data.shipOverview.ship.imoNo;
            this.portCallShipInfo.find(p => p.description == GROSS_TONNAGE).data = data.shipOverview.ship.grossTonnage;
            this.portCallShipInfo.find(p => p.description == LENGTH).data = data.shipOverview.ship.length;
            console.log(data.shipOverview);
            if (data.shipOverview.shipType != null) {
              this.portCallShipInfo.find(p => p.description == SHIP_TYPE).data = data.shipOverview.shipType.name;
            }
          }
          // Location
          if (data.locationOverview != null) {
            if (data.locationOverview.country != null) {
              this.locationFlag = data.locationOverview.country.twoCharCode.toLowerCase();
            }
            this.portCallLocationInfo.find(p => p.description == LOCATION).data = data.locationOverview.location.name;
            this.portCallLocationInfo.find(p => p.description == LOCATION_CODE).data = data.locationOverview.location.locationCode;
          }
        }        
      }
    );
    
    // ETA/ETD
    this.portCallService.etaEtdData$.subscribe(
      data => {
        if (data != null) {
          let eta = data.eta.year + "-" + this.dateTimeFormat(data.eta.month) + "-" + this.dateTimeFormat(data.eta.day)
            + " " + this.dateTimeFormat(data.eta.hour) + ":" + this.dateTimeFormat(data.eta.minute);
          let etd = data.etd.year + "-" + this.dateTimeFormat(data.etd.month) + "-" + this.dateTimeFormat(data.etd.day)
            + " " + this.dateTimeFormat(data.etd.hour) + ":" + this.dateTimeFormat(data.etd.minute);

          this.portCallLocationInfo.find(p => p.description == ETA).data = eta;
          this.portCallLocationInfo.find(p => p.description == ETD).data = etd;
        }
      }
    );
  }

  private dateTimeFormat(number: number) {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  }

}
