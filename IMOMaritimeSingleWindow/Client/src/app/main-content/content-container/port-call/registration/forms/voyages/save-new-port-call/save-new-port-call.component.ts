import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationModel } from 'app/shared/models/location-model';
import { PortCallModel } from 'app/shared/models/port-call-model';
import { ShipModel } from 'app/shared/models/ship-model';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';

@Component({
  selector: 'app-save-new-port-call',
  templateUrl: './save-new-port-call.component.html',
  styleUrls: ['./save-new-port-call.component.css']
})
export class SaveNewPortCallComponent implements OnInit, OnDestroy {
  shipModel: ShipModel;
  locationModel: LocationModel;
  etaModel: DateTime;
  etdModel: DateTime;

  shipFound = false;
  locationFound = false;
  etaFound = false;
  etdFound = false;

  voyagesErrors = false;

  shipDataSubscription: Subscription;
  locationDataSubscription: Subscription;
  etaDataSubscription: Subscription;
  etdDataSubscription: Subscription;
  voyagesErrorSubscription: Subscription;

  constructor(
    private portCallService: PortCallService
  ) { }

  ngOnInit() {
    this.shipDataSubscription = this.portCallService.shipData$.subscribe(shipData => {
      if (shipData) {
        this.shipFound = true;
        this.shipModel = shipData;
      } else {
        this.shipFound = false;
      }
    });
    this.locationDataSubscription = this.portCallService.locationData$.subscribe(locationData => {
      if (locationData) {
        this.locationFound = true;
        this.locationModel = locationData;
      } else {
        this.locationFound = false;
      }
    });
    this.etaDataSubscription = this.portCallService.etaData$.subscribe(etaData => {
      if (etaData) {
        this.etaModel = etaData;
        this.etaFound = true;
      } else {
        this.etaFound = false;
      }
    });
    this.etdDataSubscription = this.portCallService.etdData$.subscribe(etdData => {
      if (etdData) {
        this.etdModel = etdData;
        this.etdFound = true;
      } else {
        this.etdFound = false;
      }
    });

    this.voyagesErrorSubscription = this.portCallService.voyagesErrors$.subscribe(
      hasError => {
        this.voyagesErrors = hasError;
      }
    );
  }

  ngOnDestroy() {
    this.shipDataSubscription.unsubscribe();
    this.locationDataSubscription.unsubscribe();
    this.etaDataSubscription.unsubscribe();
    this.etdDataSubscription.unsubscribe();
    this.voyagesErrorSubscription.unsubscribe();
  }

  formatDateTime(dateTime: DateTime): Date {
    return new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
  }

  registerPortCallDraft()  {
    const portCallModel = new PortCallModel();
    portCallModel.shipId = this.shipModel.shipId;
    portCallModel.locationId = this.locationModel.locationId;
    portCallModel.locationEta = this.formatDateTime(this.etaModel);
    portCallModel.locationEtd = this.formatDateTime(this.etdModel);

    this.portCallService.registerNewPortCall(portCallModel).subscribe(
      result => {
        console.log('New port call successfully registered.');
        // add list of authorities for clearance
        console.log('Registering authority clearance agencies to port call...');
        this.portCallService.registerClearanceAgenciesForPortCall(result);

        this.portCallService.setPortCallIdData(result.portCallId);
      },
      error => {
        console.log(error);
      }
    );
  }
}
