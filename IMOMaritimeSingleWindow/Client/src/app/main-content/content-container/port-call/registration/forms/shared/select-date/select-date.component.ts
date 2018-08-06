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
    this.updateModel($event);
  }

  private updateModel($event): void {
    if ($event != null) {
      if (this.hasValidDateFormat()) {
        this.updateValidDate(true);
        this.dateModel.year = $event.year;
        this.dateModel.month = $event.month;
        this.dateModel.day = $event.day;
        this.validateData();
      } else {
        this.updateValidDate(false);
      }
    } else {
      this.updateValidDate(true);
    }
    // meningen at dette settes til null
    this.dateModel.year = null;
    this.dateModel.month = null;
    this.dateModel.day = null;
    this.validateData();
  }

  private updateValidDate(valid: boolean) {
    this.validDateFormat = valid;
  }

  private hasValidDateFormat() {
    return typeof this.ngbDateModel !== 'string';
  }

  private validateData() {
    // TODO: Validate
    // then:
    if (this.hasRequiredData()) {
      this.selectDate.emit(this.dateModel);
    }
  }

  private hasRequiredData(): boolean {
    return (
      this.dateModel.year != null &&
      this.dateModel.month != null &&
      this.dateModel.day != null
    );
  }

  ngOnInit() {
    if (this.inputDate) {
      this.dateModel = this.inputDate;
    }

    if (this.dateModel != null) {
      this.ngbDateModel = {
        year: this.dateModel.year,
        month: this.dateModel.month,
        day: this.dateModel.day
      };
    }
  }

}
