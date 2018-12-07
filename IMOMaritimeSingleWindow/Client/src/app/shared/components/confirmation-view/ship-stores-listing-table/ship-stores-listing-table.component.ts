import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FalShipStoresService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-ship-stores-listing-table',
  templateUrl: './ship-stores-listing-table.component.html',
  styleUrls: ['./ship-stores-listing-table.component.css']
})
export class ShipStoresListingTableComponent implements OnInit, OnDestroy {

  @Input() iconPath: string;
  @Input() portCallId: number;

  shipStoreDataSubscription: Subscription;

  public shipStores: any = [];
  public headerText: string;

  constructor(
    private shipStoreService: FalShipStoresService
  ) { }

  // Smart table
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    columns: {
      articleName: {
        title: 'Article Name',
        valuePrepareFunction: (value) => {
          return (value) ? value : 'N/A';
        }
      },
      quantity: {
        title: 'Quantity',
        valuePrepareFunction: (value) => {
          return (value) ? value : 'N/A';
        }
      },
      measurementType: {
        title: 'Measurement Type',
        valuePrepareFunction: (value) => {
          return (value) ? value : 'N/A';
        }
      },
      locationOnBoardAndCode: {
        title: 'Location on Board',
        valuePrepareFunction: (value) => {
          let returnVal = '';
          if (value.name != null && value.name !== undefined) {
            returnVal += value.name;
          }
          if (value.code != null && value.code !== undefined) {
            returnVal += ' (' + value.code + ')';
          }
          if (returnVal.trim().length === 0) {
            returnVal = 'N/A';
          }

          return returnVal;
        }
      }
    }
  };

  ngOnInit() {
    if (this.portCallId) {
      this.shipStoreDataSubscription = this.shipStoreService.getSummaryByPortCall(this.portCallId)
        .finally(() => {
          this.shipStoreDataSubscription = this.shipStoreService.getOverviewByPortCall(this.portCallId).subscribe(res => {
            this.headerText = 'Ship Stores List - Total Entries Reported: ' + res.amount
              + ' - Total weight : ' + res.totalWeight + ' - Total Volume: ' + res.totalVolume + ' - Total Units: ' + res.totalRegisteredUnits;
          }, error => {
            this.headerText = 'Ship Stores List';
          });
        })
        .subscribe(summary => {
          this.shipStores = summary;
        }
        );
    }
  }

  ngOnDestroy(): void {
    this.shipStoreDataSubscription.unsubscribe();
  }
}
