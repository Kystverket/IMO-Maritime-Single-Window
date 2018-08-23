import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {

  @Input() header: string;

  @Input() dateInput: NgbDate;

  @Output() dateResult = new EventEmitter<NgbDate>();
  @Output() dateFormatError = new EventEmitter<boolean>();

  dateModel: NgbDate = new NgbDate(null, null, null);

  validDateFormat = true;

  constructor() { }

  ngOnInit() {
    if (this.dateInput != null) {
      this.dateModel = this.dateInput;
    }
   }

  dateChanged(dateResult) {
    this.validDateFormat = this.hasValidDateFormat(dateResult);
    this.dateModel = dateResult;
    this.persistData();
  }

  persistData() {
    this.dateFormatError.emit(!this.validDateFormat);
    if (/* this.dateInput &&  */this.validDateFormat) {
      this.dateResult.emit(this.dateModel);
    } else {
      this.dateResult.emit(null);
    }
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string';
  }

  getNgbDateFormat(date) {
    if (date) {
      return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    } else {
      return '';
    }
  }
}
