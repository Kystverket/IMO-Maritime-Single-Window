import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../../shared/services/port-call.service';
import { FormMetaData } from '../../../../../../../shared/models/form-meta-data.interface';

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.component.html',
  styleUrls: ['./save-details.component.css']
})
export class SaveDetailsComponent implements OnInit {
  reportingModel: any;
  crewPassengersAndDimensionsModel: any;
  purposeModel: any;
  otherPurposeName: any;
  
  reportingFound: boolean;
  crewPassengersAndDimensionsFound: boolean;
  purposeFound: boolean;

  crewPassengersAndDimensionsMeta: FormMetaData = { valid: true };

  dataIsPristine: boolean = true;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {

    this.portCallService.detailsPristine$.subscribe(
      detailsDataIsPristine => {        
        this.dataIsPristine = detailsDataIsPristine;
      }
    );

    // Reporting
    this.portCallService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData != null) {
          this.reportingModel = reportingData;
        }
      }
    );
    // Crew, passengers, and dimensions
    this.portCallService.crewPassengersAndDimensionsData$.subscribe(
      cpadData => {
        if (cpadData != null) {
          this.crewPassengersAndDimensionsModel = cpadData;
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

    this.portCallService.otherPurposeName$.subscribe(
      otherNameData => {
        this.otherPurposeName = otherNameData;
      }
    )

    this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(
      cpadMetaData => {
        this.crewPassengersAndDimensionsMeta = cpadMetaData;
      }
    );
  }

  saveDetails() {
    if (this.crewPassengersAndDimensionsMeta.valid) {
      this.portCallService.saveDetails(this.purposeModel, this.otherPurposeName);
    }
  }
}
