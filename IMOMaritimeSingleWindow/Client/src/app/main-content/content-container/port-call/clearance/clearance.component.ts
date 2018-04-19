import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentService } from '../../../../shared/services/content.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private contentService: ContentService, private modalService: NgbModal) { }

  ngOnInit() {}

  showWarningBox(content: any, clearance: boolean) {
    this.clearanceModel.clearance = clearance;
    this.modalService.open(content);
  }

  saveClearance(clearanceModel: any) {
    console.log(clearanceModel);
    console.log("not yet implemented ;)");
    this.goBack();
  }

  goBack() {
    this.contentService.setContent("Port Call");
  }

}
