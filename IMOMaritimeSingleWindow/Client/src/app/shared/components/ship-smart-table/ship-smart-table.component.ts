import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShipService } from 'app/shared/services/ship.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs/Subscription';
import { ShipButtonRowComponent } from './ship-button-row/ship-button-row.component';

@Component({
  selector: 'app-ship-smart-table',
  templateUrl: './ship-smart-table.component.html',
  styleUrls: ['./ship-smart-table.component.css']
})
export class ShipSmartTableComponent implements OnInit, OnDestroy {

  tableData = [];
  dataSource: LocalDataSource = new LocalDataSource();
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There are no ships in this list.',

    columns: {
      country: {
        title: 'Country',
        type: 'html'
      },
      name: {
        title: 'Name',
        type: 'html'
      },
      callSign: {
        title: 'Call Sign',
        type: 'html'
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ShipButtonRowComponent
      }
    }
  };

  shipSearchDataSubscription: Subscription;

  constructor(
    private shipService: ShipService
  ) { }

  ngOnInit() {
    this.shipSearchDataSubscription = this.shipService.shipSearchData$.subscribe(data => {
      if (data) {
        if (data.length !== 0) {
          const rowList = [];
          data.forEach(ship => {
            const row = this.dataRow(ship);
            rowList.push(row);
          });
          this.tableData = rowList;
        }
      }
      this.dataSource.load(this.tableData);
    });
  }

  ngOnDestroy() {
    this.shipSearchDataSubscription.unsubscribe();
  }

  dataRow(ship) {
    const row = {
      shipModel: ship,
      country:
        `<div class="no-wrap"><div hidden>` +
        ship.shipFlagCode.country.name + // ugly fix for alphabetical sorting but it works
        `</div> <div> <img src='assets/images/flags/128x128/` +
        ship.shipFlagCode.country.twoCharCode.toLowerCase() +
        `.png' height='20px'/> ` +
        ship.shipFlagCode.country.name +
        `</div></div>`,
      name: ship.name,
      callSign: ship.callSign,
      actions: 'btn'
    };
    return row;
  }

}
