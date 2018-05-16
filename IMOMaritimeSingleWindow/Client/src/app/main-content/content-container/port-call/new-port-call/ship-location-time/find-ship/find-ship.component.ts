import { Component, OnInit } from '@angular/core';
import { ShipProperties } from '../../../../../../shared/constants/ship-properties';
import { ShipOverviewModel } from '../../../../../../shared/models/ship-overview-model';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { ShipService } from '../../../../../../shared/services/ship.service';

@Component({
  selector: 'app-find-ship',
  templateUrl: './find-ship.component.html',
  styleUrls: ['./find-ship.component.css'],
  providers: [ShipService]
})
export class FindShipComponent implements OnInit {


  shipModel: ShipOverviewModel;
  shipFlag: string;
  shipFound: boolean = false;

  shipProperties: any = ShipProperties.PROPERTIES;
  shipInfo: any[];

  constructor(private portCallService: PortCallService, private shipService: ShipService) { }

  deselectShip() {
    this.shipFound = false;
    this.shipService.setShipOverviewData(null);
  }

  ngOnInit() {
    this.shipService.shipOverviewData$.subscribe(
      shipResult => {
        if (shipResult) {
          this.shipModel = shipResult;
          this.shipFound = true;
          if (shipResult.country) this.shipFlag = shipResult.country.twoCharCode.toLowerCase();
          if (shipResult.shipType) this.shipProperties.SHIP_TYPE.data = shipResult.shipType.name;
          if (shipResult.shipStatus) this.shipProperties.SHIP_STATUS.data = shipResult.shipStatus.name;
          this.shipProperties.SHIP_NAME.data = shipResult.ship.name;
          this.shipProperties.CALL_SIGN.data = shipResult.ship.callSign;
          this.shipProperties.IMO_NO.data = shipResult.ship.imoNo;
          this.shipProperties.MMSI_NO.data = shipResult.ship.mmsiNo;
          this.shipProperties.GROSS_TONNAGE.data = shipResult.ship.grossTonnage;
          this.shipProperties.LENGTH.data = shipResult.ship.length;
          this.portCallService.setShipData(this.shipModel);
        } else {
          this.shipFound = false;
          this.shipModel = null;
          this.shipProperties = ShipProperties.PROPERTIES;
          this.portCallService.setShipData(this.shipModel);
        }
        this.shipInfo = Object.values(this.shipProperties);
      }
    )
  }
}
