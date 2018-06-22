import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { LocationButtonRowComponent } from './location-button-row/location-button-row.component';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-smart-table',
  templateUrl: './location-smart-table.component.html',
  styleUrls: ['./location-smart-table.component.css']
})
export class LocationSmartTableComponent implements OnInit {

  tableData = [];
  dataSource: LocalDataSource = new LocalDataSource();
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There are no locations in this list.',

    columns: {
      country: {
        title: 'Country',
        type: 'html'
      },
      name: {
        title: 'Name',
        type: 'html'
      },
      loCode: {
        title: 'Location code',
        type: 'html'
      },
      type: {
        title: 'Type',
        type: 'html'
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: LocationButtonRowComponent
      }
    }
  };

  constructor(
    private locationService: LocationService
  ) { }

  dataRow(location) {
    const row = {
      locationModel: location,
      country:
        `<div class="no-wrap"><div hidden>` +
        location.country.name + // ugly fix for alphabetical sorting but it works
        `</div> <div> <img src='assets/images/Flags/128x128/` +
        location.country.twoCharCode.toLowerCase() +
        `.png' height='20px'/> ` +
        location.country.name +
        `</div></div>`,
      name: location.name,
      loCode: location.locationCode || `<div class="font-italic">Not provided.</div>`,
      type: location.locationType.name || `<div class="font-italic">Not provided.</div>`,
      actions: 'btn'
    };
    return row;
  }

  ngOnInit() {
    this.locationService.locationSearchData$.subscribe(data => {
      if (data) {
        if (data.length !== 0) {
          const rowList = [];
          data.forEach(location => {
            const row = this.dataRow(location);
            rowList.push(row);
          });
          this.tableData = rowList;
        }
      }
      this.dataSource.load(this.tableData);
    });
  }

}
