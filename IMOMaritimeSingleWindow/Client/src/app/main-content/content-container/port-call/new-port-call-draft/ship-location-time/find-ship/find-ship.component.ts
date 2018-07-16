import { Component, OnInit } from '@angular/core';
import { ShipProperties } from 'app/shared/constants/ship-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ShipService } from 'app/shared/services/ship.service';

@Component({
  selector: 'app-find-ship',
  templateUrl: './find-ship.component.html',
  styleUrls: ['./find-ship.component.css']
})
export class FindShipComponent implements OnInit {

  shipFound = false;
  shipData = ShipProperties.PROPERTY_LIST;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() { }

  deselectShip() {
    this.shipFound = false;
    this.portCallService.setShipData(null);
  }

  onShipResult(shipResult) {
    if (shipResult) {
      const twoCharCode = shipResult.shipFlagCode.country.twoCharCode.toLowerCase() || 'xx';
      const countryFlagUrl = [ShipProperties.FLAGS_FOLDER, twoCharCode].join('/') + '.png';
      this.shipData.find(e => e.description === ShipProperties.COUNTRY).imageUrl = countryFlagUrl;
      this.shipData.find(e => e.description === ShipProperties.SHIP_TYPE).data = shipResult.shipType.name;
      this.shipData.find(e => e.description === ShipProperties.SHIP_STATUS).data = shipResult.shipStatus.name;
      this.shipData.find(e => e.description === ShipProperties.SHIP_NAME).data = shipResult.name;
      this.shipData.find(e => e.description === ShipProperties.CALL_SIGN).data = shipResult.callSign;
      this.shipData.find(e => e.description === ShipProperties.IMO_NO).data = shipResult.imoNo;
      this.shipData.find(e => e.description === ShipProperties.MMSI_NO).data = shipResult.mmsiNo;
      this.shipData.find(e => e.description === ShipProperties.GROSS_TONNAGE).data = shipResult.grossTonnage;
      this.shipData.find(e => e.description === ShipProperties.LENGTH).data = shipResult.length;

      this.shipFound = true;
      this.portCallService.setShipData(shipResult);
    } else {
      this.shipFound = false;
      this.shipData = ShipProperties.PROPERTY_LIST;
      this.portCallService.setShipData(null);
    }
  }
}
