import { Component, OnInit, Input } from '@angular/core';
import { ShipProperties } from 'app/shared/constants/ship-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {

  @Input() portCallId: number;

  shipFound = false;
  shipProperties = new ShipProperties().getPropertyList();

  locationFound = false;
  locationProperties = new LocationProperties().getPropertyList();

  etaModel: DateTime;
  etdModel: DateTime;

  dateSequenceError = false;
  timeSequenceError = false;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
  }

  onShipResult(shipResult) {
    const twoCharCode = shipResult.shipFlagCode.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    ShipProperties.setShipData(this.shipProperties, shipResult);
    ShipProperties.setCountry(this.shipProperties, null, countryFlag);

    this.portCallService.setShipData(shipResult);
    this.shipFound = true;
  }

  deselectShip() {
    this.portCallService.setShipData(null);
    this.shipFound = false;
  }

  onLocationResult(locationResult) {
    const twoCharCode = locationResult.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    LocationProperties.setLocationData(this.locationProperties, locationResult);
    LocationProperties.setCountry(this.locationProperties, locationResult.country.name, countryFlag);

    this.portCallService.setLocationData(locationResult);
    this.locationFound = true;
  }

  deselectLocation() {
    this.portCallService.setLocationData(null);
    this.locationFound = false;
  }

  onEtaResult(etaResult) {
    this.etaModel = etaResult;
    this.validateData();
  }

  onEtdResult(etdResult) {
    this.etdModel = etdResult;
    this.validateData();
  }

  private validateData() {
    if (this.etaModel && this.etdModel) {
      const etaDate = new NgbDate(this.etaModel.date.year, this.etaModel.date.month, this.etaModel.date.day);
      const etdDate = new NgbDate(this.etdModel.date.year, this.etdModel.date.month, this.etdModel.date.day);

      this.dateSequenceError = etdDate.before(etaDate);

      if (etdDate.equals(etaDate)) {
        this.timeSequenceError = this.etaModel.time.hour > this.etdModel.time.hour
          || (this.etaModel.time.hour === this.etdModel.time.hour
          && this.etaModel.time.minute >= this.etdModel.time.minute);
      } else {
        this.timeSequenceError = false;
      }
    } else {
      this.dateSequenceError = false;
      this.timeSequenceError = false;
    }
    this.persistData();
  }

  private persistData() {

    if (!this.dateSequenceError && !this.timeSequenceError && this.etaModel && this.etdModel) {
      const etaEtdData = {
        eta: Object.assign(this.etaModel.date, this.etaModel.time),
        etd: Object.assign(this.etdModel.date, this.etdModel.time)
      };

      // const formattedDate = this.portCallService.etaEtdDataFormat()
      this.portCallService.setEtaEtdData(etaEtdData);
    } else {
      this.portCallService.setEtaEtdData(null);
    }
  }
}
