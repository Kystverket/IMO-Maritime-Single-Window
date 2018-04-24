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

  clearanceModel: any = {
    clearance: null,
    remarks: null
  }

  clearanceList: any[] = [];


  constructor(private contentService: ContentService, private modalService: NgbModal, private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.overviewData$.subscribe(
      data => {
        this.clearanceList = data.clearanceList;
        this.clearanceList.forEach(clearance => console.log(clearance));
      }
    )
  }

  showWarningBox(content: any, clearance: boolean) {
    this.clearanceModel.clearance = clearance;
    this.modalService.open(content);
  }

  saveClearance(clearanceModel: any) {
    console.log(clearanceModel);
    this.portCallService.saveClearance(clearanceModel);
  }

  goBack() {
    this.contentService.setContent("Port Call");
  }

}
