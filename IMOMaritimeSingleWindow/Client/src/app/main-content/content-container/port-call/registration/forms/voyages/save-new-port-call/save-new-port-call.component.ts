import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationModel, PortCallModel, ShipModel } from 'app/shared/models/';
import { PortCallDetailsService, PortCallService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';
import { LoadPortCallService } from '../../../../load-port-call.service';

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

  creatingPortCall = false;

  shipDataSubscription: Subscription;
  locationDataSubscription: Subscription;
  etaDataSubscription: Subscription;
  etdDataSubscription: Subscription;
  voyagesErrorSubscription: Subscription;
  prevLocationSubscription: Subscription;
  prevEtdSubscription: Subscription;
  nextLocationSubscription: Subscription;
  nextEtaSubscription: Subscription;

  isLoadingPortCallSubscription: Subscription;

  constructor(
    private portCallService: PortCallService,
    private portCallDetailsService: PortCallDetailsService,
    private loadPortCallService: LoadPortCallService,
  ) { }

  ngOnInit() {
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

    this.isLoadingPortCallSubscription = this.loadPortCallService.isLoading$.subscribe(
      data => {
        this.creatingPortCall = data;
      }
    );
  }

  ngOnDestroy() {
    this.shipDataSubscription.unsubscribe();
    this.locationDataSubscription.unsubscribe();
    this.etaDataSubscription.unsubscribe();
    this.etdDataSubscription.unsubscribe();
    this.voyagesErrorSubscription.unsubscribe();
    this.prevLocationSubscription.unsubscribe();
    this.prevEtdSubscription.unsubscribe();
    this.nextLocationSubscription.unsubscribe();
    this.nextEtaSubscription.unsubscribe();
    this.isLoadingPortCallSubscription.unsubscribe();
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

  registerPortCallDraft() {
    this.creatingPortCall = true;
    const portCallModel = this.buildPortCallModel();
    this.portCallService.registerNewPortCall(portCallModel).subscribe(
      result => {
        console.log('New port call successfully registered:', result);
        // add list of authorities for clearance
        console.log('Registering authority clearance agencies to port call...');
        this.portCallService.registerClearanceAgenciesForPortCall(result);

        this.portCallDetailsService.wipeDetailsData();
        this.loadPortCallService.setContent(result.portCallId);
      },
      error => {
        console.log(error);
      }
    );
  }
}
