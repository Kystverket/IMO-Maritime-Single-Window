import { Component, OnInit } from '@angular/core';
import { ShipProperties } from 'app/shared/constants/ship-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ShipService } from 'app/shared/services/ship.service';

@Component({
  selector: 'app-find-ship',
  templateUrl: './find-ship.component.html',
  styleUrls: ['./find-ship.component.css'],
  providers: [ShipService]
})
export class FindShipComponent implements OnInit {

  shipFlag: string;
  shipFound = false;

  shipProperties: any = ShipProperties.PROPERTIES;
  shipInfo: any[];

  constructor(private portCallService: PortCallService, private shipService: ShipService) { }

  deselectShip() {
    this.shipFound = false;
    this.shipService.setShipOverviewData(null);
  }

  ngOnInit() {
    this.shipService.setShipOverviewData(null);
    this.shipService.shipOverviewData$.subscribe(
      shipResult => {
        if (shipResult) {
          this.shipFlag = (shipResult.shipFlagCode.country) ? shipResult.shipFlagCode.country.twoCharCode.toLowerCase() : null;
          this.shipProperties.SHIP_TYPE.data = (shipResult.shipType) ? shipResult.shipType.name : null;
          this.shipProperties.SHIP_STATUS.data = (shipResult.shipStatus) ? shipResult.shipStatus.name : null;
          this.shipProperties.SHIP_NAME.data = shipResult.name;
          this.shipProperties.CALL_SIGN.data = shipResult.callSign;
          this.shipProperties.IMO_NO.data = shipResult.imoNo;
          this.shipProperties.MMSI_NO.data = shipResult.mmsiNo;
          this.shipProperties.GROSS_TONNAGE.data = shipResult.grossTonnage;
          this.shipProperties.LENGTH.data = shipResult.length;

          this.shipFound = true;
          this.portCallService.setShipData(shipResult);

        } else {
          this.shipFound = false;
          this.shipProperties = ShipProperties.PROPERTIES;
          this.portCallService.setShipData(null);
        }
        this.shipInfo = Object.values(this.shipProperties);
      }
    );
  }
}
