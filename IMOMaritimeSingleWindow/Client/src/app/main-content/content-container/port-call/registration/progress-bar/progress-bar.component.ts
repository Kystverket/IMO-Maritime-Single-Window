import { Component, OnInit } from '@angular/core';
import { MenuEntry } from '../../../../../shared/models/menu-entry.interface';
import { ContentService } from '../../../../../shared/services/content.service';
import { PortCallService } from '../../../../../shared/services/port-call.service';
import { FormMetaData } from '../../../../../shared/models/form-meta-data.interface';

const PORT_CALL_DETAILS = "Port Call Details";
const CONFIRM_PORT_CALL = "Confirm Port Call";

const HAZMAT = "Hazmat";
const BUNKERS = "Bunkers";
const CARGO = "Cargo";
const SHIP_STORES = "Ship Stores";
const CREW = "Crew";
const PAX = "Pax";
const WASTE = "Waste";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  iconPath = "assets/images/VoyageIcons/128x128/white/";
  baseMenuEntries: any[] = [
    { name: PORT_CALL_DETAILS, icon: "verification-clipboard.png", checked: true, hasError: false }
  ];
  finalMenuEntries: any[] = [
    { name: CONFIRM_PORT_CALL, icon: "checkmark.png", checked: true, hasError: false }
  ];

  menuEntries: any[];

  constructor(private portCallService: PortCallService, private contentService: ContentService) { }

  ngOnInit() {    
    this.menuEntries = this.baseMenuEntries.concat(this.finalMenuEntries);
    this.portCallService.reportingForThisPortCallData$.subscribe((reportingData) => {
      if (reportingData != null) {
        let falForms = [
          { name: HAZMAT, icon: "hazard.png", checked: reportingData.reportingHazmat || false, hasError: false },
          { name: BUNKERS, icon: "barrel.png", checked: reportingData.reportingBunkers || false, hasError: false },
          { name: CARGO, icon: "cargo.png", checked: reportingData.reportingCargo || false, hasError: false },
          { name: SHIP_STORES, icon: "alcohol.png", checked: reportingData.reportingShipStores || false, hasError: false },
          { name: CREW, icon: "crew.png", checked: reportingData.reportingCrew || false, hasError: false },
          { name: PAX, icon: "pax.png", checked: reportingData.reportingPax || false, hasError: false },
          { name: WASTE, icon: "trash.png", checked: reportingData.reportingWaste || false, hasError: false }
        ];
        this.menuEntries = this.baseMenuEntries.concat(falForms).concat(this.finalMenuEntries);
      }
    });    

    this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(
      metaData => {
        this.menuEntries.find(p => p.name == PORT_CALL_DETAILS).hasError = !metaData.valid;
      }
    );
  }

  setPortCallForm(contentName: string) {
    this.contentService.setPortCallForm(contentName);
  }
}