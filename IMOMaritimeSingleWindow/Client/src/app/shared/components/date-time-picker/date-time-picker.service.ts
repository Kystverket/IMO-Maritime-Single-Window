import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DateTime } from '../../interfaces/dateTime.interface';

@Injectable()
export class DateTimePickerService {

  constructor() { }

  private dateTimeSource = new BehaviorSubject<DateTime>(null);
  dateTimeData$ = this.dateTimeSource.asObservable();

  setDateTimeData(data) {
    this.dateTimeSource.next(data);
  }
}
