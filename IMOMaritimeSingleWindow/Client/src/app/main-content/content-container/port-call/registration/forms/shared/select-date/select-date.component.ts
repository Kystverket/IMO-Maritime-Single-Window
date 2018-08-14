import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.css']
})
export class SelectDateComponent implements OnInit {

  @Input() inputDate: any;

  @Output() selectDate: EventEmitter<any> = new EventEmitter();

  dateModel: NgbDate = new NgbDate(null, null, null);

  validDateFormat = true;

  constructor() { }

  dateChanged($event): void {
    console.log($event);
    this.dateModel = $event;
    this.updateModel($event);
  }

  private updateModel($event): void {
    this.validDateFormat = this.hasValidDateFormat($event);
    this.validateData();
  }

  private hasValidDateFormat($event) {
    console.log(typeof $event);
    return typeof $event !== 'string';
  }

  private validateData() {
    if (this.validDateFormat) {
      console.log(this.dateModel);
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
