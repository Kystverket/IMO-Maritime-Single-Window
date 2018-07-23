import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortCallService } from 'app/shared/services/port-call.service';
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
    private portCallService: PortCallService
  ) {}

  ngOnInit() {
    this.getPurposesSubscription = this.purposeService.getPurposes().subscribe(data => {
      this.purposeList = data;
    });
    this.portCallPurposeDataSubscription = this.portCallService.portCallPurposeData$.subscribe(data => {
      if (data != null) {
        this.selectedPurposes = data;
      }
    });
    this.otherPurposeNameSubscription = this.portCallService.otherPurposeName$.subscribe(data => {
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
