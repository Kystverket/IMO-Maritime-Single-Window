import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { PurposeService } from '../../../../../../shared/services/purpose.service';

const OTHER_PURPOSE_ID = "100249";

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css'],
  providers: [PurposeService]
})
export class PurposeComponent implements OnInit {

  selectedPurposes: any;
  purposeList: any[];
  amountOfPurposes: number = 0;

  otherPurposeSelected: boolean = false;
  otherPurposeName: string = "";

  constructor(private purposeService: PurposeService, private portCallService: PortCallService) { }

  ngOnInit() {
    this.purposeService.getPurposes().subscribe(
      data => {
        this.purposeList = data;
        this.amountOfPurposes = Object.keys(this.purposeList).length;
      }
    );
    this.portCallService.portCallPurposeData$.subscribe(
      data => {
        if (data != null) {
          this.selectedPurposes = data;
          this.otherPurposeSelected = this.selectedPurposes.includes(OTHER_PURPOSE_ID);      
        }
      }
    );
    this.portCallService.otherPurposeName$.subscribe(
      data => {
        this.otherPurposeName = data;
      }
    );
  }

  purposeSelected() {
    this.otherPurposeSelected = this.selectedPurposes.includes(OTHER_PURPOSE_ID);

    this.portCallService.setPortCallPurposeData(this.selectedPurposes);
    if (this.otherPurposeSelected) {
      this.setOtherPurposeName();
    }
  }

  setOtherPurposeName() {
    this.portCallService.setOtherPurposeName(this.otherPurposeName);
  }
}
