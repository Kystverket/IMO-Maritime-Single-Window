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

  @Input() dateTimeModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };

  @Output() dateTimeResult = new EventEmitter<DateTime>();
  @Output() dateFormatError = new EventEmitter<boolean>();

  validDateFormat = true;

  constructor() { }

  ngOnInit() { }

  dateChanged(dateResult) {
    this.validDateFormat = this.hasValidDateFormat(dateResult);
    this.persistData();
  }

  timeChanged() {
    this.persistData();
  }

  persistData() {
    this.dateFormatError.emit(!this.validDateFormat);
    if (this.dateTimeModel.date && this.validDateFormat) {
      if (this.dateTimeModel.time == null) {
        this.dateTimeModel.time = new NgbTime(0, 0, 0);
      }
      this.dateTimeResult.emit(this.dateTimeModel);
    } else {
      this.dateTimeResult.emit(null);
    }
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string';
  }
}
