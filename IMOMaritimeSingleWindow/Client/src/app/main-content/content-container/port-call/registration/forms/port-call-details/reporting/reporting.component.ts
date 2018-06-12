import { Component, OnInit } from '@angular/core';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  baseIconUrl = 'assets/images/VoyageIcons/128x128/';
  reportingModel: {
    reportingHazmat: boolean,
    reportingBunkers: boolean,
    reportingCargo: boolean,
    reportingShipStores: boolean,
    reportingCrew: boolean,
    reportingPax: boolean,
    reportingWaste: boolean
  };
  checkboxes: any = [];

  constructor(private portCallService: PortCallService) { }

  checkboxChecked(checkboxModel) {
    checkboxModel.checked = !checkboxModel.checked;
    switch (checkboxModel.name) {
      case 'Hazmat':
        this.reportingModel.reportingHazmat = checkboxModel.checked;
        break;
      case 'Bunkers':
        this.reportingModel.reportingBunkers = checkboxModel.checked;
        break;
      case 'Cargo':
        this.reportingModel.reportingCargo = checkboxModel.checked;
        break;
      case 'Ship Stores':
        this.reportingModel.reportingShipStores = checkboxModel.checked;
        break;
      case 'Crew':
        this.reportingModel.reportingCrew = checkboxModel.checked;
        break;
      case 'Pax':
        this.reportingModel.reportingPax = checkboxModel.checked;
        break;
      case 'Waste':
        this.reportingModel.reportingWaste = checkboxModel.checked;
        break;
      default:
        console.log('Oops. Something went wrong with the checkboxes.');
    }
    this.portCallService.setReportingForThisPortCallData(this.reportingModel);
  }

  ngOnInit() {

    this.portCallService.reportingForThisPortCallData$.subscribe(data => {
      if (data != null) {
        this.reportingModel = data;

      } else {
        this.reportingModel = {
          reportingHazmat: null,
          reportingBunkers: null,
          reportingCargo: null,
          reportingShipStores: null,
          reportingCrew: null,
          reportingPax: null,
          reportingWaste: null
        };
      }
      this.checkboxes = [
        { name: 'Hazmat', icon: 'hazard.png', checked: this.reportingModel.reportingHazmat || false },
        { name: 'Bunkers', icon: 'barrel.png', checked: this.reportingModel.reportingBunkers || false },
        { name: 'Cargo', icon: 'cargo.png', checked: this.reportingModel.reportingCargo || false },
        { name: 'Ship Stores', icon: 'alcohol.png', checked: this.reportingModel.reportingShipStores || false },
        { name: 'Crew', icon: 'crew.png', checked: this.reportingModel.reportingCrew || false },
        { name: 'Pax', icon: 'pax.png', checked: this.reportingModel.reportingPax || false },
        { name: 'Waste', icon: 'trash.png', checked: this.reportingModel.reportingWaste || false }
      ];
    });
  }

}
