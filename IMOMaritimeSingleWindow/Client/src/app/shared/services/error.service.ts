import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorService {

  private errorReasonSource = new BehaviorSubject<string>('Error');
  errorReason$ = this.errorReasonSource.asObservable();

  private errorMessageSource = new BehaviorSubject<string>('Something went wrong');
  errorMessage$ = this.errorMessageSource.asObservable();

  constructor() { }

  setErrorReason(reason: string) {
    this.errorReasonSource.next(reason);
  }

  setErrorMessage(message: string) {
    this.errorMessageSource.next(message);
  }

  setError(errorReason: string, errorMessage: string) {
    this.setErrorReason(errorReason);
    this.setErrorMessage(errorMessage);
  }

  setDefaultError() {
    this.setErrorReason('Error');
    this.setErrorMessage('Server error');
  }

  setDefaultHTTPError(error: HttpErrorResponse) {
    this.setErrorReason(`${error.status} ${error.statusText}`);
    this.setErrorMessage(error.statusText);
  }

}
