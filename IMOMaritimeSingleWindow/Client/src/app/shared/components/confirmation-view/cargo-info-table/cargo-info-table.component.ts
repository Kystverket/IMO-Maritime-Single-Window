import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';

@Component({
  selector: 'app-cargo-info-table',
  templateUrl: './cargo-info-table.component.html',
  styleUrls: ['./cargo-info-table.component.css']
})
export class CargoInfoTableComponent implements OnInit {
  @Input() iconPath: string;
  cargoDataSubscription: Subscription;
  numberOfConsignments = 0;
  numberOfCargoItems = 0;
  numberOfPackages = 0;

  constructor(
    private cargoService: FalCargoService
  ) { }

  ngOnInit() {
    this.cargoDataSubscription = this.cargoService.consignmentListData$.subscribe(
      cargoData => {
        if (cargoData) {
          this.numberOfConsignments += cargoData.length;
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
