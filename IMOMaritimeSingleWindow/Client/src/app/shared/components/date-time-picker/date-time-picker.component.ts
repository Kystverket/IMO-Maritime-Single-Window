import { Component, OnInit, Input } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { DateTimePickerService } from './date-time-picker.service';

@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  providers: [DateTimePickerService]
})
export class DateTimePickerComponent implements OnInit {

  @Input() header: string;

  dateTimeModel = {
    dateModel: null,
    timeModel: new NgbTime(0, 0, 0)
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
    if (this.dateTimeModel.dateModel && this.validDateFormat && this.dateTimeModel.timeModel) {
      this.dateTimePickerService.setDateTimeData(this.dateTimeModel);
    }
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string';
  }

}
