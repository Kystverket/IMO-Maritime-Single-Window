import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateModel } from './dateModel';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.css']
})
export class SelectDateComponent implements OnInit {

  @Input() inputDate: any;

  @Output() selectDate: EventEmitter<any> = new EventEmitter();

  dateModel: DateModel = {
    year: null,
    month: null,
    day: null
  };

  ngbDateModel: NgbDateStruct;
  validDateFormat = true;

  constructor() { }

  dateChanged($event): void {
    console.log($event);
    this.updateModel($event);
  }

  private updateModel($event): void {
    this.validDateFormat = this.hasValidDateFormat($event);
    if ($event != null) {
      if (this.validDateFormat) {
        this.validateData();
      }
      this.validateData();
    }
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
    if (this.inputDate) {
      this.dateModel = this.inputDate;
    }
  }

}
