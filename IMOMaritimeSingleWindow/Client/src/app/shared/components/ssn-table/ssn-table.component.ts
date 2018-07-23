import { Component, OnInit, Input } from '@angular/core';
import { DataProperty } from 'app/shared/interfaces/property.interface';

@Component({
  selector: 'app-ssn-table',
  templateUrl: './ssn-table.component.html',
  styleUrls: ['./ssn-table.component.css']
})
export class SsnTableComponent implements OnInit {
  @Input() entryData: DataProperty[];

  constructor() { }

  ngOnInit() {

  }

}
