import { Component, OnDestroy, OnInit } from '@angular/core';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { LocationModel } from 'app/shared/models/location-model';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { ShipModel } from 'app/shared/models/ship-model';
import { ShipStoresModel } from 'app/shared/models/ship-stores-model';
import { ContentService } from 'app/shared/services/content.service';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ShipService } from 'app/shared/services/ship.service';
import { Subscription } from 'rxjs/Subscription';
import { PortCallModel } from 'app/shared/models/port-call-model';
import { FalSecurityService } from '../../../../../shared/services/fal-security.service';
import { FalSecurityModel } from '../../../../../shared/models/fal-security-model';
import { CompanySecurityOfficerModel } from '../../../../../shared/models/company-security-officer-model';


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
  prevLocationModel: LocationModel;
  prevEtdModel: DateTime;
  nextLocationModel: LocationModel;
  nextEtaModel: DateTime;

  cargoData: ConsignmentModel[];
  shipStoresData: ShipStoresModel[];
  passengerData: PersonOnBoardModel[];
  crewData: PersonOnBoardModel[];

  formNames: any;

  shipDataSubscription: Subscription;
  portCallFormNameSubscription: Subscription;
  portCallIdSubscription: Subscription;
  cargoSubscription: Subscription;
  shipStoresSubscription: Subscription;
  passengerListSubscription: Subscription;
  crewListSubscription: Subscription;
  securitySubscription: Subscription;
  setSecuritySubscription: Subscription;
  // 2018.08.17 Trying new pattern for security-component
  portCallSubscription: Subscription;
  portCallModel: PortCallModel;
  securityData: FalSecurityModel;
  securityShipModel: ShipModel;

  // Voyages
  shipSubscription: Subscription;
  locationSubscription: Subscription;
  etaSubscription: Subscription;
  etdSubscription: Subscription;
  prevLocationSubscription: Subscription;
  prevEtdSubscription: Subscription;
  nextLocationSubscription: Subscription;
  nextEtaSubscription: Subscription;

  constructor(
    private contentService: ContentService,
    private portCallService: PortCallService,
    private shipService: ShipService,
    private cargoService: FalCargoService,
    private shipStoresService: FalShipStoresService,
    private securityService: FalSecurityService,
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) { }

  ngOnInit() {
    this.securityService.resetServiceData();
    this.portCallSubscription = this.portCallService.portCallData$.subscribe(
      portCallData => {
        if (portCallData) {
          this.portCallModel = portCallData;
          this.setCargoForPortCall(this.portCallModel.portCallId);
          this.setSecurityForPortCall(this.portCallModel.portCallId);
          this.shipDataSubscription = this.shipService.getShip(this.portCallModel.shipId).subscribe(
            data => {
              console.log(data);
              if (data) {
                this.securityShipModel = data;
              }
            }
          );
        }
      }
    );

    this.securitySubscription = this.securityService.securityData$.subscribe(
      data => {
        if (data) {
          this.securityData = data;
        } else {
          this.securityData = new FalSecurityModel();
          this.securityData.companySecurityOfficer = new CompanySecurityOfficerModel();
        }
      }
    );

    this.portCallIdSubscription = this.portCallService.portCallIdData$.subscribe(
      portCallIdData => {
        if (portCallIdData) {
          this.portCallId = portCallIdData;
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
    this.locationSubscription = this.portCallService.locationData$.subscribe(
      data => {
        this.locationModel = data;
      }
    );
    this.prevLocationSubscription = this.portCallService.prevLocationData$.subscribe(
      data => {
        this.prevLocationModel = data;
      }
    );
    this.prevEtdSubscription = this.portCallService.prevEtdData$.subscribe(
      data => {
        this.prevEtdModel = data;
      }
    );
    this.nextLocationSubscription = this.portCallService.nextLocationData$.subscribe(
      data => {
        this.nextLocationModel = data;
      }
    );
    this.nextEtaSubscription = this.portCallService.nextEtaData$.subscribe(
      data => {
        this.nextEtaModel = data;
      }
    );

    this.cargoSubscription = this.cargoService.consignmentListData$.subscribe(
      data => {
        this.cargoData = data;
      }
    );
    this.portCallIdSubscription = this.portCallService.portCallIdData$.subscribe(
      idResult => {
        if (idResult) {
          this.portCallId = idResult;

          this.passengerListSubscription = this.personOnBoardService.getPassengerListByPortCallId(this.portCallId).subscribe(
            passengerList => {
              if (passengerList) {
                this.passengerData = passengerList;
                this.personOnBoardService.setPassengersList(passengerList);
                this.personOnBoardService.setPassengerDataIsPristine(true);
              }
            }
          );

          this.crewListSubscription = this.personOnBoardService.getCrewListByPortCallId(this.portCallId).subscribe(
            crewList => {
              if (crewList) {
                this.crewData = crewList;
                this.personOnBoardService.setCrewList(crewList);
                this.personOnBoardService.setCrewDataIsPristine(true);
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
    );
  }

  setSecurityForPortCall(portCallId) {
    this.setSecuritySubscription = this.securityService.getFalSecurityByPortCallId(portCallId).subscribe(
      data => {
        if (data) {
          this.securityService.setSecurityData(data);
        }
      }, error => {
        console.log(error);
      }
    );
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
    this.securitySubscription.unsubscribe();
    this.setSecuritySubscription.unsubscribe();
    this.passengerListSubscription.unsubscribe();
    this.crewListSubscription.unsubscribe();
    this.prevLocationSubscription.unsubscribe();
    this.prevEtdSubscription.unsubscribe();
    this.nextLocationSubscription.unsubscribe();
    this.nextEtaSubscription.unsubscribe();
  }
}
