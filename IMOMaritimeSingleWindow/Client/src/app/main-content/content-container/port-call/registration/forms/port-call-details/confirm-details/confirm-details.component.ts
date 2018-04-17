import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../../shared/services/port-call.service';
import { PortCallDetailsModel } from '../../../../../../../shared/models/port-call-details-model';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {
  reportingModel: any;
  crewPassengersAndDimensionsModel: any;
  cargoModel: any;
  purposeModel: any;
  
  reportingFound: boolean;
  crewPassengersAndDimensionsFound: boolean;
  cargoFound: boolean;  
  purposeFound: boolean;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    // Reporting
    this.portCallService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData != null) {
          this.reportingFound = true;
          this.reportingModel = reportingData;
        }
      }
    );
    // Crew, passengers, and dimensions
    this.portCallService.crewPassengersAndDimensionsData$.subscribe(
      cpadData => {
        if (cpadData != null) {
          this.crewPassengersAndDimensionsFound = true;
          this.crewPassengersAndDimensionsModel = cpadData;
        }
      }
    );
    // Cargo
    this.portCallService.cargoWeightData$.subscribe(
      cargoData => {
        if (cargoData != null) {
          this.cargoFound = true;
          this.cargoModel = cargoData;
        }
      }
    );
    // Purpose
    this.portCallService.portCallPurposeData$.subscribe(
      purposeData => {
        if (purposeData != null) {
          this.purposeFound = true;
          this.purposeModel = purposeData;
        }
      }
    );
  }

  registerDetails() {
    if (!this.crewPassengersAndDimensionsFound || !this.cargoFound) {
      return;
    }
    this.portCallService.saveDetails();
  }
  

}
