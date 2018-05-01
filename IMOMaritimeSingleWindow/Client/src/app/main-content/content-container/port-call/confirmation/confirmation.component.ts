import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../shared/services/port-call.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  iconPath = "assets/images/VoyageIcons/128x128/white/";
  falForms: any;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.reportingForThisPortCallData$.subscribe((reportingData) => {
      if (reportingData != null) {
        this.falForms = [
          { name: "Hazmat", icon: "hazard.png", checked: reportingData.reportingHazmat || false },
          { name: "Bunkers", icon: "barrel.png", checked: reportingData.reportingBunkers || false },
          { name: "Cargo", icon: "cargo.png", checked: reportingData.reportingCargo || false },
          { name: "Ship Stores", icon: "alcohol.png", checked: reportingData.reportingShipStores || false },
          { name: "Crew", icon: "crew.png", checked: reportingData.reportingCrew || false },
          { name: "Pax", icon: "pax.png", checked: reportingData.reportingPax || false },
          { name: "Waste", icon: "trash.png", checked: reportingData.reportingWaste || false }
        ];
      }
    });
  }
}
