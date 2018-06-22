import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-clearance-row',
  templateUrl: './clearance-row.component.html',
  styleUrls: ['./clearance-row.component.css']
})
export class ClearanceRowComponent implements OnInit, ViewCell {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  clearanceList: any;

  constructor() { }

  ngOnInit() {
    this.clearanceList = this.rowData.overviewModel.clearanceList;
  }

}
