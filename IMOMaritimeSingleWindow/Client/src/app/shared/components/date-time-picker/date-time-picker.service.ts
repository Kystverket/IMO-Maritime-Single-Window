import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DateTimePickerService {

  constructor() { }

  private dateTimeSource = new BehaviorSubject<any>(null);
  dateTimeData$ = this.dateTimeSource.asObservable();

  setDateTimeData(data) {
    this.dateTimeSource.next(data);
  }
}
