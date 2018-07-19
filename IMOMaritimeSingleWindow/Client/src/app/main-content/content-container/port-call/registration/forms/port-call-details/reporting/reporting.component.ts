import { Component, OnInit, OnDestroy } from '@angular/core';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit, OnDestroy {

  baseIconUrl = 'assets/images/icons/128x128/';
  reportingModel: {
    reportingDpg: boolean,
    reportingCargo: boolean,
    reportingShipStores: boolean,
    reportingCrew: boolean,
    reportingPax: boolean,
  };
  checkboxes: any = [];

  reportingForThisPortCallDataSubscription: Subscription;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.reportingForThisPortCallDataSubscription = this.portCallService.reportingForThisPortCallData$.subscribe(
      data => {
        if (data != null) {
          this.reportingModel = data;

        } else {
          this.reportingModel = {
            reportingDpg: null,
            reportingCargo: null,
            reportingShipStores: null,
            reportingCrew: null,
            reportingPax: null,
          };
        }
        this.checkboxes = [
          { name: 'DPG', icon: 'hazard.png', checked: this.reportingModel.reportingDpg || false },
          { name: 'Cargo', icon: 'cargo.png', checked: this.reportingModel.reportingCargo || false },
          { name: 'Ship Stores', icon: 'alcohol.png', checked: this.reportingModel.reportingShipStores || false },
          { name: 'Crew', icon: 'crew.png', checked: this.reportingModel.reportingCrew || false },
          { name: 'Pax', icon: 'pax.png', checked: this.reportingModel.reportingPax || false }
        ];
      }
    );
  }

  ngOnDestroy() {
    this.reportingForThisPortCallDataSubscription.unsubscribe();
  }

  checkboxChecked(checkboxModel) {
    checkboxModel.checked = !checkboxModel.checked;
    switch (checkboxModel.name) {
      case 'DPG':
        this.reportingModel.reportingDpg = checkboxModel.checked;
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
      default:
        console.log('Oops. Something went wrong with the checkboxes.');
    }
    this.portCallService.setReportingForThisPortCallData(this.reportingModel);
  }
}
