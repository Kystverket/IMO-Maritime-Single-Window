import { Component, OnDestroy, OnInit } from '@angular/core';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { ShipStoresModel } from 'app/shared/models/ship-stores-model';
import { ContentService } from 'app/shared/services/content.service';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ShipService } from 'app/shared/services/ship.service';
import { Subscription } from 'rxjs/Subscription';
import { FalCargoService } from '../../../../../shared/services/fal-cargo.service';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { PortCallPassengerListService } from '../../../../../shared/services/port-call-passenger-list.service';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {

  selectedComponent: string;
  portCallId: number;

  cargoData: ConsignmentModel[];
  shipStoresData: ShipStoresModel[];

  formNames: any;

  shipDataSubscription: Subscription;
  portCallFormNameSubscription: Subscription;
  portCallIdSubscription: Subscription;
  cargoSubscription: Subscription;
  shipStoresSubscription: Subscription;
  personOnBoardListSubscription: Subscription;

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
        }
      }
    );
    this.cargoSubscription = this.cargoService.consignmentListData$.subscribe(
      data => {
        this.cargoData = data;
      }
    );
    this.portCallIdSubscription = this.portCallService.detailsIdentificationData$.subscribe(
      idResult => {
        if (idResult) {
          this.portCallId = idResult.portCallId;
          this.personOnBoardListSubscription = this.getPersonOnBoardListForPortCall(this.portCallId).subscribe(
            personOnBoardListResult => {
              if (personOnBoardListResult) {
                console.log(personOnBoardListResult);
                const passengerList = personOnBoardListResult.filter(p => p.personOnBoardType.name === 'Passenger');
                this.passengerListService.setPassengersList(passengerList);
              }
            }
          );
        }
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

  getPersonOnBoardListForPortCall(portCallId) {
    return this.passengerListService.getPersonOnBoardListByPortCallId(portCallId);
  }


  ngOnDestroy() {
    this.shipDataSubscription.unsubscribe();
    this.portCallFormNameSubscription.unsubscribe();
    this.cargoSubscription.unsubscribe();
    this.personOnBoardListSubscription.unsubscribe();
  }
}
