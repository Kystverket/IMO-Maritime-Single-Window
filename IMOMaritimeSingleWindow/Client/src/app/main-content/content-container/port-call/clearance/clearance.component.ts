import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ClearanceModel } from 'app/shared/models/clearance-model';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ShipService } from 'app/shared/services/ship.service';

@Component({
  selector: 'app-clearance',
  templateUrl: './clearance.component.html',
  styleUrls: ['./clearance.component.css']
})
export class ClearanceComponent implements OnInit {
  clearanceModel: ClearanceModel = new ClearanceModel();

  clearanceList: any[] = [];

  givingClearance: boolean;
  clearanceText;

  constructor(
    private contentService: ContentService,
    private modalService: NgbModal,
    private portCallService: PortCallService,
    private shipService: ShipService
  ) { }

  ngOnInit() {
    this.portCallService.clearanceListData$.subscribe(data => {
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

    this.portCallService.shipData$.subscribe(shipResult => {
      this.shipService.setShipOverviewData(shipResult);
    });
  }

  showWarningBox(content: any, clearance: boolean) {
    this.givingClearance = clearance;
    this.modalService.open(content);
  }

  saveClearance() {
    this.clearanceModel.remark = this.clearanceText;
    this.clearanceModel.cleared = this.givingClearance;
    this.portCallService.saveClearance(this.clearanceModel);
  }

  goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }
}
