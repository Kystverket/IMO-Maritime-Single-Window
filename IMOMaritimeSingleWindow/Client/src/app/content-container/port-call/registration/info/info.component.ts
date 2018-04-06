import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../shared/services/port-call.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  shipFlag: string;
  locationFlag: string;

  portCallShipInfo: any[] = [
    { description: "Ship Name:", data: null },
    { description: "Call Sign:", data: null },
    { description: "IMO no:", data: null },
    { description: "Gross Tonnage:", data: null },
    { description: "Length:", data: null },
    { description: "Ship Type:", data: null }
  ];

  portCallLocationInfo: any[] = [
    { description: "Location:", data: null },
    { description: "Location Code:", data: null },
    { description: "ETA:", data: null },
    { description: "ETD:", data: null }
  ];

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.shipData$.subscribe(
      data => {
        if (data != null) {
          if (data.country != null) {
            this.shipFlag = data.country.twoCharCode;
          }
          this.portCallShipInfo.find(p => p.description == "Ship Name:").data = data.ship.name;
          this.portCallShipInfo.find(p => p.description == "Call Sign:").data = data.ship.callSign;
          this.portCallShipInfo.find(p => p.description == "IMO no:").data = data.ship.imoNo;
          this.portCallShipInfo.find(p => p.description == "Gross Tonnage:").data = data.ship.grossTonnage;
          this.portCallShipInfo.find(p => p.description == "Length:").data = data.ship.length;
          if (data.shipType != null) {
            this.portCallShipInfo.find(p => p.description == "Ship Type:").data = data.shipType.name;
          }
        }
      }
    );
    this.portCallService.locationData$.subscribe(
      data => {
        if (data != null) {          
          if (data.country != null) {
            this.locationFlag = data.country.twoCharCode;
          }
          this.portCallLocationInfo.find(p => p.description == "Location:").data = data.name;
          this.portCallLocationInfo.find(p => p.description == "Location Code:").data = data.locationCode;
        }
      }
    );
    this.portCallService.etaEtdData$.subscribe(
      data => {
        if (data != null) {
          let eta = data.eta.year + "-" + this.dateTimeFormat(data.eta.month) + "-" + this.dateTimeFormat(data.eta.day)
            + " " + this.dateTimeFormat(data.eta.hour) + ":" + this.dateTimeFormat(data.eta.minute);
          let etd = data.etd.year + "-" + this.dateTimeFormat(data.etd.month) + "-" + this.dateTimeFormat(data.etd.day)
            + " " + this.dateTimeFormat(data.etd.hour) + ":" + this.dateTimeFormat(data.etd.minute);

          this.portCallLocationInfo.find(p => p.description == "ETA:").data = eta;
          this.portCallLocationInfo.find(p => p.description == "ETD:").data = etd;
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
