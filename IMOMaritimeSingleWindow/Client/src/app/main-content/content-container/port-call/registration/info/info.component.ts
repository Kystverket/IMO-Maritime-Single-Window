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
    // Ship
    this.portCallService.shipData$.subscribe(
      shipData => {
        if (shipData) {
          if (shipData.country) this.shipFlag = shipData.country.twoCharCode.toLowerCase();
          if (shipData.shipType) this.portCallShipInfo.find(p => p.description == SHIP_TYPE).data = shipData.shipType.name;
          this.portCallShipInfo.find(p => p.description == SHIP_NAME).data = shipData.ship.name;
          this.portCallShipInfo.find(p => p.description == CALL_SIGN).data = shipData.ship.callSign;
          this.portCallShipInfo.find(p => p.description == IMO_NO).data = shipData.ship.imoNo;
          this.portCallShipInfo.find(p => p.description == GROSS_TONNAGE).data = shipData.ship.grossTonnage;
          this.portCallShipInfo.find(p => p.description == LENGTH).data = shipData.ship.length;
        }
      }
    );
    // Location
    this.portCallService.locationData$.subscribe(
      locationData => {
        if (locationData) {
          if (locationData.country) this.locationFlag = locationData.country.twoCharCode.toLowerCase();
          this.portCallLocationInfo.find(p => p.description == LOCATION).data = locationData.location.name;
          this.portCallLocationInfo.find(p => p.description == LOCATION_CODE).data = locationData.location.locationCode;
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
