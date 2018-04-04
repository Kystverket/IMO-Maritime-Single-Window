import { Component, OnInit } from '@angular/core';
import { PurposeService } from './purpose.service';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css'],
  providers: [PurposeService]
})
export class PurposeComponent implements OnInit {

  selectedPurposes: any;
  purposeList: any[];

  otherPurposeSelected = false;

  constructor(private purposeService: PurposeService, private portCallService: PortCallService) { }

  ngOnInit() {
    this.purposeService.getPurposes().subscribe(
      data => this.purposeList = data
    );
    this.portCallService.portCallPurposeData$.subscribe(
      data => this.selectedPurposes = data
    );
  }

  purposeSelected() {
    this.otherPurposeSelected = this.selectedPurposes.includes("Other");
  }

}
