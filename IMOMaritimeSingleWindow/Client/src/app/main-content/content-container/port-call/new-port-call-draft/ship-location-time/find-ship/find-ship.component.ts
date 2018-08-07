import { Component, OnInit } from '@angular/core';
import { ShipProperties } from 'app/shared/constants/ship-properties';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-find-ship',
  templateUrl: './find-ship.component.html',
  styleUrls: ['./find-ship.component.css']
})
export class FindShipComponent implements OnInit {

  shipFound = false;
  shipProperties = new ShipProperties().getPropertyList();

  constructor(private portCallService: PortCallService) { }

  ngOnInit() { }


  onShipResult(shipResult) {
    if (shipResult) {
      const twoCharCode = shipResult.shipFlagCode.country.twoCharCode.toLowerCase() || 'xx';
      const countryFlag = twoCharCode + '.png';
      ShipProperties.setCountry(this.shipProperties, null, countryFlag);
      ShipProperties.setShipName(this.shipProperties, shipResult.name);
      ShipProperties.setCallSign(this.shipProperties, shipResult.callSign);
      ShipProperties.setImoNo(this.shipProperties, shipResult.imoNo);
      ShipProperties.setMmsiNo(this.shipProperties, shipResult.mmsiNo);
      ShipProperties.setGrossTonnage(this.shipProperties, shipResult.grossTonnage);
      ShipProperties.setNetTonnage(this.shipProperties, shipResult.netTonnage);
      ShipProperties.setLength(this.shipProperties, shipResult.length);
      ShipProperties.setShipType(this.shipProperties, shipResult.shipType.name);
      ShipProperties.setShipStatus(this.shipProperties, shipResult.shipStatus.name);

      this.shipFound = true;
      this.portCallService.setShipData(shipResult);
    } else {
      this.shipFound = false;
      this.portCallService.setShipData(null);
    }
  }

  deselectShip() {
    this.shipFound = false;
    this.portCallService.setShipData(null);
  }
}
