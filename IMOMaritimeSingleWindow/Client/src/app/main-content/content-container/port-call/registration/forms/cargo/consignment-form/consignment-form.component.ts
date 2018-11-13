import { Component, Input, OnDestroy, OnInit  } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { ConsignmentModel, LocationModel } from 'app/shared/models/';
import { Subscription } from 'rxjs/Subscription';
import { FalCargoService } from '../../../../../../../shared/services/fal-cargo.service';

@Component({
  selector: 'app-consignment-form',
  templateUrl: './consignment-form.component.html',
  styleUrls: ['./consignment-form.component.css']
})
export class ConsignmentFormComponent implements OnInit, OnDestroy {
  @Input() consignmentModel: ConsignmentModel;
  placeholderHeader = 'Consignment without name';

  portOfLoadingModel: LocationModel = null;
  portOfDischargeModel: LocationModel = null;

  dataIsPristine = true;

  portOfLoadingFound = false;
  portOfDischargeFound = false;

  portOfLoadingData = new LocationProperties().getPropertyList();
  portOfDischargeData = new LocationProperties().getPropertyList();

  portOfLoadingSubscription: Subscription;
  portOfDischargeSubscription: Subscription;

  constructor(
    private cargoService: FalCargoService
  ) { }

  ngOnInit() {
    this.cargoService.dataIsPristine$.subscribe(
      data => {
        this.dataIsPristine = data;
      }
    );
    if (this.consignmentModel.portOfLoading) {
      this.portOfLoadingModel = this.consignmentModel.portOfLoading;
      this.portOfLoadingFound = true;
      this.onPortOfLoadingResult(this.consignmentModel.portOfLoading);
    }
    if (this.consignmentModel.portOfDischarge) {
      this.onPortOfDischargeResult(this.consignmentModel.portOfDischarge);
    }
  }

  ngOnDestroy() {
  }

  setProperties(portData, portModel: LocationModel) {
    LocationProperties.setLocationData(portData, portModel);
    if (portModel.country) {
      LocationProperties.setCountry(portData, portModel.country.name, portModel.country.twoCharCode.toLowerCase() + '.png');
    }
  }

  onPortOfLoadingResult(portOfLoading: LocationModel) {
    this.consignmentModel.portOfLoading = portOfLoading;
    this.consignmentModel.portOfLoadingId = portOfLoading.locationId;
    this.portOfLoadingModel = portOfLoading;
    this.portOfLoadingFound = true;
    this.setProperties(this.portOfLoadingData, this.portOfLoadingModel);
  }

  onPortOfDischargeResult(portOfDischarge: LocationModel) {
    this.consignmentModel.portOfDischarge = portOfDischarge;
    this.consignmentModel.portOfDischargeId = portOfDischarge.locationId;
    this.portOfDischargeModel = portOfDischarge;
    this.portOfDischargeFound = true;
    this.setProperties(this.portOfDischargeData, this.portOfDischargeModel);
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
    this.cargoService.setDataIsPristine(false);
  }

}
