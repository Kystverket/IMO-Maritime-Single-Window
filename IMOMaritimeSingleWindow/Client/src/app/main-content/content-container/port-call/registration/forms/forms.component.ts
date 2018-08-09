import { Component, OnDestroy, OnInit } from '@angular/core';
import { FORM_NAMES } from 'app/shared/constants/form-names';
import { ConsignmentModel } from 'app/shared/models/consignment-model';
import { ShipStoresModel } from 'app/shared/models/ship-stores-model';
import { ContentService } from 'app/shared/services/content.service';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ShipService } from 'app/shared/services/ship.service';
import { Subscription } from 'rxjs/Subscription';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {

  selectedComponent: string;
  portCallId: number;

  cargoData: ConsignmentModel[];
  shipStoresData: ShipStoresModel[];

  formNames: any;

  shipDataSubscription: Subscription;
  portCallFormNameSubscription: Subscription;
  portCallIdSubscription: Subscription;
  cargoSubscription: Subscription;
  shipStoresSubscription: Subscription;

  constructor(
    private contentService: ContentService,
    private portCallService: PortCallService,
    private shipService: ShipService,
    private cargoService: FalCargoService,
    private shipStoresService: FalShipStoresService,
  ) { }

  ngOnInit() {
    this.portCallIdSubscription = this.portCallService.portCallIdData$.subscribe(
      portCallIdData => {
        if (portCallIdData) {
          this.portCallId = portCallIdData;
        }
      }
    );
    this.cargoSubscription = this.cargoService.consignmentListData$.subscribe(
      data => {
        this.cargoData = data;
      }
    );
    this.shipStoresSubscription = this.shipStoresService.shipStoresList$.subscribe(
      data => {
        this.shipStoresData = data;
      }
    );
    this.shipDataSubscription = this.portCallService.shipData$.subscribe(
      shipResult => {
        this.shipService.setShipData(shipResult);
      }
    );
    this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(
      content => {
        this.selectedComponent = content;
      }
    );
    this.formNames = FORM_NAMES;
  }


  ngOnDestroy() {
    this.shipDataSubscription.unsubscribe();
    this.portCallFormNameSubscription.unsubscribe();
    this.cargoSubscription.unsubscribe();
  }
}
