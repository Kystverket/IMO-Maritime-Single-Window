import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ContentService } from '../../../../../shared/services/content.service';
import { PortCallService } from '../../../../../shared/services/port-call.service';
import { PortCallDetailsModel } from '../../../../../shared/models/port-call-details-model';

@Component({
  selector: 'app-button-row',
  templateUrl: './button-row.component.html',
  styleUrls: ['./button-row.component.css']
})
export class ButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(private contentService: ContentService, private portCallService: PortCallService) { }

  ngOnInit() {
  }

  onViewClick() {
    this.setContent('View Port Call');
  }

  onEditClick() {
    this.setContent('Register Port Call');
  }

  onClearanceClick() {
    this.setContent('Port Call Clearance');
  }

  private setContent(content: string) {  // NEW CLEANUP
    this.setPortCall(content);
  }

  // NEW CLEANUP - Set methods
  setPortCall(content) {
    this.portCallService.setPortCall(this.rowData.overviewModel);
    this.setPurpose(content);
  }
  setPurpose(content) {
    this.portCallService.getPurposeByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(
      purposeData => {
        if (purposeData) {
          if (purposeData.find(p => p.name == "Other")) {
            this.portCallService.getOtherName(this.rowData.overviewModel.portCall.portCallId).subscribe(
              otherNameData => {
                this.portCallService.setOtherPurposeName(otherNameData);
                this.portCallService.setPortCallPurposeData(purposeData);
                this.setDetails(content)
              }
            );
          } else {
            this.portCallService.setPortCallPurposeData(purposeData);
            this.setDetails(content);
          }
        } else {
          console.log("No purpose information has been registered for this port call.");
        }
      },
      error => {
        console.log("Get Purpose Error: ", error);
      }
    );
  }
  setDetails(content) {
    this.portCallService.getDetailsByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(
      detailsData => {
        if (detailsData) {
          this.portCallService.setDetails(detailsData)
        }
        else { 
          console.log("No details information has been registered for this port call.");
          let portCallDetails = new PortCallDetailsModel();
          portCallDetails.portCallDetailsId = this.rowData.overviewModel.portCall.portCallId;
          portCallDetails.portCallId = this.rowData.overviewModel.portCall.portCallId;
          this.portCallService.setDetails(portCallDetails);
        }
        this.contentService.setContent(content);        
      
      },
      error => {
        console.log("Get Details Error: ", error);
      }
    );
  }

}
