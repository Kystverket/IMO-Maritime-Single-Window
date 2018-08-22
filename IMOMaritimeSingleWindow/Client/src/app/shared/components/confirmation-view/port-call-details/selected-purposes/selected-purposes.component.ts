import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
import { PurposeService } from 'app/shared/services/purpose.service';
import { Subscription } from 'rxjs/Subscription';

const OTHER_PURPOSE_ID = '100249';

@Component({
  selector: 'app-selected-purposes',
  templateUrl: './selected-purposes.component.html',
  styleUrls: ['./selected-purposes.component.css'],
  providers: [PurposeService]
})
export class SelectedPurposesComponent implements OnInit, OnDestroy {
  selectedPurposes: any;
  purposeList: any[];

  otherPurposeName = '';

  getPurposesSubscription: Subscription;
  portCallPurposeDataSubscription: Subscription;
  otherPurposeNameSubscription: Subscription;

  constructor(
    private purposeService: PurposeService,
    private portCallDetailsService: PortCallDetailsService
  ) {}

  ngOnInit() {
    this.getPurposesSubscription = this.purposeService.getPurposes().subscribe(data => {
      this.purposeList = data;
    });
    this.portCallPurposeDataSubscription = this.portCallDetailsService.portCallPurposeData$.subscribe(data => {
      if (data != null) {
        this.selectedPurposes = data;
      }
    });
    this.otherPurposeNameSubscription = this.portCallDetailsService.otherPurposeName$.subscribe(data => {
      this.otherPurposeName = data;
    });
  }

  ngOnDestroy() {
    this.getPurposesSubscription.unsubscribe();
    this.portCallPurposeDataSubscription.unsubscribe();
    this.otherPurposeNameSubscription.unsubscribe();
  }

  getPurposeName(id) {
    if (this.purposeList != null) {
      const purpose = this.purposeList.find(p => p.portCallPurposeId === id);
      if (purpose.portCallPurposeId !== OTHER_PURPOSE_ID) {
        return purpose != null ? purpose.name : null;
      } else {
        return this.otherPurposeName === ''
          ? 'Other purpose is undefined'
          : 'Other: "' + this.otherPurposeName + '"';
      }
    }
  }
}
