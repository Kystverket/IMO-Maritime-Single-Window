import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() dateInput: any;

  @Output() dateResult: EventEmitter<any> = new EventEmitter();
  @Output() outputValidDateFormat: EventEmitter<boolean> = new EventEmitter();

  dateModel: NgbDate = new NgbDate(null, null, null);

  validDateFormat = true;

  constructor() { }

  ngOnInit() {
    if (this.dateInput != null) {
      this.dateModel = this.dateInput;
    }
  }

  /** Runs every time the user changes the date in the input field. */
  dateChanged($event): void {
    this.validDateFormat = this.hasValidDateFormat($event);
    this.dateModel = $event;
    this.persistData();
  }

  private persistData() {
    if (this.validDateFormat) {
      this.dateResult.emit(this.dateModel);
    } else {
      this.dateResult.emit(null);
    }
  }

  private hasValidDateFormat($event) {
    return typeof $event !== 'string';
  }

  getNgbDateFormat(date) {
    if (date) {
      return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    } else {
      return '';
    }
  }

}
