import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ship-stores-info-table',
  templateUrl: './ship-stores-info-table.component.html',
  styleUrls: ['./ship-stores-info-table.component.css']
})
export class ShipStoresInfoTableComponent implements OnInit, OnDestroy {
  @Input() iconPath: string;
  @Input() portCallId: number;

  shipStoresDataSubscription: Subscription;
  numberOfShipStores = 0;
  totalWeight = 0; // In kg
  totalVolume = 0; // In liter
  totalUnits = 0;

  constructor(
    private shipStoresService: FalShipStoresService
  ) { }

  ngOnInit() {
    if (this.portCallId) {
      this.shipStoresDataSubscription = this.shipStoresService.getShipStoresByPortCallId(this.portCallId).subscribe(
        shipStores => {
          if (shipStores) {
            this.numberOfShipStores = shipStores.length;
            shipStores.forEach(item => {
              if (item.measurementType) {
                if (item.measurementType.name === 'Kilograms (kg)' && item.quantity) {
                  this.totalWeight += item.quantity;
                } else if (item.measurementType.name === 'Tonne (t)' && item.quantity) {
                  this.totalWeight += item.quantity * 1000;
                } else if (item.measurementType.name === 'Liter (l)' && item.quantity) {
                  this.totalVolume += item.quantity;
                } else if (item.measurementType.name === 'Cubic Meters (m3)' && item.quantity) {
                  this.totalVolume += item.quantity * 1000;
                } else if (item.measurementType.name === 'Units (u)' && item.quantity) {
                  this.totalUnits += item.quantity;
                }
              }
            });
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.shipStoresDataSubscription.unsubscribe();
  }

}
