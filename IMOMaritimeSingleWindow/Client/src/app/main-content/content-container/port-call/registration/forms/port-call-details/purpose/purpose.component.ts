import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
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

  constructor(private purposeService: PurposeService, private portCallDetailsService: PortCallDetailsService) { }

  ngOnInit() {
    this.getPurposesSubscription = this.purposeService.getPurposes().subscribe(
      data => {
        this.purposeList = data;
        this.amountOfPurposes = Object.keys(this.purposeList).length;
      }
    );
    this.portCallPurposeDataSubscription = this.portCallDetailsService.portCallPurposeData$.subscribe(
      data => {
        if (data) {
          this.selectedPurposes = data;
          this.otherPurposeSelected = (this.selectedPurposes.find(p => p.portCallPurposeId === OTHER_PURPOSE_ID) != null);
        }
      }
    );
    this.otherPurposeNameSubscription = this.portCallDetailsService.otherPurposeName$.subscribe(
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
    this.portCallDetailsService.setPortCallPurposeData(this.selectedPurposes);
    console.log('SELECTED: ', this.selectedPurposes);
    if (this.otherPurposeSelected) {
      this.setOtherPurposeName();
    }
  }

  setOtherPurposeName() {
    this.portCallDetailsService.setOtherPurposeName(this.otherPurposeName);
  }
}
