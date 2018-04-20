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
  cargoModel: any;
  purposeModel: any;
  
  reportingFound: boolean;
  crewPassengersAndDimensionsFound: boolean;
  cargoFound: boolean;
  purposeFound: boolean;

  crewPassengersAndDimensionsMeta: FormMetaData = { valid: true };
  cargoMeta: FormMetaData = { valid: true };

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

    this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(
      cpadMetaData => {
        this.crewPassengersAndDimensionsMeta = cpadMetaData;
      }
    );

    this.portCallService.cargoWeightMeta$.subscribe(
      cargoMetaData => {
        this.cargoMeta = cargoMetaData;
      }
    );
  }

  saveDetails() {
    if (this.crewPassengersAndDimensionsMeta.valid && this.cargoMeta.valid) {
      this.portCallService.saveDetails();
    }
  }
}
