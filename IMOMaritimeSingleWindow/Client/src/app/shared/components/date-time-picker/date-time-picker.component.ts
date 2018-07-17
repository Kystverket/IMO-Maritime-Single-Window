import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { DateTime } from '../../interfaces/dateTime.interface';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  providers: []
})
export class DateTimePickerComponent implements OnInit {

  @Input() header: string;

  @Output() dateTimeResult = new EventEmitter<DateTime>();

  dateTimeModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };

  validDateFormat = true;

  constructor() { }

  ngOnInit() { }

  dateChanged($event) {
    this.validDateFormat = this.hasValidDateFormat($event);
    this.persistData();
  }

  timeChanged($event) {
    this.persistData();
  }

  persistData() {
    if (this.dateTimeModel.date && this.validDateFormat && this.dateTimeModel.time) {
      this.dateTimeResult.emit(this.dateTimeModel);
    } else {
      this.dateTimeResult.emit(null);
    }
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string';
  }

  setDateTimeView(dateTime: DateTime) {
    this.dateTimeModel = dateTime;
  }

}
