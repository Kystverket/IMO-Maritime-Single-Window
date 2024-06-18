import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShipStoresModel } from 'app/shared/models/ship-stores-model';
import { FalShipStoresService, PortCallService } from 'app/shared/services/';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-save-ship-stores',
  templateUrl: './save-ship-stores.component.html',
  styleUrls: ['./save-ship-stores.component.css']
})
export class SaveShipStoresComponent implements OnInit, OnDestroy {

  @Input() portCallId: number;

  shipStoresModel: ShipStoresModel = new ShipStoresModel();
  reportingModel: any;

  shipStoresList: ShipStoresModel[] = [];

  listIsPristine: Boolean = true;

  shipStoresListSubscription: Subscription;

  saving = false;

  constructor(
    private shipStoresService: FalShipStoresService,
    private portCallService: PortCallService
  ) { }

  ngOnInit() {
    // Get updated list of ship stores
    this.shipStoresListSubscription = this.shipStoresService.shipStoresList$.subscribe(shipStoresList => {
      if (shipStoresList) {
        this.shipStoresList = shipStoresList;
      }

      this.shipStoresService.dataIsPristine$.subscribe(isPristine => {
        this.listIsPristine = isPristine;
      });

    });
  }

  ngOnDestroy() {
    this.shipStoresListSubscription.unsubscribe();
  }

  saveShipStores() {
    this.saving = true;
    const formattedShipStoresList = this.shipStoresService.formatShipStores(this.shipStoresList);
    this.shipStoresService.saveShipStores(formattedShipStoresList, this.portCallId).subscribe(
      res => {
        this.shipStoresService.setDataIsPristine(true);
        this.saving = false;
      },
      error => {
        this.saving = false;
        console.log(error);
      }
    );
  }

}
