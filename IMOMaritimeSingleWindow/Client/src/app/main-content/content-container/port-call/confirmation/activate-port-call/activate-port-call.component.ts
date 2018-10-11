import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { ConsignmentModel, PersonOnBoardModel, PortCallDetailsModel } from 'app/shared/models/';
import { ContentService, FalCargoService, FalSecurityService, FalShipStoresService, PortCallDetailsService, PortCallFalPersonOnBoardService, PortCallService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';

const RESULT_SUCCES = 'This port call has been activated, and is now awaiting clearance.';
const RESULT_FAILURE = 'There was a problem when trying to activate this port call. Please try again later.';

@Component({
  selector: 'app-activate-port-call',
  templateUrl: './activate-port-call.component.html',
  styleUrls: ['./activate-port-call.component.css']
})
export class ActivatePortCallComponent implements OnInit, OnDestroy {

  portCallId: number;

  voyagesIsPristine = true;
  detailsDataIsPristine = true;
  shipStoresDataIsPristine = true;
  cargoDataIsPristine = true;
  passengerDataIsPristine: Boolean = true;
  crewDataIsPristine: Boolean = true;
  securityIsPristine = true;

  reportingShipStoresIsChecked = false;
  cargoIsChecked = false;
  passengerListIsChecked = false;
  crewListIsChecked = false;
  securityIsChecked = false;


  voyagesErrors = false;

  crewPassengersAndDimensionsModel: any;
  purposeModel: any;
  reportingModel: any;
  otherPurposeName = '';
  detailsMeta: FormMetaData;
  detailsModel: PortCallDetailsModel = new PortCallDetailsModel();
  cargoData: ConsignmentModel[];

  shipStoresList: any[];
  passengerList: PersonOnBoardModel[];
  crewList: PersonOnBoardModel[];

  portCallStatus: string;
  portCallIsDraft = false;
  STATUS_DRAFT = 'Draft';

  numberOfCrewError = false;
  numberOfPassengersError = false;

  voyagesIsPristineSubscription: Subscription;
  voyagesErrorSubscription: Subscription;
  detailsPristineSubscription: Subscription;
  portCallIdDataSubscription: Subscription;
  crewPassengersAndDimensionsDataSubscription: Subscription;
  cargoDescriptionSubscription: Subscription;
  reportingForThisPortCallDataSubscription: Subscription;
  portCallPurposeDataSubscription: Subscription;
  otherPurposeNameSubscription: Subscription;
  crewPassengersAndDimensionsMetaSubscription: Subscription;
  portCallStatusDataSubscription: Subscription;
  shipStoresDataSubscription: Subscription;
  shipStoresIsPristineSubscription: Subscription;
  shipStoresIsCheckedSubscription: Subscription;
  cargoDataSubscription: Subscription;
  cargoIsPristineSubscription: Subscription;
  passengerDataSubscription: Subscription;
  passengerListIsPristineSubscription: Subscription;
  passengerListIsCheckedSubscription: Subscription;
  crewDataSubscription: Subscription;
  crewListIsPristineSubscription: Subscription;
  crewListIsCheckedSubscription: Subscription;
  securityIsCheckedSubscription: Subscription;
  securityIsPristineSubscription: Subscription;
  allowSavingSecuritySubscription: Subscription;
  allowSavingSecurity = false;

  constructor(
    private contentService: ContentService,
    private portCallService: PortCallService,
    private portCallDetailsService: PortCallDetailsService,
    private shipStoresService: FalShipStoresService,
    private cargoService: FalCargoService,
    private modalService: NgbModal,
    private personOnBoardService: PortCallFalPersonOnBoardService,
    private securityService: FalSecurityService
  ) { }

  ngOnInit() {
    //
    // Voyages
    //
    this.voyagesIsPristineSubscription = this.portCallService.voyagesIsPristine$.subscribe(
      pristineData => {
        this.voyagesIsPristine = pristineData;
      }
    );
    this.voyagesErrorSubscription = this.portCallService.voyagesErrors$.subscribe(
      hasError => {
        this.voyagesErrors = hasError;
      }
    );
    //
    // Details
    //
    this.detailsPristineSubscription = this.portCallDetailsService.detailsPristine$.subscribe(detailsDataIsPristine => {
      this.detailsDataIsPristine = detailsDataIsPristine;
    });
    this.portCallIdDataSubscription = this.portCallService.portCallIdData$.subscribe(
      portCallIdData => {
        if (portCallIdData) {
          this.portCallId = portCallIdData;
        }
      }
    );
    this.crewPassengersAndDimensionsDataSubscription = this.portCallDetailsService.crewPassengersAndDimensionsData$.subscribe(
      cpadData => {
        if (cpadData) {
          this.crewPassengersAndDimensionsModel = cpadData;
        }
      }
    );
    this.cargoDescriptionSubscription = this.portCallDetailsService.cargoBriefDescriptionData$.subscribe(
      cargoDescriptionData => {
        this.detailsModel.cargoBriefDescription = cargoDescriptionData;
      }
    );
    this.reportingForThisPortCallDataSubscription = this.portCallDetailsService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData) {
          this.reportingModel = reportingData;
          this.cargoIsChecked = this.reportingModel.reportingCargo || false;
        }
      }
    );
    this.portCallPurposeDataSubscription = this.portCallDetailsService.portCallPurposeData$.subscribe(purposeData => {
      if (purposeData) {
        this.purposeModel = purposeData;
      }
    });
    this.otherPurposeNameSubscription = this.portCallDetailsService.otherPurposeName$.subscribe(otherPurposeNameData => {
      if (otherPurposeNameData) {
        this.otherPurposeName = otherPurposeNameData;
      }
    });
    this.crewPassengersAndDimensionsMetaSubscription = this.portCallDetailsService.crewPassengersAndDimensionsMeta$.subscribe(
      metaData => {
        this.detailsMeta = metaData;
      }
    );
    //
    // Ship Stores
    //
    this.shipStoresDataSubscription = this.shipStoresService.shipStoresList$.subscribe(
      shipStoresData => {
        if (shipStoresData) {
          this.shipStoresList = shipStoresData;
        }
      }
    );
    this.shipStoresIsPristineSubscription = this.shipStoresService.dataIsPristine$.subscribe(
      pristineData => {
        this.shipStoresDataIsPristine = pristineData;
      }
    );
    this.shipStoresIsCheckedSubscription = this.shipStoresService.reportingShipStoresIsChecked$.subscribe(
      isCheckedData => {
        this.reportingShipStoresIsChecked = isCheckedData;
      }
    );
    //
    // Cargo
    //
    this.cargoDataSubscription = this.cargoService.consignmentListData$.subscribe(
      cargoData => {
        this.cargoData = cargoData;
      }
    );
    this.cargoIsPristineSubscription = this.cargoService.dataIsPristine$.subscribe(
      pristineData => {
        this.cargoDataIsPristine = pristineData;
      }
    );
    //
    // Passenger List
    //
    this.passengerDataSubscription = this.personOnBoardService.passengerList$.subscribe(
      passengerData => {
        this.passengerList = passengerData;
        if (this.passengerList.length !== this.crewPassengersAndDimensionsModel.numberOfPassengers) {
          this.numberOfPassengersError = true;
        } else {
          this.numberOfPassengersError = false;
        }
      }
    );
    this.passengerListIsPristineSubscription = this.personOnBoardService.passengerDataIsPristine$.subscribe(
      pristineData => {
        this.passengerDataIsPristine = pristineData;
      }
    );
    this.passengerListIsCheckedSubscription = this.personOnBoardService.passengerListIsChecked$.subscribe(
      isChecked => {
        this.passengerListIsChecked = isChecked;
      }
    );
    //
    // Crew List
    //
    this.crewDataSubscription = this.personOnBoardService.crewList$.subscribe(
      crewData => {
        this.crewList = crewData;
        if (this.crewList.length !== this.crewPassengersAndDimensionsModel.numberOfCrew) {
          this.numberOfCrewError = true;
        } else {
          this.numberOfCrewError = false;
        }
      }
    );
    this.crewListIsPristineSubscription = this.personOnBoardService.crewDataIsPristine$.subscribe(
      pristineData => {
        this.crewDataIsPristine = pristineData;
      }
    );
    this.crewListIsCheckedSubscription = this.personOnBoardService.crewListIsChecked$.subscribe(
      isChecked => {
        this.crewListIsChecked = isChecked;
      }
    );

    //
    // Security
    //
    this.securityIsPristineSubscription = this.securityService.pristineData$.subscribe(
      pristineData => {
        this.securityIsPristine = pristineData;
      }
    );
    this.securityIsCheckedSubscription = this.securityService.securityIsCheckedData$.subscribe(
      isChecked => {
        this.securityIsChecked = isChecked;
      }
    );
    this.allowSavingSecuritySubscription = this.securityService.allowSavingData$.subscribe(
      allowSavingData => {
        this.allowSavingSecurity = allowSavingData;
      }
    );


    //
    // Status
    //
    this.portCallStatusDataSubscription = this.portCallService.portCallStatusData$.subscribe(statusData => {
      if (statusData) {
        if (statusData === this.STATUS_DRAFT) {
          this.portCallIsDraft = true;
        } else {
          this.portCallIsDraft = false;
        }
        this.portCallStatus = statusData;
      }
    });
  }

  ngOnDestroy() {
    this.voyagesIsPristineSubscription.unsubscribe();
    this.voyagesErrorSubscription.unsubscribe();
    this.detailsPristineSubscription.unsubscribe();
    this.portCallIdDataSubscription.unsubscribe();
    this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
    this.cargoDescriptionSubscription.unsubscribe();
    this.reportingForThisPortCallDataSubscription.unsubscribe();
    this.portCallPurposeDataSubscription.unsubscribe();
    this.otherPurposeNameSubscription.unsubscribe();
    this.crewPassengersAndDimensionsMetaSubscription.unsubscribe();
    this.portCallStatusDataSubscription.unsubscribe();
    this.shipStoresDataSubscription.unsubscribe();
    this.shipStoresIsCheckedSubscription.unsubscribe();
    this.shipStoresIsPristineSubscription.unsubscribe();
    this.cargoDataSubscription.unsubscribe();
    this.cargoIsPristineSubscription.unsubscribe();
    this.passengerDataSubscription.unsubscribe();
    this.passengerListIsCheckedSubscription.unsubscribe();
    this.passengerListIsPristineSubscription.unsubscribe();
    this.crewDataSubscription.unsubscribe();
    this.crewListIsCheckedSubscription.unsubscribe();
    this.crewListIsPristineSubscription.unsubscribe();
  }

  saveVoyages() {
    alert('Saving voyages from this page is not yet implemented. Please return to the Voyages page to save your changes.');
  }

  saveDetails() {
    // this.detailsModel.portCallDetailsId = this.portCallId;
    this.detailsModel.portCallId = this.portCallId;
    this.detailsModel.numberOfCrew = this.crewPassengersAndDimensionsModel.numberOfCrew;
    this.detailsModel.numberOfPassengers = this.crewPassengersAndDimensionsModel.numberOfPassengers;
    this.detailsModel.airDraught = this.crewPassengersAndDimensionsModel.airDraught;
    this.detailsModel.actualDraught = this.crewPassengersAndDimensionsModel.actualDraught;
    this.detailsModel.reportingCargo = this.reportingModel.reportingCargo;
    this.detailsModel.reportingCrew = this.reportingModel.reportingCrew;
    this.detailsModel.reportingDpg = this.reportingModel.reportingDpg;
    this.detailsModel.reportingPax = this.reportingModel.reportingPax;
    this.detailsModel.reportingSecurity = this.reportingModel.reportingSecurity;
    this.detailsModel.reportingShipStores = this.reportingModel.reportingShipStores;
    this.portCallService.saveDetails(
      this.detailsModel,
      this.purposeModel,
      this.otherPurposeName
    ).subscribe(detailsResponse => {
      console.log('Successfully saved port call details:', detailsResponse);
      this.portCallDetailsService.setPortCallDetailsId(detailsResponse.portCallDetailsId);
      this.portCallService.savePurposesForPortCall(this.portCallId, this.purposeModel, this.otherPurposeName);
    });
  }

  saveShipStores() {
    const formattedShipStoresList = this.shipStoresService.formatShipStores(this.shipStoresList);
    this.shipStoresService.saveShipStores(formattedShipStoresList, this.portCallId).subscribe(
      res => {
        this.shipStoresService.setDataIsPristine(true);
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  saveCargo() {
    const formattedCargoData = this.cargoService.formatConsignment(this.cargoData);
    this.cargoService.saveConsignmentListForPortCall(formattedCargoData, this.portCallId).subscribe(
      res => {
        this.cargoService.setDataIsPristine(true);
        console.log('Cargo successfully saved.\n', res);
      }, error => {
        console.error(error);
      }
    );
  }

  savePassengerList() {
    this.personOnBoardService.updatePersonOnBoardList(this.portCallId, this.passengerList, 2).subscribe(
      res => {
        this.personOnBoardService.setPassengerDataIsPristine(true);
        console.log('Passengers successfully saved.\n', res);
      }, error => {
        console.log(error);
      }
    );
  }

  saveCrewList() {
    this.personOnBoardService.updatePersonOnBoardList(this.portCallId, this.crewList, 1).subscribe(
      res => {
        this.personOnBoardService.setCrewDataIsPristine(true);
        console.log('Crew list successfully saved.\n', res);
      }, error => {
        console.log(error);
      }
    );
  }

  send() {
    this.portCallService
      .updatePortCallStatusAwaitingClearance(this.portCallId)
      .subscribe(
        updateStatusResponse => {
          console.log('Status successfully updated.');
          this.openConfirmationModal(
            ConfirmationModalComponent.TYPE_SUCCESS,
            RESULT_SUCCES
          );
        },
        error => {
          console.log(error);
          this.openConfirmationModal(
            ConfirmationModalComponent.TYPE_FAILURE,
            RESULT_FAILURE
          );
        }
      );
  }

  goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }

  private openConfirmationModal(modalType: string, bodyText: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.modalType = modalType;
    modalRef.componentInstance.bodyText = bodyText;
    modalRef.result.then(
      result => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) {
          this.goBack();
        }
      },
      reason => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) {
          this.goBack();
        }
      }
    );
  }
}
