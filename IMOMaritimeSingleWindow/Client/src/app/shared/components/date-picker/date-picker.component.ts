import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { DateTime } from '../../interfaces/dateTime.interface';
import { NgbDate } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: []
})
export class DatePickerComponent implements OnInit {

  @Input() header: string;

  @Input() dateInput: NgbDate;

  @Output() dateResult = new EventEmitter<NgbDate>();
  @Output() dateFormatError = new EventEmitter<boolean>();

  validDateFormat = true;

  constructor() { }

  ngOnInit() { }

  dateChanged(dateResult) {
    this.validDateFormat = this.hasValidDateFormat(dateResult);
    this.persistData();
  }

  persistData() {
    this.dateFormatError.emit(!this.validDateFormat);
    if (this.dateInput && this.validDateFormat) {
      this.dateResult.emit(this.dateInput);
    } else {
      this.dateResult.emit(null);
    }
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string';
  }
}
