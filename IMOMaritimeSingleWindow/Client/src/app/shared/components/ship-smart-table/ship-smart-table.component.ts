import { Component, OnInit, Input } from '@angular/core';
import { ShipService } from 'app/shared/services/ship.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ShipButtonRowComponent } from './ship-button-row/ship-button-row.component';

@Component({
  selector: 'app-ship-smart-table',
  templateUrl: './ship-smart-table.component.html',
  styleUrls: ['./ship-smart-table.component.css']
})
export class ShipSmartTableComponent implements OnInit {

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

  constructor(
    private shipService: ShipService
  ) { }

  dataRow(ship) {
    const row = {
      shipModel: ship,
      country:
        `<div class="no-wrap"><div hidden>` +
        ship.shipFlagCode.country.name + // ugly fix for alphabetical sorting but it works
        `</div> <div> <img src='assets/images/Flags/128x128/` +
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

  ngOnInit() {
    this.shipService.shipSearchData$.subscribe(data => {
      if (data) {
        console.log(data);
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

}
