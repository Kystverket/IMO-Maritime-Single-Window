import { Component, OnDestroy, OnInit } from '@angular/core';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { ShipStoresModel } from 'app/shared/models/ship-stores-model';
import { ContentService } from 'app/shared/services/content.service';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ShipService } from 'app/shared/services/ship.service';
import { Subscription } from 'rxjs/Subscription';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { ShipModel } from 'app/shared/models/ship-model';
import { LocationModel } from 'app/shared/models/location-model';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {

  selectedComponent: string;
  portCallId: number;

  // Voyages
  shipModel: ShipModel;
  locationModel: LocationModel;
  etaModel: DateTime;
  etdModel: DateTime;

  cargoData: ConsignmentModel[];
  shipStoresData: ShipStoresModel[];

  formNames: any;

  shipDataSubscription: Subscription;
  portCallFormNameSubscription: Subscription;
  portCallIdSubscription: Subscription;
  cargoSubscription: Subscription;
  shipStoresSubscription: Subscription;

  // Voyages
  shipSubscription: Subscription;
  locationSubscription: Subscription;
  etaSubscription: Subscription;
  etdSubscription: Subscription;

  constructor(
    private contentService: ContentService,
    private portCallService: PortCallService,
    private shipService: ShipService,
    private cargoService: FalCargoService,
    private shipStoresService: FalShipStoresService,
    private passengerListService: PortCallPassengerListService
  ) { }

  ngOnInit() {
    this.portCallIdSubscription = this.portCallService.portCallIdData$.subscribe(
      portCallIdData => {
        if (portCallIdData) {
          this.portCallId = portCallIdData;
          this.setCargoForPortCall(this.portCallId);
        }
      }
    );

    // Voyages
    this.shipSubscription = this.portCallService.shipData$.subscribe(
      data => {
        this.shipModel = data;
      }
    );
    this.locationSubscription = this.portCallService.locationData$.subscribe(
      data => {
        this.locationModel = data;
      }
    );
    this.etaSubscription = this.portCallService.etaData$.subscribe(
      data => {
        this.etaModel = data;
      }
    );
    this.etdSubscription = this.portCallService.etdData$.subscribe(
      data => {
        this.etdModel = data;
      }
    );

    this.cargoSubscription = this.cargoService.consignmentListData$.subscribe(
      data => {
        this.cargoData = data;
      }
    );
    this.shipStoresSubscription = this.shipStoresService.shipStoresList$.subscribe(
      data => {
        this.shipStoresData = data;
      }
    );
    this.shipDataSubscription = this.portCallService.shipData$.subscribe(
      shipResult => {
        this.shipService.setShipData(shipResult);
      }
    );
    this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(
      content => {
        this.selectedComponent = content;
      }
    );
    this.formNames = FORM_NAMES;
  }

  setCargoForPortCall(portCallId) {
    this.cargoSubscription = this.cargoService.getConsignmentListForPortCall(portCallId).subscribe(
      data => {
        if (data) {
          this.cargoService.setConsignmentListData(data);
        }
      }
    );
  }


  ngOnDestroy() {
    this.shipDataSubscription.unsubscribe();
    this.portCallFormNameSubscription.unsubscribe();
    this.cargoSubscription.unsubscribe();
  }
}
