import { Component, OnInit } from '@angular/core';
import { MenuEntry } from '../../../../../shared/models/menu-entry.interface';
import { ContentService } from '../../../../../shared/services/content.service';
import { PortCallService } from '../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  iconPath = "assets/images/VoyageIcons/128x128/white/";
  baseMenuEntries: any = [
    {name: "Ship, Location and Time", icon: "ship.png",       checked: true },
    {name: "Port Call Details",       icon: "verification-clipboard.png",   checked: true }
  ];
  finalMenuEntries: any = [
    {name: "Confirm Port Call",       icon: "checkmark.png",  checked: true }
  ]

  menuEntries: any;

  constructor(private contentService: ContentService, private portCallService: PortCallService) { }

  setPortCallForm(contentName: string) {
    this.contentService.setPortCallForm(contentName);
  }

  ngOnInit() { 
    this.menuEntries = this.baseMenuEntries.concat(this.finalMenuEntries);
    this.portCallService.reportingForThisPortCallData$.subscribe((reportingData) => {
      if (reportingData != null) {
        let falForms = [
          { name: "Hazmat", icon: "hazard.png", checked: reportingData.reportingHazmat || false },
          { name: "Bunkers", icon: "barrel.png", checked: reportingData.reportingBunkers || false },
          { name: "Cargo", icon: "cargo.png", checked: reportingData.reportingCargo || false },
          { name: "Ship Stores", icon: "alcohol.png", checked: reportingData.reportingShipStores || false },
          { name: "Crew", icon: "crew.png", checked: reportingData.reportingCrew || false },
          { name: "Pax", icon: "pax.png", checked: reportingData.reportingPax || false },
          { name: "Waste", icon: "trash.png", checked: reportingData.reportingWaste || false }
        ];
        this.menuEntries = this.baseMenuEntries.concat(falForms).concat(this.finalMenuEntries);
      }
    });
  }
}
