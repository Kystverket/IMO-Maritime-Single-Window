import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class PasswordService {

  // private resetRequestedSource = new BehaviorSubject<boolean>(false);
  // resetRequested$ = this.resetRequestedSource.asObservable();

  resetRequested = false;

  constructor() { }

  setResetRequested(value: boolean) {
    this.resetRequested = value;
  }
  isResetRequested(): boolean {
    return this.resetRequested;
  }
}
