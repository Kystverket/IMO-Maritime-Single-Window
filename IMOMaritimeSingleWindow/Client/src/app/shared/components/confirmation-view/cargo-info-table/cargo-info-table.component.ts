import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cargo-info-table',
  templateUrl: './cargo-info-table.component.html',
  styleUrls: ['./cargo-info-table.component.css']
})
export class CargoInfoTableComponent implements OnInit, OnDestroy {
  @Input() iconPath: string;
  @Input() portCallId: number;

  cargoDataSubscription: Subscription;
  numberOfConsignments = 0;
  numberOfCargoItems = 0;
  numberOfPackages = 0;

  constructor(
    private cargoService: FalCargoService
  ) { }

  ngOnInit() {
    if (this.portCallId) {
      this.cargoDataSubscription = this.cargoService.getConsignmentListForPortCall(this.portCallId).subscribe(
        cargoData => {
          if (cargoData) {
            this.numberOfConsignments = cargoData.length;
            this.numberOfCargoItems = 0;
            this.numberOfPackages = 0;
            cargoData.forEach(consignment => {
              if (consignment.cargoItem && consignment.cargoItem.length > 0) {
                this.numberOfCargoItems += consignment.cargoItem.length;
                consignment.cargoItem.forEach(cargoItem => {
                  if (cargoItem.numberOfPackages != null) {
                    this.numberOfPackages += cargoItem.numberOfPackages;
                  }
                });
              }
            });
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.cargoDataSubscription.unsubscribe();
  }

}
