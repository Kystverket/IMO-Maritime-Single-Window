import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { LocationModel } from 'app/shared/models/location-model';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-consignment-form',
  templateUrl: './consignment-form.component.html',
  styleUrls: ['./consignment-form.component.css']
})
export class ConsignmentFormComponent implements OnInit, OnDestroy {
  @Input() consignmentModel: ConsignmentModel;
  consignmentHeader: string;
  placeholderHeader = 'Consignment without name';

  portOfLoadingModel: LocationModel = null;
  portOfDischargeModel: LocationModel = null;

  portOfLoadingFound = false;
  portOfDischargeFound = false;

  portOfLoadingData = new LocationProperties().getPropertyList();
  portOfDischargeData = new LocationProperties().getPropertyList();

  portOfLoadingSubscription: Subscription;
  portOfDischargeSubscription: Subscription;

  constructor(
  ) { }

  ngOnInit() {
    this.consignmentHeader = this.consignmentModel.name || this.placeholderHeader;
    console.log(this.consignmentModel);
    if (this.consignmentModel.portOfLoading) {
      this.onPortOfLoadingResult(this.consignmentModel.portOfLoading);
    }
    if (this.consignmentModel.portOfDischarge) {
      this.onPortOfDischargeResult(this.consignmentModel.portOfDischarge);
    }
  }

  ngOnDestroy() {
  }

  onPortOfLoadingResult(portOfLoading: LocationModel) {
    this.consignmentModel.portOfLoading = portOfLoading;
    this.consignmentModel.portOfLoadingId = portOfLoading.locationId;
    this.portOfLoadingModel = portOfLoading;
    this.portOfLoadingFound = true;
    LocationProperties.setLocationData(this.portOfLoadingData, this.portOfLoadingModel);
    if (this.portOfLoadingModel.country) {
      LocationProperties.setCountry(this.portOfLoadingData, this.portOfLoadingModel.country.name, this.portOfLoadingModel.country.twoCharCode.toLowerCase() + '.png');
    }
  }

  onPortOfDischargeResult(portOfDischarge: LocationModel) {
    this.consignmentModel.portOfDischarge = portOfDischarge;
    this.consignmentModel.portOfDischargeId = portOfDischarge.locationId;
    this.portOfDischargeModel = portOfDischarge;
    this.portOfDischargeFound = true;
    LocationProperties.setLocationData(this.portOfDischargeData, this.portOfDischargeModel);
    if (this.portOfDischargeModel.country) {
      LocationProperties.setCountry(this.portOfDischargeData, this.portOfDischargeModel.country.name, this.portOfDischargeModel.country.twoCharCode.toLowerCase() + '.png');
    }
  }

  deselectPortOfLoading() {
    this.consignmentModel.portOfLoading = null;
    this.consignmentModel.portOfLoadingId = null;
    this.portOfLoadingModel = null;
    this.portOfLoadingFound = false;
  }

  deselectPortOfDischarge() {
    this.consignmentModel.portOfDischarge = null;
    this.consignmentModel.portOfDischargeId = null;
    this.portOfDischargeModel = null;
    this.portOfDischargeFound = false;
  }

  touchData() {
    // not implemented
  }

}
