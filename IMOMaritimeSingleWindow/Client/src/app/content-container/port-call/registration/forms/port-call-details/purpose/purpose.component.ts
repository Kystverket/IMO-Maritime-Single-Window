import { Component, OnInit } from '@angular/core';
import { PurposeService } from './purpose.service';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

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
  otherPurposeName: string;

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
        this.selectedPurposes = data;
      }
    );
  }

  purposeSelected() {
    this.otherPurposeSelected = this.selectedPurposes.includes(OTHER_PURPOSE_ID);
  }

  getPurposeName(id: number) {
    let purpose = this.purposeList.find(p => p.portCallPurposeId == id);
    if (purpose.portCallPurposeId != OTHER_PURPOSE_ID) {
      return purpose != null ? purpose.name : null;
    } else {
      return "Other: \"" + this.otherPurposeName + "\"";
    }
    
  }

}
