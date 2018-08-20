import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SecurityPreviousPortOfCallModel } from '../../../../../../../../shared/models/security-previous-port-of-call-model';
import { DatePipe } from '@angular/common';
import { LocalDataSource } from '../../../../../../../../../../node_modules/ng2-smart-table';

@Component({
  selector: 'app-last-10-port-calls-table',
  templateUrl: './last-10-port-calls-table.component.html',
  styleUrls: ['./last-10-port-calls-table.component.css'],
  providers: [DatePipe]
})
export class Last10PortCallsTableComponent implements OnInit, OnChanges {
  @Input() portCallList: SecurityPreviousPortOfCallModel[] = [];
  portCallDataSource: LocalDataSource = new LocalDataSource();

  portCallTableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'No entries have been added yet.',

    columns: {
      portOfCall: {
        title: 'Port of Call',
        type: 'html'
      },
      arrival: {
        title: 'Arrival',
        type: 'html'
      },
      departure: {
        title: 'Departure',
        type: 'html'
      },
      shipSecurityLevel: {
        title: 'Ship Security Level',
        type: 'html'
      }
    }
  };

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    if (this.portCallList && this.portCallList.length > 0) {
      const rows = this.generateRows();
      this.portCallDataSource.load(rows);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const rows = this.generateRows();
    this.portCallDataSource.load(rows);
  }

  generateRows() {
    const rowData = this.portCallList.map(pc => {
      return {
        portCall: pc,
        portOfCall: pc.location.name,
        arrival: `<span class="no-wrap">` +
          this.datePipe.transform(pc.arrivalDateTime, 'yyyy-MM-dd') +
          `</span> <span class="no-wrap">` +
          this.datePipe.transform(pc.arrivalDateTime, 'HH:mm') +
          `</span>`,
        departure: `<span class="no-wrap">` +
          this.datePipe.transform(pc.departureDateTime, 'yyyy-MM-dd') +
          `</span> <span class="no-wrap">` +
          this.datePipe.transform(pc.departureDateTime, 'HH:mm') +
          `</span>`,
        shipSecurityLevel: pc.securityLevel.name
      };
    });
    return rowData;
  }

}
