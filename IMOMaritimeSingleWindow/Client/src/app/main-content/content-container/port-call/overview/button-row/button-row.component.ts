import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { PortCallClaims } from 'app/shared/constants/port-call-claims';
import { PortCallStatusTypes } from 'app/shared/constants/port-call-status-types';
import { PortCallModel } from 'app/shared/models/port-call-model';
import { AccountService } from 'app/shared/services/account.service';
import { ConstantsService } from 'app/shared/services/constants.service';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallOverviewService } from 'app/shared/services/port-call-overview.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ViewCell } from 'ng2-smart-table';
import { LoadPortCallService } from '../../load-port-call.service';

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

  @Output() portCallCancelled = new EventEmitter<number>();
  @Output() portCallCompleted = new EventEmitter<number>();
  @Output() portCallUncompleted = new EventEmitter<number>();

  overviewData: any[];
  draftOverviewData: any[];
  clearedOverviewData: any[];

  permissions = PortCallClaims.buttonRowPermissions;
  portCallIsDraft = false;
  portCallIsCancelled = false;
  portCallIsAwaitingClearance = false;
  portCallIsCleared = false;
  portCallIsCompleted = false;

  constructor(
    private accountService: AccountService,
    private overviewService: PortCallOverviewService,
    private contentService: ContentService,
    private portCallService: PortCallService,
    private modalService: NgbModal,
    private loadPortCallService: LoadPortCallService
  ) { }

  ngOnInit() {
    this.portCallIsDraft = (this.rowData.overviewModel.status === PortCallStatusTypes.DRAFT);
    this.portCallIsCancelled = (this.rowData.overviewModel.status === PortCallStatusTypes.CANCELLED);
    this.portCallIsAwaitingClearance = (this.rowData.overviewModel.status === PortCallStatusTypes.AWAITING_CLEARANCE);
    this.portCallIsCleared = (this.rowData.overviewModel.status === PortCallStatusTypes.CLEARED);
    this.portCallIsCompleted = (this.rowData.overviewModel.status === PortCallStatusTypes.COMPLETED);
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
    this.setContent(this.rowData.overviewModel.portCall.portCallId, CONTENT_NAMES.VIEW_PORT_CALL);
  }

  onEditClick() {
    this.contentService.setPortCallForm(CONTENT_NAMES.VOYAGES);
    this.setContent(this.rowData.overviewModel.portCall.portCallId, CONTENT_NAMES.REGISTER_PORT_CALL);
  }

  onClearanceClick() {
    this.setContent(this.rowData.overviewModel.portCall.portCallId, CONTENT_NAMES.PORT_CALL_CLEARANCE);
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  onCompletePortCall(portCallId) {
    this.rowData.overviewModel.status = PortCallStatusTypes.COMPLETED;
    this.portCallIsCleared = false;
    this.portCallIsCompleted = true;
    this.overviewData.find(r => r.overviewModel.portCall.portCallId === portCallId).status = PortCallStatusTypes.COMPLETED;
    this.overviewService.setOverviewData(this.overviewData);
    this.portCallCompleted.emit(portCallId);
  }

  onUncompletePortCall(portCallId) {
    this.rowData.overviewModel.status = PortCallStatusTypes.CLEARED;
    this.portCallIsCleared = true;
    this.portCallIsCompleted = false;
    this.overviewData.find(r => r.overviewModel.portCall.portCallId === portCallId).status = PortCallStatusTypes.CLEARED;
    this.overviewService.setOverviewData(this.overviewData);
    this.portCallUncompleted.emit(portCallId);
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
    this.portCallService.updatePortCallStatusCancelled(this.rowData.overviewModel.portCall.portCallId).subscribe(
      result => {
        this.portCallCancelled.emit(pcId);
      }
    );

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

  editAwaitingClearancePortCall() {
    this.portCallService.updatePortCallStatusDraft(this.rowData.overviewModel.portCall.portCallId).subscribe(
      draftResponse => {
        if (draftResponse) {
          const newAwaitingClearanceData = this.overviewData.filter(row => row !== this.rowData);
          const newClearedData = this.clearedOverviewData.filter(row => row !== this.rowData);
          const newDraftData = this.draftOverviewData.filter(row => row !== this.rowData);
          this.rowData.overviewModel.status = PortCallStatusTypes.DRAFT;
          newDraftData.push(this.rowData);
          this.overviewService.setOverviewData(newAwaitingClearanceData);
          this.overviewService.setClearedData(newClearedData);
          this.overviewService.setDraftData(newDraftData);
          this.onEditClick();
        }
      }, error => {
        console.log(error);
      }
    );
  }

  private setContent(portCallId: number, content: string) {
    this.overviewService.setLoadingPortCall(true);
    this.contentService.setLoadingScreen(true, 'portcall.gif', 'Loading');
    this.loadPortCallService.setContent(portCallId, content);
  }
}
