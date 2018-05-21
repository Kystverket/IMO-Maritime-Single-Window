import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CONTENT_NAMES } from '../../../../shared/constants/content-names';
import { ClearanceModel } from '../../../../shared/models/clearance-model';
import { ContentService } from '../../../../shared/services/content.service';
import { PortCallService } from '../../../../shared/services/port-call.service';
import { ShipService } from '../../../../shared/services/ship.service';

@Component({
  selector: 'app-clearance',
  templateUrl: './clearance.component.html',
  styleUrls: ['./clearance.component.css']
})
export class ClearanceComponent implements OnInit {

  clearanceModel: ClearanceModel = new ClearanceModel();

  clearanceList: any[] = [];

  givingClearance: boolean;

  constructor(private contentService: ContentService, private modalService: NgbModal, private portCallService: PortCallService, private shipService: ShipService) { }

  ngOnInit() {
    this.portCallService.clearanceListData$.subscribe(
      data => {
        if (data) {
          this.clearanceList = data;
          this.portCallService.clearanceData$.subscribe(
            clearanceUser => {
              if (clearanceUser) {
                this.clearanceModel = this.clearanceList.find(cl => cl.organizationId === clearanceUser.organizationId);
              }
            }
          )
        }
      }
    );

    this.portCallService.shipData$.subscribe(
      shipResult => {
        this.shipService.setShipOverviewData(shipResult);
      }
    );
  }

  showWarningBox(content: any, clearance: boolean) {
    this.givingClearance = clearance;
    this.modalService.open(content);
  }

  saveClearance() {
    this.clearanceModel.cleared = this.givingClearance;
    this.portCallService.saveClearance(this.clearanceModel);
  }

  goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }

}
