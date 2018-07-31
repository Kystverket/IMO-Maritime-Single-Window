import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewCell } from 'ng2-smart-table';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { PortCallClaims } from 'app/shared/constants/port-call-claims';
import { PortCallStatusTypes } from 'app/shared/constants/port-call-status-types';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { AccountService } from 'app/shared/services/account.service';
import { ConstantsService } from 'app/shared/services/constants.service';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallOverviewService } from 'app/shared/services/port-call-overview.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PrevAndNextPocService } from '../../../../../shared/services/prev-and-next-poc.service';

@Component({
  selector: 'app-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.css'],
  providers: [ConstantsService]
})
export class ButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  overviewData: any[];
  draftOverviewData: any[];
  clearedOverviewData: any[];

  permissions = PortCallClaims.buttonRowPermissions;
  portCallIsDraft = false;
  portCallIsCancelled = false;
  portCallIsActive = false;

  constructor(
    private accountService: AccountService,
    private overviewService: PortCallOverviewService,
    private contentService: ContentService,
    private portCallService: PortCallService,
    private prevAndNextService: PrevAndNextPocService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.portCallIsDraft = (this.rowData.overviewModel.status === PortCallStatusTypes.DRAFT);
    this.portCallIsCancelled = (this.rowData.overviewModel.status === PortCallStatusTypes.CANCELLED);
    this.portCallIsActive = (this.rowData.overviewModel.status === PortCallStatusTypes.ACTIVE);
    this.accountService.userClaimsData$.subscribe(
      userClaims => {
        if (userClaims) {
          // Find user claims where claim type is Port Call
          const userClaimsTypePortCall = userClaims.filter(claim => claim.type === PortCallClaims.TYPE);
          const keys = Object.keys(this.permissions);
          keys.forEach(key => {
            this.permissions[key] = (userClaimsTypePortCall.some(claim => claim.value.toUpperCase() === key.toString().toUpperCase()));
          });
        }
      }
    );

    this.overviewService.overviewData$.subscribe(
      results => {
        if (results) {
          this.overviewData = results;
        }
      }
    );
    this.overviewService.draftOverviewData$.subscribe(
      results => {
        if (results) {
          this.draftOverviewData = results;
        }
      }
    );
    this.overviewService.clearedByUserAgencyOverviewData$.subscribe(
      results => {
        if (results) {
          this.clearedOverviewData = results;
        }
      }
    );
  }

  onViewClick() {
    this.setContent(CONTENT_NAMES.VIEW_PORT_CALL);
  }

  onEditClick() {
    this.contentService.setPortCallForm(CONTENT_NAMES.VOYAGES);
    this.setContent(CONTENT_NAMES.REGISTER_PORT_CALL);
  }

  onClearanceClick() {
    this.setContent(CONTENT_NAMES.PORT_CALL_CLEARANCE);
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  cancelPortCall() {
    const pcId = this.rowData.overviewModel.portCall.portCallId;
    this.rowData.overviewModel.status = PortCallStatusTypes.CANCELLED;
    const htmlStatus = `<div class="text-danger">` + this.rowData.overviewModel.status + `</div>`;
    if (this.overviewData.find(r => r.overviewModel.portCall.portCallId === pcId)) {
      this.overviewData.find(r => r.overviewModel.portCall.portCallId === pcId).status = htmlStatus;
      this.overviewService.setOverviewData(this.overviewData);
    }
    if (this.draftOverviewData.find(r => r.overviewModel.portCall.portCallId === pcId)) {
      this.draftOverviewData.find(r => r.overviewModel.portCall.portCallId === pcId).status = htmlStatus;
      this.overviewService.setDraftData(this.draftOverviewData);
    }
    if (this.clearedOverviewData.find(r => r.overviewModel.portCall.portCallId === pcId)) {
      this.clearedOverviewData.find(r => r.overviewModel.portCall.portCallId === pcId).status = htmlStatus;
      this.overviewService.setClearedData(this.clearedOverviewData);
    }
    this.portCallService.updatePortCallStatusCancelled(this.rowData.overviewModel.portCall.portCallId);

  }

  deletePortCall() {
    this.portCallService.deletePortCallDraft(this.rowData.overviewModel.portCall).subscribe(
      deleteResponse => {
        if (deleteResponse) {
          const newOverviewData = this.overviewData.filter(row => row !== this.rowData);
          const newDraftData = this.draftOverviewData.filter(row => row !== this.rowData);
          const newClearedData = this.clearedOverviewData.filter(row => row !== this.rowData);
          this.overviewService.setOverviewData(newOverviewData);
          this.overviewService.setDraftData(newDraftData);
          this.overviewService.setClearedData(newClearedData);
          console.log(deleteResponse);
        }
      }, error => {
        console.log(error);
      }
    );
  }

  editActivePortCall() {
    this.portCallService.updatePortCallStatusDraft(this.rowData.overviewModel.portCall.portCallId).subscribe(
      draftResponse => {
        if (draftResponse) {
          const newActiveData = this.overviewData.filter(row => row !== this.rowData);
          const newClearedData = this.clearedOverviewData.filter(row => row !== this.rowData);
          const newDraftData = this.draftOverviewData.filter(row => row !== this.rowData);
          this.rowData.overviewModel.status = PortCallStatusTypes.DRAFT;
          newDraftData.push(this.rowData);
          this.overviewService.setOverviewData(newActiveData);
          this.overviewService.setClearedData(newClearedData);
          this.overviewService.setDraftData(newDraftData);
          this.onEditClick();
        }
      }, error => {
        console.log(error);
      }
    );
  }

  private setContent(content: string) {  // NEW CLEANUP
    this.setPortCall(content);
  }

  // NEW CLEANUP - Set methods
  setPortCall(content) {
    this.overviewService.setLoadingPortCall(true);
    this.contentService.setLoadingScreen(true, 'portcall.gif', 'Loading');
    this.overviewService.getOverview(this.rowData.overviewModel.portCall.portCallId).subscribe(
      data => {
        if (data) {
          console.log(data);
          this.portCallService.setPortCall(data);
          this.prevAndNextService.setPrevPortOfCall(data.portCall.previousLocation);
          this.prevAndNextService.setPrevPortOfCallEtd(data.portCall.previousLocationEtd);
          this.prevAndNextService.setNextPortOfCall(data.portCall.nextLocation);
          this.prevAndNextService.setNextPortOfCallEta(data.portCall.nextLocationEta);
          this.prevAndNextService.setDataPristine(true);
          this.setPurpose(content);
        }
      }
    );
  }
  setPurpose(content) {
    this.portCallService.getPurposeByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(
      purposeData => {
        if (purposeData) {
          if (purposeData.find(p => p.name === 'Other')) {
            this.portCallService.getOtherName(this.rowData.overviewModel.portCall.portCallId).subscribe(
              otherNameData => {
                this.portCallService.setOtherPurposeName(otherNameData);
                this.portCallService.setPortCallPurposeData(purposeData);
                this.setDetails(content);
              }
            );
          } else {
            this.portCallService.setPortCallPurposeData(purposeData);
            this.setDetails(content);
          }
        } else {
          console.log('No purpose information has been registered for this port call.');
        }
      },
      error => {
        console.log('Get Purpose Error: ', error);
      }
    );
  }
  setDetails(content) {
    this.portCallService.getDetailsByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(
      detailsData => {
        if (detailsData) {
          this.portCallService.setDetails(detailsData);
        } else {
          console.log('No details information has been registered for this port call.');
          const portCallDetails = new PortCallDetailsModel();
          portCallDetails.portCallDetailsId = this.rowData.overviewModel.portCall.portCallId;
          portCallDetails.portCallId = this.rowData.overviewModel.portCall.portCallId;
          this.portCallService.setDetails(portCallDetails);
        }
        this.contentService.setContent(content);

      },
      error => {
        console.log('Get Details Error: ', error);
      }
    );
  }
}
