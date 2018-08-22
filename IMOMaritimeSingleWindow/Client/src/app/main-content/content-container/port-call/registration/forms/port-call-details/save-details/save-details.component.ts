import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';

const INITIAL_DATA_IS_PRISTINE_TEXT = 'There are no unsaved changes in this page.';
const UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';

@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.component.html',
  styleUrls: ['./save-details.component.css']
})
export class SaveDetailsComponent implements OnInit, OnDestroy {

  @Input() portCallId: number;

  detailsModel: PortCallDetailsModel = new PortCallDetailsModel();
  reportingModel: any;
  crewPassengersAndDimensionsModel: any;
  purposeModel = [];
  otherPurposeName: any;

  crewPassengersAndDimensionsMeta: FormMetaData = { valid: true };

  dataIsPristine = true;
  dataIsPristineText: string;

  detailsPristineSubscription: Subscription;
  reportingForThisPortCallDataSubscription: Subscription;
  crewPassengersAndDimensionsDataSubscription: Subscription;
  portCallPurposeDataSubscription: Subscription;
  otherPurposeNameSubscription: Subscription;
  crewPassengersAndDimensionsMetaSubscription: Subscription;
  cargoDescriptionSubscription: Subscription;

  constructor(private portCallService: PortCallService, private portCallDetailsService: PortCallDetailsService) {
    this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
  }

  ngOnInit() {
    this.detailsPristineSubscription = this.portCallDetailsService.detailsPristine$.subscribe(detailsDataIsPristine => {
      this.dataIsPristine = detailsDataIsPristine;
    });
    // Reporting
    this.reportingForThisPortCallDataSubscription = this.portCallDetailsService.reportingForThisPortCallData$.subscribe(
      reportingData => {
        if (reportingData) {
          this.detailsModel.reportingCargo = reportingData.reportingCargo;
          this.detailsModel.reportingCrew = reportingData.reportingCrew;
          this.detailsModel.reportingDpg = reportingData.reportingDpg;
          this.detailsModel.reportingPax = reportingData.reportingPax;
          this.detailsModel.reportingShipStores = reportingData.reportingShipStores;
          this.detailsModel.reportingSecurity = reportingData.reportingSecurity;
        }
      }
    );
    // Crew, passengers, and dimensions
    this.crewPassengersAndDimensionsDataSubscription = this.portCallDetailsService.crewPassengersAndDimensionsData$.subscribe(
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
    // Cargo Brief Description
    this.cargoDescriptionSubscription = this.portCallDetailsService.cargoBriefDescriptionData$.subscribe(
      cargoDescriptionData => {
        this.detailsModel.cargoBriefDescription = cargoDescriptionData;
      }
    );
    // Purpose
    this.portCallPurposeDataSubscription = this.portCallDetailsService.portCallPurposeData$.subscribe(purposeData => {
      if (purposeData) {
        this.purposeModel = purposeData;
      }
    });

    this.otherPurposeNameSubscription = this.portCallDetailsService.otherPurposeName$.subscribe(otherNameData => {
      this.otherPurposeName = otherNameData;
    });

    this.crewPassengersAndDimensionsMetaSubscription = this.portCallDetailsService.crewPassengersAndDimensionsMeta$.subscribe(
      cpadMetaData => {
        this.crewPassengersAndDimensionsMeta = cpadMetaData;
      }
    );
  }

  ngOnDestroy() {
    this.detailsPristineSubscription.unsubscribe();
    this.reportingForThisPortCallDataSubscription.unsubscribe();
    this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
    this.portCallPurposeDataSubscription.unsubscribe();
    this.otherPurposeNameSubscription.unsubscribe();
    this.crewPassengersAndDimensionsMetaSubscription.unsubscribe();
    this.cargoDescriptionSubscription.unsubscribe();
  }

  saveDetails() {
    if (this.crewPassengersAndDimensionsMeta.valid) {
      this.detailsModel.portCallId = this.portCallId;
      this.detailsModel.portCallDetailsId = this.portCallId;
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
