import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Nicolas Henneaux - edited Dec 4 '17 at 20:54
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
@Injectable()
export class AuthenticateInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
          /* Auth Guard checks authorized user (e.g. by looking into LocalStorage).
          On 401/403 the stored credentials are cleared and the page is reloaded, which triggers the
          Guard checks and forwards to the login screen. */
          localStorage.removeItem('auth_token');
          localStorage.removeItem('user_claims');
          const loc = window.location;
          const baseUrl = loc.protocol + '//' + loc.hostname + (loc.port ? (':' + loc.port) : '') + '/';
          window.location.href = baseUrl + '?' + new Date().getMilliseconds();
        }
        return throwError(() => error);
      })
    );
  }
}
