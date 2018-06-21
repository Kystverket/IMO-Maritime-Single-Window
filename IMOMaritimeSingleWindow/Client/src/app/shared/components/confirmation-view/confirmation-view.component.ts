import { Component, OnInit } from '@angular/core';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-confirmation-view',
  templateUrl: './confirmation-view.component.html',
  styleUrls: ['./confirmation-view.component.css']
})
export class ConfirmationViewComponent implements OnInit {
  iconPath = 'assets/images/VoyageIcons/128x128/white/';
  falForms: any;

  constructor(private portCallService: PortCallService) {}

  ngOnInit() {
    this.portCallService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData != null) {
          this.falForms = [
            {
              name: 'Hazmat',
              icon: 'hazard.png',
              checked: reportingData.reportingHazmat || false
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
      }
    );
  }
}
