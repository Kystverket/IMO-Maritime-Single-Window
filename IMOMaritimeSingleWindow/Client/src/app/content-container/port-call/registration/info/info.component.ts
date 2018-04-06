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
    this.portCallService.overviewData$.subscribe(
      data => {
        if (data != null) {
          // Ship
          if (data.shipOverview != null) {
            if (data.shipOverview.country != null) {
              this.shipFlag = data.shipOverview.country.twoCharCode;
            }
            this.portCallShipInfo.find(p => p.description == "Ship Name:").data = data.shipOverview.ship.name;
            this.portCallShipInfo.find(p => p.description == "Call Sign:").data = data.shipOverview.ship.callSign;
            this.portCallShipInfo.find(p => p.description == "IMO no:").data = data.shipOverview.ship.imoNo;
            this.portCallShipInfo.find(p => p.description == "Gross Tonnage:").data = data.shipOverview.ship.grossTonnage;
            this.portCallShipInfo.find(p => p.description == "Length:").data = data.shipOverview.ship.length;
            console.log(data.shipOverview);
            if (data.shipOverview.shipType != null) {
              this.portCallShipInfo.find(p => p.description == "Ship Type:").data = data.shipOverview.shipType.name;
            }
          }
          // Location
          if (data.locationOverview != null) {
            if (data.locationOverview.country != null) {
              this.locationFlag = data.locationOverview.country.twoCharCode.toLowerCase();
            }
            this.portCallLocationInfo.find(p => p.description == "Location:").data = data.locationOverview.location.name;
            this.portCallLocationInfo.find(p => p.description == "Location Code:").data = data.locationOverview.location.locationCode;
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
