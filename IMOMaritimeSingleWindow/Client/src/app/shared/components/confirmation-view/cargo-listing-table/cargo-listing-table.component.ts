import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FalCargoService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-cargo-listing-table',
  templateUrl: './cargo-listing-table.component.html',
  styleUrls: ['./cargo-listing-table.component.css']
})
export class CargoListingTableComponent implements OnInit, OnDestroy {

  @Input() iconPath: string;
  @Input() portCallId: number;

  cargoDataSubscription: Subscription;

  public cargo: any = [];

  // Smart table
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    columns: {
      description: {
        title: 'Description'
      },
      grossVolume: {
        title: 'Gross Volume'
      },
      grossWeight: {
        title: 'Gross Weight'
      },
      hsCode: {
        title: 'hsCode'
      },
      numberOfPackages: {
        title: '# Packages'
      },
      packageType: {
        title: 'Package Types',
        valuePrepareFunction: (value) => value.name
      }
    }
  };

  constructor(private cargoService: FalCargoService) { }

  ngOnInit() {
    if (this.portCallId) {
      this.cargoDataSubscription = this.cargoService.getConsignmentListForPortCall(this.portCallId).subscribe(
        cargoData => {
          if (cargoData) {
            cargoData.forEach((item, idx, arr) => {
              this.cargo = this.cargo.concat(item.cargoItem);
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
