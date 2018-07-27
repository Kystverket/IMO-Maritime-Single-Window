import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PurposeService } from 'app/shared/services/purpose.service';
import { Subscription } from 'rxjs/Subscription';

const OTHER_PURPOSE_ID = 100249;

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrls: ['./purpose.component.css'],
  providers: [PurposeService]
})
export class PurposeComponent implements OnInit, OnDestroy {

  selectedPurposes = [];
  purposeList: any[] = [];
  amountOfPurposes = 0;

  otherPurposeSelected = false;
  otherPurposeName = '';

  getPurposesSubscription: Subscription;
  portCallPurposeDataSubscription: Subscription;
  otherPurposeNameSubscription: Subscription;

  constructor(private purposeService: PurposeService, private portCallService: PortCallService) { }

  ngOnInit() {
    this.getPurposesSubscription = this.purposeService.getPurposes().subscribe(
      data => {
        this.purposeList = data;
        this.amountOfPurposes = Object.keys(this.purposeList).length;
      }
    );
    this.portCallPurposeDataSubscription = this.portCallService.portCallPurposeData$.subscribe(
      data => {
        if (data) {
          this.selectedPurposes = data;
          this.otherPurposeSelected = (this.selectedPurposes.find(p => p.portCallPurposeId === OTHER_PURPOSE_ID) != null);
        }
      }
    );
    this.otherPurposeNameSubscription = this.portCallService.otherPurposeName$.subscribe(
      data => {
        this.otherPurposeName = data;
      }
    );
  }

  ngOnDestroy() {
    this.getPurposesSubscription.unsubscribe();
    this.portCallPurposeDataSubscription.unsubscribe();
    this.otherPurposeNameSubscription.unsubscribe();
  }

  purposeSelected() {
    this.portCallService.setPortCallPurposeData(this.selectedPurposes);
    console.log('SELECTED: ', this.selectedPurposes);
    if (this.otherPurposeSelected) {
      this.setOtherPurposeName();
    }
  }

  setOtherPurposeName() {
    this.portCallService.setOtherPurposeName(this.otherPurposeName);
  }
}
