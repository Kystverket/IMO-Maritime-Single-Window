import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { NgbTime } from 'app/shared/utils/ngb-time';
import { DateTime } from '../../interfaces/dateTime.interface';

@Component({
  standalone: false,
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: []
})
export class DateTimePickerComponent implements OnInit {
  @Input() header: string;

  @Input() dateTimeInput: DateTime;

  @Output() dateTimeResult = new EventEmitter<DateTime>();
  @Output() dateFormatError = new EventEmitter<boolean>();

  @Input() dateTimeModel: DateTime;

  validDateFormat = true;

  constructor() { }

  ngOnInit() {
    if (this.dateTimeInput != null) {
      this.dateTimeModel = JSON.parse(JSON.stringify(this.dateTimeInput));
    } else if (this.dateTimeModel == null) {
      this.dateTimeModel = {
        date: null,
        time: new NgbTime(0, 0, 0)
      };
    }
  }

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
