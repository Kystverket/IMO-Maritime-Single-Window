import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { PortCallStatusTypes } from 'app/shared/constants/port-call-status-types';
import { EtaEtdDateTime } from 'app/shared/interfaces/eta-etd-interface';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { PortCallModel } from 'app/shared/models/port-call-model';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';

const RESULT_SUCCESS =
  'The port call draft was successfully created. You will now be taken to the wizard for ' +
  'registering the rest of the information and activating the port call.';
const RESULT_FAILURE =
  'There was a problem when trying to create the new port call draft. Please try again later.';

@Component({
  selector: 'app-confirm-data',
  templateUrl: './confirm-data.component.html',
  styleUrls: ['./confirm-data.component.css']
})
export class ConfirmDataComponent implements OnInit {
  shipModel: any;
  locationModel: any;
  etaEtdModel: EtaEtdDateTime;
  portCallModel: PortCallModel = new PortCallModel();

  shipFound: boolean;
  locationFound: boolean;
  dateTimeFound: boolean;

  constructor(
    private portCallService: PortCallService,
    private contentService: ContentService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.portCallService.shipData$.subscribe(shipData => {
      if (shipData) {
        this.shipFound = true;
        this.shipModel = shipData;
      } else {
        this.shipFound = false;
      }
    });
    this.portCallService.locationData$.subscribe(locationData => {
      if (locationData) {
        this.locationFound = true;
        this.locationModel = locationData;
      } else {
        this.locationFound = false;
      }
    });
    this.portCallService.etaEtdData$.subscribe(etaEtdData => {
      if (etaEtdData) {
        this.dateTimeFound = this.etaEtdModel = etaEtdData;
      } else {
        this.dateTimeFound = false;
      }
    });
  }

  dateTimeFormat(number: number) {
    if (number <= 9) {
      return '0' + number;
    } else {
      return number;
    }
  }

  startPortCallRegistration() {
    this.portCallModel.shipId = this.shipModel.shipId;
    this.portCallModel.portCallStatusId = PortCallStatusTypes.DRAFT_ID;
    this.portCallModel.locationId = this.locationModel.locationId;
    const eta = new Date(
      this.etaEtdModel.eta.year,
      this.etaEtdModel.eta.month - 1,
      this.etaEtdModel.eta.day,
      this.etaEtdModel.eta.hour,
      this.etaEtdModel.eta.minute
    );
    const etd = new Date(
      this.etaEtdModel.etd.year,
      this.etaEtdModel.etd.month - 1,
      this.etaEtdModel.etd.day,
      this.etaEtdModel.etd.hour,
      this.etaEtdModel.etd.minute
    );
    this.portCallModel.locationEta = eta;
    this.portCallModel.locationEtd = etd;
    this.portCallService.registerNewPortCall(this.portCallModel).subscribe(
      result => {
        console.log('New port call successfully registered.');
        // add list of authorities for clearance
        console.log('Registering authority clearance agencies to port call...');
        this.portCallService.registerClearanceAgenciesForPortCall(result);
        // Set details
        const portCallDetails = new PortCallDetailsModel();
        portCallDetails.portCallId = result.portCallId;
        portCallDetails.portCallDetailsId = result.portCallId;
        this.portCallService.setDetails(portCallDetails);
        this.openConfirmationModal(
          ConfirmationModalComponent.TYPE_SUCCESS,
          RESULT_SUCCESS
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

  private openConfirmationModal(modalType: string, bodyText: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.modalType = modalType;
    modalRef.componentInstance.bodyText = bodyText;
    modalRef.result.then(
      result => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) {
          this.goToPortCallWizard();
        }
      },
      reason => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) {
          this.goToPortCallWizard();
        }
      }
    );
  }

  private goToPortCallWizard() {
    this.contentService.setPortCallForm('Port Call Details');
    this.contentService.setContent(CONTENT_NAMES.REGISTER_PORT_CALL);
  }
}
