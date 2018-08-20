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
import { PortCallPassengerListService } from '../../../../../shared/services/port-call-passenger-list.service';
import { PortCallModel } from 'app/shared/models/port-call-model';
import { ShipModel } from 'app/shared/models/ship-model';
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

  cargoData: ConsignmentModel[];
  shipStoresData: ShipStoresModel[];

  formNames: any;

  shipDataSubscription: Subscription;
  portCallFormNameSubscription: Subscription;
  portCallIdSubscription: Subscription;
  cargoSubscription: Subscription;
  shipStoresSubscription: Subscription;
  securitySubscription: Subscription;
  setSecuritySubscription: Subscription;
  // 2018.08.17 Trying new pattern for security-component
  portCallSubscription: Subscription;
  portCallModel: PortCallModel;
  shipModel: ShipModel;
  securityData: FalSecurityModel;


  constructor(
    private contentService: ContentService,
    private portCallService: PortCallService,
    private shipService: ShipService,
    private cargoService: FalCargoService,
    private shipStoresService: FalShipStoresService,
    private passengerListService: PortCallPassengerListService,
    private securityService: FalSecurityService
  ) { }

  ngOnInit() {
    this.portCallSubscription = this.portCallService.portCallData$.subscribe(
      portCallData => {
        if (portCallData) {
          this.portCallModel = portCallData;
          this.setCargoForPortCall(this.portCallModel.portCallId);
          this.setSecurityForPortCall(this.portCallModel.portCallId);
          this.shipDataSubscription = this.shipService.getShip(this.portCallModel.shipId).subscribe(
            data => {
              if (data) {
                this.shipModel = data;
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
  }
}
