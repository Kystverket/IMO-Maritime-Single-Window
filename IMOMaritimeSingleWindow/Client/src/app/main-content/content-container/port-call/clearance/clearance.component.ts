import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ClearanceModel } from 'app/shared/models/';
import { ContentService, PortCallService, ShipService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-clearance',
  templateUrl: './clearance.component.html',
  styleUrls: ['./clearance.component.css']
})
export class ClearanceComponent implements OnInit, OnDestroy {
  clearanceModel: ClearanceModel = new ClearanceModel();

  backButtonIcon = 'white/left-arrow';

  clearanceList: any[] = [];

  givingClearance: boolean;
  clearanceText;

  clearanceListSubscription: Subscription;
  shipDataSubscription: Subscription;

  constructor(
    private contentService: ContentService,
    private modalService: NgbModal,
    private portCallService: PortCallService,
    private shipService: ShipService
  ) { }

  ngOnInit() {
    this.clearanceListSubscription = this.portCallService.clearanceListData$.subscribe(data => {
      if (data) {
        this.clearanceList = data;
        this.portCallService.clearanceData$.subscribe(clearanceUser => {
          if (clearanceUser) {
            this.clearanceModel = this.clearanceList.find(
              cl => cl.organizationId === clearanceUser.organizationId
            );
            this.clearanceText = this.clearanceModel.remark;
          }
        });
      }
    });

    this.shipDataSubscription = this.portCallService.shipData$.subscribe(shipResult => {
      this.shipService.setShipData(shipResult);
    });
  }

  ngOnDestroy() {
    this.clearanceListSubscription.unsubscribe();
    this.shipDataSubscription.unsubscribe();
  }

  showWarningBox(content: any, clearance: boolean) {
    this.givingClearance = clearance;
    this.modalService.open(content);
  }

  saveClearance() {
    this.clearanceModel.portCall = null;
    // this.clearanceModel.organization = null;
    this.clearanceModel.remark = this.clearanceText;
    this.clearanceModel.cleared = this.givingClearance;
    this.portCallService.saveClearance(this.clearanceModel);

    if (this.clearanceModel.cleared) {
      this.portCallService.getClearanceListForPortCall(this.clearanceModel.portCallId).subscribe(
        result => {
          const clearances = result;
          let allCleared = true;
          clearances.forEach(clearance => {
            if (!clearance.cleared && clearance.organizationPortCallId !== this.clearanceModel.organizationPortCallId) {
              allCleared = false;
            }
          });
          console.log('All cleared: ', allCleared);
          if (allCleared) {
            this.portCallService.updatePortCallStatusCleared(this.clearanceModel.portCallId).subscribe(
              res => {
                console.log('Status set to cleared.');
              },
              err => console.log(err)
            );
          }
        }
      );
    } else {
      console.log('Setting status to AC...');
      this.portCallService.updatePortCallStatusAwaitingClearance(this.clearanceModel.portCallId).subscribe(
        res => {
          console.log('Status set to awaiting clearance');
        },
        err => console.log(err)
      );
    }
  }

  goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }
}
