import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PrevAndNextPocService } from '../../../../../shared/services/prev-and-next-poc.service';

const RESULT_SUCCES =
  'This port call has been activated, and is now awaiting clearance.';
const RESULT_FAILURE =
  'There was a problem when trying to activate this port call. Please try again later.';

@Component({
  selector: 'app-activate-port-call',
  templateUrl: './activate-port-call.component.html',
  styleUrls: ['./activate-port-call.component.css']
})
export class ActivatePortCallComponent implements OnInit {
  prevAndNextPortCallDataIsPristine = true;

  detailsDataIsPristine = true;
  detailsIdentificationModel: any;
  crewPassengersAndDimensionsModel: any;
  purposeModel: any;
  reportingModel: any;
  otherPurposeName = '';
  detailsMeta: FormMetaData;
  detailsModel: PortCallDetailsModel = new PortCallDetailsModel();

  portCallStatus: string;
  portCallIsActive = false;
  portCallIsDraft = false;
  STATUS_ACTIVE = 'Active';
  STATUS_DRAFT = 'Draft';

  constructor(
    private contentService: ContentService,
    private portCallService: PortCallService,
    private prevAndNextPortCallService: PrevAndNextPocService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.prevAndNextPortCallService.dataIsPristine$.subscribe(
      pristineData => {
        this.prevAndNextPortCallDataIsPristine = pristineData;
      }
    );
    this.portCallService.detailsPristine$.subscribe(detailsDataIsPristine => {
      this.detailsDataIsPristine = detailsDataIsPristine;
    });
    this.portCallService.detailsIdentificationData$.subscribe(
      detailsIdentificationData => {
        if (detailsIdentificationData) {
          this.detailsIdentificationModel = detailsIdentificationData;
        }
      }
    );
    this.portCallService.crewPassengersAndDimensionsData$.subscribe(
      cpadData => {
        if (cpadData) {
          this.crewPassengersAndDimensionsModel = cpadData;
        }
      }
    );
    this.portCallService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData) {
          this.reportingModel = reportingData;
        }
      }
    );
    this.portCallService.portCallPurposeData$.subscribe(purposeData => {
      if (purposeData) {
        this.purposeModel = purposeData;
      }
    });
    this.portCallService.otherPurposeName$.subscribe(otherPurposeNameData => {
      if (otherPurposeNameData) {
        this.otherPurposeName = otherPurposeNameData;
      }
    });
    this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(
      metaData => {
        this.detailsMeta = metaData;
      }
    );
    this.portCallService.portCallStatusData$.subscribe(statusData => {
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

  savePrevAndNextPortCall() {
    this.portCallService.savePrevAndNextPortCall();
  }

  saveDetails() {
    this.detailsModel.portCallDetailsId = this.detailsIdentificationModel.portCallDetailsId;
    this.detailsModel.portCallId = this.detailsIdentificationModel.portCallId;
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
    console.log(
      'META: ',
      this.detailsMeta.valid,
      '\nPRISTINE: ',
      this.detailsDataIsPristine
    );
  }

  send() {
    this.portCallService
      .updatePortCallStatusActive(this.detailsIdentificationModel.portCallId)
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
