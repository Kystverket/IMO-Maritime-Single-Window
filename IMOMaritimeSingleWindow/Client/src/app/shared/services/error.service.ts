import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

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

}
