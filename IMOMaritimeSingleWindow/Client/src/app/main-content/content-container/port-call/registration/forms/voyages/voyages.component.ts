import { Component, OnInit, Input } from '@angular/core';
import { ShipProperties } from 'app/shared/constants/ship-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { ShipModel } from 'app/shared/models/ship-model';
import { LocationModel } from 'app/shared/models/location-model';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {

  @Input() portCallId: number;
  @Input() shipModel: ShipModel;
  @Input() locationModel: LocationModel;
  @Input() etaModel: DateTime;
  @Input() etdModel: DateTime;

  shipFound = false;
  shipProperties = new ShipProperties().getPropertyList();

  locationFound = false;
  locationProperties = new LocationProperties().getPropertyList();

  etaIsAfterEtdError = false;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.shipFound = !!this.shipModel;
    if (this.shipFound) {
      this.setShipData(this.shipModel);
    }

    this.locationFound = !!this.locationModel;
    if (this.locationFound) {
      this.setLocationData(this.locationModel);
    }
  }

  onShipResult(shipResult) {
    this.setShipData(shipResult);
    this.portCallService.setShipData(shipResult);
    this.shipFound = true;
  }

  private setShipData(shipData: ShipModel) {
    const twoCharCode = shipData.shipFlagCode.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    ShipProperties.setShipData(this.shipProperties, shipData);
    ShipProperties.setCountry(this.shipProperties, null, countryFlag);
  }

  deselectShip() {
    this.portCallService.setShipData(null);
    this.shipFound = false;
  }

  onLocationResult(locationResult) {
    this.setLocationData(locationResult);
    this.portCallService.setLocationData(locationResult);
    this.locationFound = true;
  }

  private setLocationData(locationData: LocationModel) {
    const twoCharCode = locationData.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    LocationProperties.setLocationData(this.locationProperties, locationData);
    LocationProperties.setCountry(this.locationProperties, locationData.country.name, countryFlag);
  }

  deselectLocation() {
    this.portCallService.setLocationData(null);
    this.locationFound = false;
  }

  onEtaResult(etaResult) {
    this.etaModel = etaResult;
    this.validateData();
    this.persistEta();
  }

  onEtdResult(etdResult) {
    this.etdModel = etdResult;
    this.validateData();
    this.persistEtd();
  }

  private validateData() {
    if (this.etaModel && this.etdModel) {
      const etaDate = new NgbDate(this.etaModel.date.year, this.etaModel.date.month, this.etaModel.date.day);
      const etdDate = new NgbDate(this.etdModel.date.year, this.etdModel.date.month, this.etdModel.date.day);

      this.etaIsAfterEtdError = etdDate.before(etaDate);

      if (etdDate.equals(etaDate)) {
        this.etaIsAfterEtdError = this.etaModel.time.hour > this.etdModel.time.hour
          || (this.etaModel.time.hour === this.etdModel.time.hour
            && this.etaModel.time.minute >= this.etdModel.time.minute);
      }
    } else {
      this.etaIsAfterEtdError = false;
    }
  }

  private persistEta() {
    if (this.etaModel) {
      this.portCallService.setEtaData(this.etaModel);
    }
  }

  private persistEtd() {
    if (this.etdModel) {
      this.portCallService.setEtdData(this.etdModel);
    }
  }
}
