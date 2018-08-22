import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { LocationModel } from 'app/shared/models/location-model';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';
import { Subscription } from 'rxjs/Subscription';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';

const RESULT_SUCCES = 'This port call has been activated, and is now awaiting clearance.';
const RESULT_FAILURE = 'There was a problem when trying to activate this port call. Please try again later.';

@Component({
  selector: 'app-activate-port-call',
  templateUrl: './activate-port-call.component.html',
  styleUrls: ['./activate-port-call.component.css']
})
export class ActivatePortCallComponent implements OnInit, OnDestroy {

  portCallId: number;

  prevAndNextPortCallDataIsPristine = true;
  detailsDataIsPristine = true;
  shipStoresDataIsPristine = true;
  cargoDataIsPristine = true;
  passengerDataIsPristine: Boolean = true;
  crewDataIsPristine: Boolean = true;

  reportingShipStoresIsChecked = false;
  cargoIsChecked = false;
  passengerListIsChecked = false;
  crewListIsChecked = false;

  voyagesMeta: FormMetaData;

  crewPassengersAndDimensionsModel: any;
  purposeModel: any;
  reportingModel: any;
  otherPurposeName = '';
  detailsMeta: FormMetaData;
  detailsModel: PortCallDetailsModel = new PortCallDetailsModel();
  cargoData: ConsignmentModel[];

  prevLocationModel: LocationModel;
  nextLocationModel: LocationModel;
  etdModel: DateTime = null;
  etaModel: DateTime = null;

  shipStoresList: any[];
  passengerList: PersonOnBoardModel[];
  crewList: PersonOnBoardModel[];

  portCallStatus: string;
  portCallIsDraft = false;
  STATUS_DRAFT = 'Draft';

  voyagesIsPristineSubscription: Subscription;
  prevPortOfCallDataSubscription: Subscription;
  nextPortOfCallDataSubscription: Subscription;
  prevPortOfCallEtdSubscription: Subscription;
  nextPortOfCallEtaSubscription: Subscription;
  voyagesMetaSubscription: Subscription;
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

  constructor(
    private contentService: ContentService,
    private portCallService: PortCallService,
    private portCallDetailsService: PortCallDetailsService,
    private prevAndNextPocService: PrevAndNextPocService,
    private shipStoresService: FalShipStoresService,
    private cargoService: FalCargoService,
    private modalService: NgbModal,
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) { }

  ngOnInit() {
    //
    // Voyages
    //
    this.voyagesIsPristineSubscription = this.prevAndNextPocService.dataIsPristine$.subscribe(
      pristineData => {
        this.prevAndNextPortCallDataIsPristine = pristineData;
      }
    );
    this.prevPortOfCallDataSubscription = this.prevAndNextPocService.prevPortOfCallData$.subscribe(
      prevLocationData => {
        this.prevLocationModel = prevLocationData;
      }
    );
    this.nextPortOfCallDataSubscription = this.prevAndNextPocService.nextPortOfCallData$.subscribe(
      nextLocationData => {
        this.nextLocationModel = nextLocationData;
      }
    );
    this.prevPortOfCallEtdSubscription = this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(
      etdData => {
        if (etdData) {
          const dateTime = new Date(etdData);
          this.etdModel = {
            date: new NgbDate(dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
            time: new NgbTime(dateTime.getHours(), dateTime.getMinutes(), 0)
          };
        } else {
          this.etdModel = null;
        }
      }
    );
    this.nextPortOfCallEtaSubscription = this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(
      etaData => {
        if (etaData) {
          const dateTime = new Date(etaData);
          this.etaModel = {
            date: new NgbDate(dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
            time: new NgbTime(dateTime.getHours(), dateTime.getMinutes(), 0)
          };
        } else {
          this.etaModel = null;
        }
      }
    );
    this.voyagesMetaSubscription = this.prevAndNextPocService.prevAndNextPortOfCallMeta$.subscribe(
      metaData => {
        if (metaData) {
          this.voyagesMeta = metaData;
        }
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
          console.log(reportingData);
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
        console.log(isChecked);
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
    this.prevPortOfCallDataSubscription.unsubscribe();
    this.nextPortOfCallDataSubscription.unsubscribe();
    this.prevPortOfCallEtdSubscription.unsubscribe();
    this.nextPortOfCallEtaSubscription.unsubscribe();
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

  savePrevAndNextPortCall() {
    const prevDate = new Date(this.etdModel.date.year, this.etdModel.date.month - 1, this.etdModel.date.day, this.etdModel.time.hour, this.etdModel.time.minute);
    const nextDate = new Date(this.etaModel.date.year, this.etaModel.date.month - 1, this.etaModel.date.day, this.etaModel.time.hour, this.etaModel.time.minute);
    this.portCallService.savePrevAndNextPortCall(this.portCallId, this.prevLocationModel, this.nextLocationModel, prevDate, nextDate);
  }

  saveDetails() {
    this.detailsModel.portCallDetailsId = this.portCallId;
    this.detailsModel.portCallId = this.portCallId;
    this.detailsModel.numberOfCrew = this.crewPassengersAndDimensionsModel.numberOfCrew;
    this.detailsModel.numberOfPassengers = this.crewPassengersAndDimensionsModel.numberOfPassengers;
    this.detailsModel.airDraught = this.crewPassengersAndDimensionsModel.airDraught;
    this.detailsModel.actualDraught = this.crewPassengersAndDimensionsModel.actualDraught;
    this.detailsModel.reportingCargo = this.reportingModel.reportingCargo;
    this.detailsModel.reportingCrew = this.reportingModel.reportingCrew;
    this.detailsModel.reportingDpg = this.reportingModel.reportingDpg;
    this.detailsModel.reportingPax = this.reportingModel.reportingPax;
    this.detailsModel.reportingShipStores = this.reportingModel.reportingShipStores;
    this.portCallService.saveDetails(
      this.detailsModel,
      this.purposeModel,
      this.otherPurposeName
    );
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
