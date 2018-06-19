import { Component, OnInit } from '@angular/core';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { PortCallService } from 'app/shared/services/port-call.service';

const INITIAL_DATA_IS_PRISTINE_TEXT =
  'There are no unsaved changes in this page.';
const UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.component.html',
  styleUrls: ['./save-details.component.css']
})
export class SaveDetailsComponent implements OnInit {
  detailsModel: PortCallDetailsModel = new PortCallDetailsModel();
  reportingModel: any;
  crewPassengersAndDimensionsModel: any;
  purposeModel = [];
  otherPurposeName: any;

  reportingFound: boolean;
  crewPassengersAndDimensionsFound: boolean;

  crewPassengersAndDimensionsMeta: FormMetaData = { valid: true };

  dataIsPristine = true;
  dataIsPristineText: string;

  constructor(private portCallService: PortCallService) {}

  ngOnInit() {
    this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
    this.portCallService.detailsPristine$.subscribe(detailsDataIsPristine => {
      this.dataIsPristine = detailsDataIsPristine;
    });
    // Database Identification
    this.portCallService.detailsIdentificationData$.subscribe(
      identificationData => {
        if (identificationData) {
          this.detailsModel.portCallDetailsId =
            identificationData.portCallDetailsId;
          this.detailsModel.portCallId = identificationData.portCallId;
        }
      }
    );
    // Reporting
    this.portCallService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData) {
          this.detailsModel.reportingBunkers = reportingData.reportingBunkers;
          this.detailsModel.reportingCargo = reportingData.reportingCargo;
          this.detailsModel.reportingCrew = reportingData.reportingCrew;
          this.detailsModel.reportingHazmat = reportingData.reportingHazmat;
          this.detailsModel.reportingPax = reportingData.reportingPax;
          this.detailsModel.reportingShipStores =
            reportingData.reportingShipStores;
          this.detailsModel.reportingWaste = reportingData.reportingWaste;
        }
      }
    );
    // Crew, passengers, and dimensions
    this.portCallService.crewPassengersAndDimensionsData$.subscribe(
      cpadData => {
        if (cpadData) {
          this.crewPassengersAndDimensionsModel = cpadData;
          this.detailsModel.numberOfCrew = cpadData.numberOfCrew;
          this.detailsModel.numberOfPassengers = cpadData.numberOfPassengers;
          this.detailsModel.airDraught = cpadData.airDraught;
          this.detailsModel.actualDraught = cpadData.actualDraught;
        }
      }
    );
    // Purpose
    this.portCallService.portCallPurposeData$.subscribe(purposeData => {
      if (purposeData) {
        this.purposeModel = purposeData;
      }
    });

    this.portCallService.otherPurposeName$.subscribe(otherNameData => {
      this.otherPurposeName = otherNameData;
    });

    this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(
      cpadMetaData => {
        this.crewPassengersAndDimensionsMeta = cpadMetaData;
      }
    );
  }

  saveDetails() {
    if (this.crewPassengersAndDimensionsMeta.valid) {
      this.detailsModel.numberOfCrew = this.crewPassengersAndDimensionsModel.numberOfCrew;
      this.detailsModel.numberOfPassengers = this.crewPassengersAndDimensionsModel.numberOfPassengers;
      this.detailsModel.airDraught = this.crewPassengersAndDimensionsModel.airDraught;
      this.detailsModel.actualDraught = this.crewPassengersAndDimensionsModel.actualDraught;

      this.portCallService.saveDetails(
        this.detailsModel,
        this.purposeModel,
        this.otherPurposeName
      );
      this.dataIsPristineText = UPDATED_DATA_IS_PRISTINE_TEXT;
    }
  }
}
