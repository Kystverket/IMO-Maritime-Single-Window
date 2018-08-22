import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() inputDate: any;

  @Output() selectDate: EventEmitter<any> = new EventEmitter();

  dateModel: NgbDate = new NgbDate(null, null, null);

  validDateFormat = true;

  constructor() { }

  dateChanged($event): void {
    this.dateModel = $event;
    this.updateModel($event);
  }

  private updateModel($event): void {
    this.validDateFormat = this.hasValidDateFormat($event);
    this.validateData();
  }

  private hasValidDateFormat($event) {
    return typeof $event !== 'string';
  }

  private validateData() {
    if (this.validDateFormat) {
      this.selectDate.emit(this.dateModel);
    }
  }

  ngOnInit() {
    if (this.inputDate != null) {
      this.dateModel = this.inputDate;
    }
  }

  getNgbDateFormat(date) {
    if (date) {
      return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    } else {
      return '';
    }
  }

}
