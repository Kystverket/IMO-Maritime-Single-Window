import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { PortCallStatusTypes } from 'app/shared/constants/port-call-status-types';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { PortCallModel } from 'app/shared/models/port-call-model';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { EtaEtdDateTime } from 'app/shared/interfaces/eta-etd-date-time.interface';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

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
  dateTimeFound = false;

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
      if (etaEtdData && etaEtdData.eta !== null && etaEtdData.etd !== null) {
        this.dateTimeFound = true;
        if (etaEtdData != null) {
          this.etaEtdModel = {
            eta: {
              date: new NgbDate(etaEtdData.eta.year, etaEtdData.eta.month, etaEtdData.eta.day),
              time: new NgbTime(etaEtdData.eta.hour, etaEtdData.eta.minute, 0)
            },
            etd: {
              date: new NgbDate(etaEtdData.etd.year, etaEtdData.etd.month, etaEtdData.etd.day),
              time: new NgbTime(etaEtdData.etd.hour, etaEtdData.etd.minute, 0)
            }
          };
        }
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
      this.etaEtdModel.eta.date.year,
      this.etaEtdModel.eta.date.month - 1,
      this.etaEtdModel.eta.date.day,
      this.etaEtdModel.eta.time.hour,
      this.etaEtdModel.eta.time.minute
    );
    const etd = new Date(
      this.etaEtdModel.etd.date.year,
      this.etaEtdModel.etd.date.month - 1,
      this.etaEtdModel.etd.date.day,
      this.etaEtdModel.etd.time.hour,
      this.etaEtdModel.etd.time.minute
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
