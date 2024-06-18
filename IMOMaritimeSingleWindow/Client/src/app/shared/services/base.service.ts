// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/shared/services/base.service.ts

import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseService {
  constructor() {}
  protected handleModelOrAppError(error: any) {
    const applicationError = error.headers.get('Application-Error');

    // either applicationError in header or model error in body
    if (applicationError) {
      return Observable.throw(applicationError);
    }

    let modelStateErrors = '';
    const serverError = error.json();

    if (!serverError.type) {
      for (const key in serverError) {
        if (serverError[key]) { modelStateErrors += serverError[key] + '\n'; }
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return Observable.throw(modelStateErrors || 'Server error');
  }

  protected handleError(error: HttpErrorResponse | any) {
    let errMsg: any;
    console.log('an error occurred!');

    if (error instanceof HttpErrorResponse) {
      const ERROR = error as HttpErrorResponse;
      if (ERROR.status >= 500) {
        errMsg = `${ERROR.status} ${ERROR.statusText}`;
      } else if (ERROR.status >= 400) {
        errMsg = 'Action failed';
      } else if (ERROR.error.error instanceof SyntaxError) {
        errMsg = 'Application error';
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      return Observable.throw(errMsg);
    }
  }
}
