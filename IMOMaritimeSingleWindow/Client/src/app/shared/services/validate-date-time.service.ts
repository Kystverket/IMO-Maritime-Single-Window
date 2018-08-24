import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Injectable()
export class ValidateDateTimeService {

  constructor() { }

  checkDocumentDatesError(beforeDateTime, afterDateTime): Boolean {
    // The dates are in the Date format
    if (beforeDateTime && afterDateTime) {

      if (beforeDateTime.date && beforeDateTime.time && afterDateTime.date && afterDateTime.time) {
        // TODO: Insert time for DateTimePickerComponent
        beforeDateTime = beforeDateTime != null ? this.getNgbDateTimeFormat(beforeDateTime).date : null;
        afterDateTime = afterDateTime != null ? this.getNgbDateTimeFormat(afterDateTime).date : null;
      } else {
        beforeDateTime = beforeDateTime != null ? this.getNgbDateFormat(beforeDateTime) : null;
        afterDateTime = afterDateTime != null ? this.getNgbDateFormat(afterDateTime) : null;
      }

      if (afterDateTime.equals(beforeDateTime) || afterDateTime.before(beforeDateTime)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getNgbDateFormat(date): NgbDate {
    const newDate = new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    return newDate;
  }

  getNgbDateTimeFormat(dateTime) {
    const newDate = new NgbDate(dateTime.date.getFullYear(), dateTime.date.getMonth() + 1, dateTime.date.getDate());
    const newTime = new NgbTime(dateTime.time);
    const newDateTime = {date: newDate, time: newTime};
    return newDateTime;
  }

  dateBeforeToday(date): Boolean {
    const newDate = this.getNgbDateFormat(date);
    const today = this.getNgbDateFormat(new Date());
    return newDate.before(today);
  }

}
