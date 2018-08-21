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
  @Input() prevLocationModel: LocationModel;
  @Input() nextLocationModel: LocationModel;
  @Input() prevEtdModel: DateTime;
  @Input() nextEtaModel: DateTime;

  shipFound = false;
  locationFound = false;
  prevLocationFound = false;
  nextLocationFound = false;

  shipProperties = new ShipProperties().getPropertyList();
  locationProperties = new LocationProperties().getPropertyList();
  prevLocationProperties = new LocationProperties().getPropertyList();
  nextLocationProperties = new LocationProperties().getPropertyList();

  etaIsAfterEtdError = false;
  prevEtdIsAfterCurrentEtaError = false;
  nextEtaIsBeforeCurrentEtdError = false;

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

    this.prevLocationFound = !!this.prevLocationModel;
    if (this.prevLocationFound) {
      this.setPrevLocationData(this.prevLocationModel);
    }

    console.log(this.nextLocationModel);
    this.nextLocationFound = !!this.nextLocationModel;
    if (this.nextLocationFound) {
      this.setNextLocationData(this.nextLocationModel);
    }

    this.validateDates();
  }

  onShipResult(shipResult) {
    this.setShipData(shipResult);
    this.portCallService.setShipData(shipResult);
    this.shipFound = true;
  }

  onLocationResult(locationResult) {
    this.setLocationData(locationResult);
    this.portCallService.setLocationData(locationResult);
    this.locationFound = true;
  }

  onPrevLocationResult(locationResult) {
    this.setPrevLocationData(locationResult);
    this.portCallService.setPrevLocationData(locationResult);
    this.prevLocationFound = true;
  }

  onNextLocationResult(locationResult) {
    this.setNextLocationData(locationResult);
    this.portCallService.setNextLocationData(locationResult);
    this.nextLocationFound = true;
  }

  deselectShip() {
    this.portCallService.setShipData(null);
    this.shipFound = false;
  }

  deselectLocation() {
    this.portCallService.setLocationData(null);
    this.locationFound = false;
  }

  deselectPrevLocation() {
    this.portCallService.setPrevLocationData(null);
    this.prevLocationFound = false;
  }

  deselectNextLocation() {
    this.portCallService.setNextLocationData(null);
    this.nextLocationFound = false;
  }

  onEtaResult(etaResult) {
    this.etaModel = etaResult;
    this.validateDates();
    this.persistEta();
  }

  onEtdResult(etdResult) {
    this.etdModel = etdResult;
    this.validateDates();
    this.persistEtd();
  }

  onPrevEtdResult(etdResult) {
    this.prevEtdModel = etdResult;
    this.validateDates();
    this.persistPrevEtd();
  }

  onNextEtaResult(etaResult) {
    this.nextEtaModel = etaResult;
    this.validateDates();
    this.persistNextEta();
  }

  private validateDates() {
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

    const prevEtdDate = this.prevEtdModel != null && this.prevEtdModel.date != null ? new NgbDate(this.prevEtdModel.date.year, this.prevEtdModel.date.month, this.prevEtdModel.date.day) : null;
    const nextEtaDate = this.nextEtaModel != null && this.nextEtaModel.date != null ? new NgbDate(this.nextEtaModel.date.year, this.nextEtaModel.date.month, this.nextEtaModel.date.day) : null;

    // Checking for sequence errors between prev and current port of call
    if (prevEtdDate && this.etaModel) {
      this.prevEtdIsAfterCurrentEtaError = prevEtdDate.after(this.etaModel.date);
      if (prevEtdDate.equals(this.etaModel.date)) {
        this.prevEtdIsAfterCurrentEtaError = this.prevEtdModel.time.hour > this.etaModel.time.hour
          || (this.prevEtdModel.time.hour === this.etaModel.time.hour
            && this.prevEtdModel.time.minute >= this.etaModel.time.minute);
      }
    } else {
      this.prevEtdIsAfterCurrentEtaError = false;
    }

    // Checking for sequence errors between next and current port of call
    if (nextEtaDate && this.etdModel) {
      this.nextEtaIsBeforeCurrentEtdError = nextEtaDate.before(this.etdModel.date);
      if (nextEtaDate.equals(this.etdModel.date)) {
        this.nextEtaIsBeforeCurrentEtdError = this.nextEtaModel.time.hour < this.etdModel.time.hour
          || (this.nextEtaModel.time.hour === this.etdModel.time.hour
            && this.nextEtaModel.time.minute <= this.etdModel.time.minute);
      }
    } else {
      this.nextEtaIsBeforeCurrentEtdError = false;
    }

    // console.log('ETA is after ETD', this.etaIsAfterEtdError);
    // console.log('Prev ETD is after ETA', this.prevEtdIsAfterCurrentEtaError);
    // console.log('Next ETA is before ETD', this.nextEtaIsBeforeCurrentEtdError);
    this.portCallService.setVoyagesErrors(this.etaIsAfterEtdError || this.prevEtdIsAfterCurrentEtaError || this.nextEtaIsBeforeCurrentEtdError);
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

  private persistPrevEtd() {
    if (this.prevEtdModel) {
      this.portCallService.setPrevEtdData(this.prevEtdModel);
    }
  }

  private persistNextEta() {
    if (this.nextEtaModel) {
      this.portCallService.setNextEtaData(this.nextEtaModel);
    }
  }

  // Methods used for populating info tables with correcly formatted data
  private setShipData(shipData: ShipModel) {
    const twoCharCode = shipData.shipFlagCode.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    ShipProperties.setShipData(this.shipProperties, shipData);
    ShipProperties.setCountry(this.shipProperties, null, countryFlag);
  }

  private setLocationData(locationData: LocationModel) {
    const twoCharCode = locationData.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    LocationProperties.setLocationData(this.locationProperties, locationData);
    LocationProperties.setCountry(this.locationProperties, locationData.country.name, countryFlag);
  }

  private setPrevLocationData(locationData: LocationModel) {
    const twoCharCode = locationData.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    LocationProperties.setLocationData(this.prevLocationProperties, locationData);
    LocationProperties.setCountry(this.prevLocationProperties, locationData.country.name, countryFlag);
  }

  private setNextLocationData(locationData: LocationModel) {
    const twoCharCode = locationData.country.twoCharCode.toLowerCase() || 'xx';
    const countryFlag = twoCharCode + '.png';
    LocationProperties.setLocationData(this.nextLocationProperties, locationData);
    LocationProperties.setCountry(this.nextLocationProperties, locationData.country.name, countryFlag);
  }
}
