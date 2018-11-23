import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationModel, PortCallModel, ShipModel } from 'app/shared/models/';
import { PortCallDetailsService, PortCallService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';

const INITIAL_DATA_IS_PRISTINE_TEXT = 'There are no unsaved changes in this page.';
const UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';

@Component({
  selector: 'app-save-voyages',
  templateUrl: './save-voyages.component.html',
  styleUrls: ['./save-voyages.component.css']
})
export class SaveVoyagesComponent implements OnInit, OnDestroy {

  @Input() portCallId: number;

  shipModel: ShipModel;
  locationModel: LocationModel;
  etaModel: DateTime;
  etdModel: DateTime;
  prevLocationModel: LocationModel;
  nextLocationModel: LocationModel;
  prevEtdModel: DateTime;
  nextEtaModel: DateTime;

  shipFound = false;
  locationFound = false;
  etaFound = false;
  etdFound = false;
  prevLocationFound = false;
  prevEtdFound = false;
  nextLocationFound = false;
  nextEtaFound = false;

  voyagesErrors = false;

  dataIsPristine = true;
  dataIsPristineText: string;

  dataIsPrisitineSubscription: Subscription;
  shipDataSubscription: Subscription;
  locationDataSubscription: Subscription;
  etaDataSubscription: Subscription;
  etdDataSubscription: Subscription;
  voyagesErrorSubscription: Subscription;
  prevLocationSubscription: Subscription;
  prevEtdSubscription: Subscription;
  nextLocationSubscription: Subscription;
  nextEtaSubscription: Subscription;

  constructor(private portCallService: PortCallService, private portCallDetailsService: PortCallDetailsService) {
    this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
  }

  ngOnInit() {
    this.dataIsPrisitineSubscription = this.portCallService.voyagesIsPristine$.subscribe(
      voyagesIsPristine => {
        this.dataIsPristine = voyagesIsPristine;
      }
    );

    this.shipDataSubscription = this.portCallService.shipData$.subscribe(shipData => {
      this.shipFound = !!shipData;
      this.shipModel = shipData;
    });
    this.locationDataSubscription = this.portCallService.locationData$.subscribe(locationData => {
      this.locationFound = !!locationData;
      this.locationModel = locationData;
    });
    this.etaDataSubscription = this.portCallService.etaData$.subscribe(etaData => {
      this.etaFound = !!etaData;
      this.etaModel = etaData;
    });
    this.etdDataSubscription = this.portCallService.etdData$.subscribe(etdData => {
      this.etdFound = !!etdData;
      this.etdModel = etdData;
    });
    this.prevLocationSubscription = this.portCallService.prevLocationData$.subscribe(
      data => {
        this.prevLocationFound = !!data;
        this.prevLocationModel = data;
      }
    );
    this.prevEtdSubscription = this.portCallService.prevEtdData$.subscribe(
      data => {
        this.prevEtdFound = !!data;
        this.prevEtdModel = data;
      }
    );
    this.nextLocationSubscription = this.portCallService.nextLocationData$.subscribe(
      data => {
        this.nextLocationFound = !!data;
        this.nextLocationModel = data;
      }
    );
    this.nextEtaSubscription = this.portCallService.nextEtaData$.subscribe(
      data => {
        this.nextEtaFound = !!data;
        this.nextEtaModel = data;
      }
    );

    this.voyagesErrorSubscription = this.portCallService.voyagesErrors$.subscribe(
      hasError => {
        this.voyagesErrors = hasError;
      }
    );
  }

  ngOnDestroy() {
    this.dataIsPrisitineSubscription.unsubscribe();
    this.shipDataSubscription.unsubscribe();
    this.locationDataSubscription.unsubscribe();
    this.etaDataSubscription.unsubscribe();
    this.etdDataSubscription.unsubscribe();
    this.voyagesErrorSubscription.unsubscribe();
    this.prevLocationSubscription.unsubscribe();
    this.prevEtdSubscription.unsubscribe();
    this.nextLocationSubscription.unsubscribe();
    this.nextEtaSubscription.unsubscribe();
  }

  formatDateTime(dateTime: DateTime): Date {
    return new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
  }

  private buildPortCallModel(oldPortCallModel: PortCallModel = null): PortCallModel {
    const portCallModel = !!oldPortCallModel ? oldPortCallModel : new PortCallModel();
    portCallModel.shipId = this.shipModel.shipId;
    portCallModel.locationId = this.locationModel.locationId;
    portCallModel.locationEta = this.formatDateTime(this.etaModel);
    portCallModel.locationEtd = this.formatDateTime(this.etdModel);

    portCallModel.previousLocationId = this.prevLocationFound ? this.prevLocationModel.locationId : null;
    portCallModel.previousLocationEtd = this.prevEtdFound ? this.formatDateTime(this.prevEtdModel) : null;
    portCallModel.nextLocationId = this.nextLocationFound ? this.nextLocationModel.locationId : null;
    portCallModel.nextLocationEta = this.nextEtaFound ? this.formatDateTime(this.nextEtaModel) : null;

    return portCallModel;
  }

  savePortCall() {
    console.log('Loading port call with id ' + this.portCallId);
    this.portCallService.getPortCallById(this.portCallId).subscribe(
      portCall => {
        console.log('Loaded port call:', portCall);
        if (portCall) {
          const portCallModel = this.buildPortCallModel(portCall);
          console.log(portCallModel);
          this.portCallService.updatePortCall(portCallModel).subscribe(
            result => {
              console.log('Port Call updated:', result);
              this.portCallService.setVoyagesIsPristine(true);
              this.dataIsPristineText = UPDATED_DATA_IS_PRISTINE_TEXT;
            },
            error => {
              console.log(error);
            }
          );
        }
      }
    );
  }
}
