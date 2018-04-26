import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ContentService } from '../../../../../shared/services/content.service';
import { PortCallService } from '../../../../../shared/services/port-call.service';

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

  private setContent(content: string) {
    this.portCallService.wipeDetailsData();
    this.portCallService.setPortCall(this.rowData.overviewModel);
    this.portCallService.setClearance(this.rowData.overviewModel.clearanceList[0]); //hmmm
    try {
      this.portCallService.getDetailsByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(
        details => {
          if (details) {
            this.portCallService.setDetails(details);
          } else {
            console.log("Empty details.");
          }
        },
        error => {
          console.log("Get details error: ", error);
        },

      );

      this.portCallService.getPurposeByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(
        purposeData => {
          if (purposeData) {
            if (purposeData.find(p => p.name == "Other")) {
              this.portCallService.getOtherName(this.rowData.overviewModel.portCall.portCallId).subscribe(
                otherNameData => {
                  this.portCallService.setOtherPurposeName(otherNameData);
                  this.portCallService.setPortCallPurposeData(purposeData);
                  this.contentService.setContent(content);

                }
              );
            } else {
              this.portCallService.setPortCallPurposeData(purposeData);
              this.contentService.setContent(content);

            }
          } else {
            console.log("Empty purpose.");
          }
        },
        error => {
          console.log("Get purpose error: ", error);
        }
      );

    } catch (err) {
      console.log(err);
    }
  }

}