import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataProperty } from 'app/shared/interfaces/property.interface';

@Component({
  standalone: false,
  selector: 'app-ssn-table',
  templateUrl: './ssn-table.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./ssn-table.component.css']
})
export class SsnTableComponent implements OnInit {
  @Input() entryData: DataProperty[];

  constructor() { }

  ngOnInit() {

  }

}
