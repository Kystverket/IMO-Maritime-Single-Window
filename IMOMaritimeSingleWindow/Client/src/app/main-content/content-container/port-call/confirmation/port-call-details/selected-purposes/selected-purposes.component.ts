import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { PurposeService } from '../../../../../../shared/services/purpose.service';

const OTHER_PURPOSE_ID = "100249";

@Component({
  selector: 'app-selected-purposes',
  templateUrl: './selected-purposes.component.html',
  styleUrls: ['./selected-purposes.component.css'],
  providers: [PurposeService]
})
export class SelectedPurposesComponent implements OnInit {

  selectedPurposes: any;
  purposeList: any[];

  otherPurposeName: string = "";

  constructor(private purposeService: PurposeService, private portCallService: PortCallService) { }

  ngOnInit() {
    this.purposeService.getPurposes().subscribe(
      data => {
        this.purposeList = data;
      }
    );
    this.portCallService.portCallPurposeData$.subscribe(
      data => {
        if (data != null) {
          this.selectedPurposes = data; 
        }
      }
    );
    this.portCallService.otherPurposeName$.subscribe(
      data => {
        this.otherPurposeName = data;
      }
    );
  }

  getPurposeName(id: number) {
    if (this.purposeList != null) {
      let purpose = this.purposeList.find(p => p.portCallPurposeId == id);
      if (purpose.portCallPurposeId != OTHER_PURPOSE_ID) {
        return purpose != null ? purpose.name : null;
      } else {
        return this.otherPurposeName == "" ? "Other purpose is undefined" : "Other: \"" + this.otherPurposeName + "\"";
      }
    }
  }
}
