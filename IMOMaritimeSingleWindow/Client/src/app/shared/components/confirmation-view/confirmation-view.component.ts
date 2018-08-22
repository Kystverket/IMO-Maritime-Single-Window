import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
import { Subscription } from 'rxjs/Subscription';
import { FalCargoService } from '../../services/fal-cargo.service';
import { PortCallService } from '../../services/port-call.service';

@Component({
  selector: 'app-confirmation-view',
  templateUrl: './confirmation-view.component.html',
  styleUrls: ['./confirmation-view.component.css']
})
export class ConfirmationViewComponent implements OnInit, OnDestroy {
  iconPath = 'assets/images/icons/128x128/white/';
  falForms: any;
  reportingCargo = false;

  reportingForThisPortCallDataSubcription: Subscription;

  constructor(
    private portCallDetailsService: PortCallDetailsService
  ) { }

  ngOnInit() {
    this.reportingForThisPortCallDataSubcription = this.portCallDetailsService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData != null) {
          this.reportingCargo = reportingData.reportingCargo || false;
          this.falForms = [
            {
              name: 'DPG',
              icon: 'hazard.png',
              checked: reportingData.reportingDpg || false
            },
            {
              name: 'Cargo',
              icon: 'cargo.png',
              checked: reportingData.reportingCargo || false
            },
            {
              name: 'Ship Stores',
              icon: 'alcohol.png',
              checked: reportingData.reportingShipStores || false
            },
            {
              name: 'Crew',
              icon: 'crew.png',
              checked: reportingData.reportingCrew || false
            },
            {
              name: 'Pax',
              icon: 'pax.png',
              checked: reportingData.reportingPax || false
            }
          ];
        }
      console.log(reportingData);
      }
    );
  }

  ngOnDestroy() {
    this.reportingForThisPortCallDataSubcription.unsubscribe();
  }
}
