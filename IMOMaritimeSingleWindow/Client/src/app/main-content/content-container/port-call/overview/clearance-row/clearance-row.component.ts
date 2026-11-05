import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  standalone: false,
  selector: 'app-clearance-row',
  templateUrl: './clearance-row.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
