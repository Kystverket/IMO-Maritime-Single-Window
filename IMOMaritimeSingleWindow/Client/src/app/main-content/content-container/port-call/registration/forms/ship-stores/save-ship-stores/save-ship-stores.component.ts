import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { PortCallShipStoresModel } from 'app/shared/models/port-call-ship-stores-model';

import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-save-ship-stores',
  templateUrl: './save-ship-stores.component.html',
  styleUrls: ['./save-ship-stores.component.css']
})
export class SaveShipStoresComponent implements OnInit, OnDestroy {

  @Input() portCallId: number;

  shipStoresModel: PortCallShipStoresModel = new PortCallShipStoresModel();
  reportingModel: any;

  portCallShipStoresList: PortCallShipStoresModel[] = [];

  listIsPristine: Boolean = true;

  shipStoresListSubscription: Subscription;

  constructor(
    private shipStoresService: FalShipStoresService,
    private portCallService: PortCallService
  ) { }

  ngOnInit() {
    // Get updated list of ship stores
    this.shipStoresListSubscription = this.shipStoresService.shipStoresList$.subscribe(shipStoresList => {
      if (shipStoresList) {
        this.portCallShipStoresList = shipStoresList;
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
      this.portCallShipStoresList = this.shipStoresService.setSequenceNumbers(this.portCallShipStoresList);
      this.shipStoresService.updateShipStores(this.portCallShipStoresList).subscribe(res => {});
  }

}
