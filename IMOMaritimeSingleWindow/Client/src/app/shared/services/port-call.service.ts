import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class PortCallService {

  private shipDataSource = new BehaviorSubject<any>(null);
  shipData$ = this.shipDataSource.asObservable();

  setShipData(data) {
    this.shipDataSource.next(data);
  }

}
