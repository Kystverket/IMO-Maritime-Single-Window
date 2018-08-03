import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LocationModel } from '../../../../../../../shared/models/location-model';
import { LocationProperties } from '../../../../../../../shared/constants/location-properties';
import { Subscription } from '../../../../../../../../../node_modules/rxjs';
import { ConsignmentModel } from 'app/shared/models/consignment-model';

@Component({
  selector: 'app-consignment-form',
  templateUrl: './consignment-form.component.html',
  styleUrls: ['./consignment-form.component.css']
})
export class ConsignmentFormComponent implements OnInit, OnDestroy {
  @Input() consignmentModel: ConsignmentModel;

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

  }

  ngOnDestroy() {
  }

}
