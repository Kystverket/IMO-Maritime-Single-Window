import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';

const INITIAL_DATA_IS_PRISTINE_TEXT = 'There are no unsaved changes in this page.';
const UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.component.html',
  styleUrls: ['./save-details.component.css']
})
export class SaveDetailsComponent implements OnInit, OnDestroy {
  detailsModel: PortCallDetailsModel = new PortCallDetailsModel();
  reportingModel: any;
  crewPassengersAndDimensionsModel: any;
  purposeModel = [];
  otherPurposeName: any;

  crewPassengersAndDimensionsMeta: FormMetaData = { valid: true };

  dataIsPristine = true;
  dataIsPristineText: string;

  detailsPristineSubscription: Subscription;
  detailsIdentificationDataSubscription: Subscription;
  reportingForThisPortCallDataSubscription: Subscription;
  crewPassengersAndDimensionsDataSubscription: Subscription;
  portCallPurposeDataSubscription: Subscription;
  otherPurposeNameSubscription: Subscription;
  crewPassengersAndDimensionsMetaSubscription: Subscription;

  constructor(private portCallService: PortCallService) {
    this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
  }

  ngOnInit() {
    this.detailsPristineSubscription = this.portCallService.detailsPristine$.subscribe(detailsDataIsPristine => {
      this.dataIsPristine = detailsDataIsPristine;
    });
    // Database Identification
    this.detailsIdentificationDataSubscription = this.portCallService.detailsIdentificationData$.subscribe(
      identificationData => {
        if (identificationData) {
          this.detailsModel.portCallDetailsId =
            identificationData.portCallDetailsId;
          this.detailsModel.portCallId = identificationData.portCallId;
        }
      }
    );
    // Reporting
    this.reportingForThisPortCallDataSubscription = this.portCallService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData) {
          this.detailsModel.reportingCargo = reportingData.reportingCargo;
          this.detailsModel.reportingCrew = reportingData.reportingCrew;
          this.detailsModel.reportingDpg = reportingData.reportingDpg;
          this.detailsModel.reportingPax = reportingData.reportingPax;
          this.detailsModel.reportingShipStores =
            reportingData.reportingShipStores;
        }
      }
    );
    // Crew, passengers, and dimensions
    this.crewPassengersAndDimensionsDataSubscription = this.portCallService.crewPassengersAndDimensionsData$.subscribe(
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
    this.portCallPurposeDataSubscription = this.portCallService.portCallPurposeData$.subscribe(purposeData => {
      if (purposeData) {
        this.purposeModel = purposeData;
      }
    });

    this.otherPurposeNameSubscription = this.portCallService.otherPurposeName$.subscribe(otherNameData => {
      this.otherPurposeName = otherNameData;
    });

    this.crewPassengersAndDimensionsMetaSubscription = this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(
      cpadMetaData => {
        this.crewPassengersAndDimensionsMeta = cpadMetaData;
      }
    );
  }

  ngOnDestroy() {
    this.detailsPristineSubscription.unsubscribe();
    this.detailsIdentificationDataSubscription.unsubscribe();
    this.reportingForThisPortCallDataSubscription.unsubscribe();
    this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
    this.portCallPurposeDataSubscription.unsubscribe();
    this.otherPurposeNameSubscription.unsubscribe();
    this.crewPassengersAndDimensionsMetaSubscription.unsubscribe();
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
