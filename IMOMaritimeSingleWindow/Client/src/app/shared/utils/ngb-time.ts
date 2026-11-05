import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

// ng-bootstrap no longer exports NgbTime; this keeps the small subset of the old class the app relies on.
export class NgbTime implements NgbTimeStruct {
  hour: number;
  minute: number;
  second: number;

  constructor(hourOrTime?: number | NgbTimeStruct, minute?: number, second?: number) {
    if (hourOrTime !== null && typeof hourOrTime === 'object') {
      this.hour = hourOrTime.hour;
      this.minute = hourOrTime.minute;
      this.second = hourOrTime.second;
    } else {
      this.hour = hourOrTime as number;
      this.minute = minute;
      this.second = second;
    }
  }
}
