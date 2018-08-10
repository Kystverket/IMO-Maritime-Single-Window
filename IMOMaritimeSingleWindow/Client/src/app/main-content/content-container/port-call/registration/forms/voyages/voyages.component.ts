import { Component, OnInit, Input } from '@angular/core';
import { ShipProperties } from 'app/shared/constants/ship-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { EtaEtdDateTime } from 'app/shared/interfaces/eta-etd-date-time.interface';
import { NgbDate } from '../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

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

  etaEtdModel: EtaEtdDateTime = {
    eta: null,
    etd: null
  };

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
    this.etaEtdModel.eta = etaResult;
    this.validateData();
  }

  onEtdResult(etdResult) {
    this.etaEtdModel.etd = etdResult;
    this.validateData();
  }

  private validateData() {
    if (this.etaEtdModel.eta && this.etaEtdModel.etd) {
      const etaDate = new NgbDate(this.etaEtdModel.eta.date.year, this.etaEtdModel.eta.date.month, this.etaEtdModel.eta.date.day);
      const etdDate = new NgbDate(this.etaEtdModel.etd.date.year, this.etaEtdModel.etd.date.month, this.etaEtdModel.etd.date.day);

      this.dateSequenceError = etdDate.before(etaDate);

      if (etdDate.equals(etaDate)) {
        this.timeSequenceError = this.etaEtdModel.eta.time.hour > this.etaEtdModel.etd.time.hour
          || (this.etaEtdModel.eta.time.hour === this.etaEtdModel.etd.time.hour
          && this.etaEtdModel.eta.time.minute >= this.etaEtdModel.etd.time.minute);
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

    if (!this.dateSequenceError && !this.timeSequenceError && this.etaEtdModel && this.etaEtdModel.eta && this.etaEtdModel.etd) {
      const etaEtdData = {
        eta: Object.assign(this.etaEtdModel.eta.date, this.etaEtdModel.eta.time),
        etd: Object.assign(this.etaEtdModel.etd.date, this.etaEtdModel.etd.time)
      };

      // const formattedDate = this.portCallService.etaEtdDataFormat()
      this.portCallService.setEtaEtdData(etaEtdData);
    } else {
      this.portCallService.setEtaEtdData(null);
    }
  }
}
