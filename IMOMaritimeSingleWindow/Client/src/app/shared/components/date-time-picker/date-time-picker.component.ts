import { Component, Input, OnInit } from '@angular/core';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { DateTime } from '../../interfaces/dateTime.interface';
import { DateTimePickerService } from './date-time-picker.service';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  providers: [DateTimePickerService]
})
export class DateTimePickerComponent implements OnInit {

  @Input() header: string;

  dateTimeModel: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };

  validDateFormat = true;

  constructor(private dateTimePickerService: DateTimePickerService) { }

  ngOnInit() {
    this.dateTimePickerService.dateTimeData$.subscribe(
      data => {
        if (data) {
          this.dateTimeModel = data;
        }
      }
    );
  }

  dateChanged($event) {
    this.validDateFormat = this.hasValidDateFormat($event);
    this.persistData();
  }

  timeChanged($event) {
    this.persistData();
  }

  persistData() {
    if (this.dateTimeModel.date && this.validDateFormat && this.dateTimeModel.time) {
      this.dateTimePickerService.setDateTimeData(this.dateTimeModel);
    } else {
      this.dateTimePickerService.setDateTimeData(null);
    }
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string';
  }

  getService() {
    return this.dateTimePickerService;
  }

}
