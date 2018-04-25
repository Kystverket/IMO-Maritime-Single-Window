import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentService } from '../../../../shared/services/content.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortCallService } from '../../../../shared/services/port-call.service';
import { ClearanceModel } from '../../../../shared/models/clearance-model';

@Component({
  selector: 'app-clearance',
  templateUrl: './clearance.component.html',
  styleUrls: ['./clearance.component.css']
})
export class ClearanceComponent implements OnInit {

  clearanceModel: ClearanceModel = new ClearanceModel();

  clearanceList: any[] = [];

  givingClearance: boolean;

  constructor(private contentService: ContentService, private modalService: NgbModal, private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.overviewData$.subscribe(
      data => {
        this.clearanceList = data.clearanceList;
        this.clearanceList.forEach(clearance => console.log(clearance));
      }
    )
    this.portCallService.clearanceData$.subscribe(
      data => {
        this.clearanceModel = data;
      }
    );
  }

  showWarningBox(content: any, clearance: boolean) {
    this.givingClearance = clearance;
    this.modalService.open(content);
  }

  saveClearance() {    
    this.clearanceModel.cleared = this.givingClearance;
    console.log(this.clearanceModel);
    this.portCallService.saveClearance(this.clearanceModel);
  }

  goBack() {
    this.contentService.setContent("Port Call");
  }

}
