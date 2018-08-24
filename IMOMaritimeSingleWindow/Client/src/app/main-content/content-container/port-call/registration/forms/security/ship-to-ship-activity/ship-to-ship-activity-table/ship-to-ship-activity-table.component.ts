import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ShipToShipActivityModel } from 'app/shared/models/ship-to-ship-activity-model';
import { LocalDataSource } from 'ng2-smart-table';
import { DeleteButtonComponent } from 'app/shared/components/delete-button/delete-button.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ship-to-ship-activity-table',
  templateUrl: './ship-to-ship-activity-table.component.html',
  styleUrls: ['./ship-to-ship-activity-table.component.css'],
  providers: [DatePipe]
})
export class ShipToShipActivityTableComponent implements OnInit, OnChanges {
  @Input() tableEntryList: ShipToShipActivityModel[] = [];
  @Output() delete = new EventEmitter<any>();

  tableDataSource: LocalDataSource = new LocalDataSource();

  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'No entries have been added yet.',

    columns: {
      location: {
        title: 'Location',
        type: 'html'
      },
      fromDate: {
        title: 'From Date',
        type: 'html',
        sortDirection: 'desc'
      },
      toDate: {
        title: 'To Date',
        type: 'html'
      },
      activityType: {
        title: 'Activity',
        type: 'html'
      },
      delete: {
        title: 'Delete',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: DeleteButtonComponent,
        onComponentInitFunction: (instance) => {
          instance.delete.subscribe(row => {
            this.deleteShipActivity(row);
          });
        }
      }
    }
  };

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    if (this.tableEntryList && this.tableEntryList.length > 0) {
      const rows = this.generateRows();
      this.tableDataSource.load(rows);
    } else {
      this.tableDataSource.load([]);
    }
  }

  /** Called whenever a change is made to the tableEntryList input. */
  ngOnChanges(changes: SimpleChanges) {
    if (this.tableEntryList && this.tableEntryList.length > 0) {
      const rows = this.generateRows();
      this.tableDataSource.load(rows);
    } else {
      this.tableDataSource.load([]);
    }
  }

  /** Emits event to parent component telling it to remove an entry from the table. */
  deleteShipActivity(row) {
    this.delete.emit(row);
  }

  /** Maps content of tableEntryList to a format compatible with tableSettings. */
  generateRows() {
    const rowData = this.tableEntryList.map(shipActivity => {
      return {
        shipToShipActivity: shipActivity,
        location: (shipActivity.location != null) ? shipActivity.location.name : '',
        fromDate: `<span class="no-wrap">` +
          this.datePipe.transform(shipActivity.fromDate, 'yyyy-MM-dd') +
          `</span> <span class="no-wrap">` +
          this.datePipe.transform(shipActivity.fromDate, 'HH:mm') +
          `</span>`,
        toDate: `<span class="no-wrap">` +
          this.datePipe.transform(shipActivity.toDate, 'yyyy-MM-dd') +
          `</span> <span class="no-wrap">` +
          this.datePipe.transform(shipActivity.toDate, 'HH:mm') +
          `</span>`,
        activityType: shipActivity.activityType.name,
      };
    });
    return rowData;
  }
}
