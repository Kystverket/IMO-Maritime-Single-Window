import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService, BaseService, ErrorService, LoginService } from 'app/shared/services/';
import { Observable } from 'rxjs';
import { BaseGuard } from '../shared/interfaces/base-guard.interface';

@Injectable()
export class RootGuard extends BaseService implements CanActivate, CanLoad, BaseGuard {
  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService,
    private errorService: ErrorService
  ) {
    super();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.authService.hasToken()) {
      this.loginService.logout(); // Clear remaining cached data
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      return this.authService.hasValidToken().map(
        tokenValid => true,
        error => false
      ).catch((error: HttpErrorResponse) => {
        this.navigateByError(error);
        return this.handleError(error);
      });
    }
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.hasToken()) {
      return false;
    } else {
      return this.authService.hasValidToken().map(
        tokenValid => true,
        error => false
      ).catch((error: HttpErrorResponse) => {
        return this.handleError(error);
      });
    }
  }

  navigateByError(error: HttpErrorResponse | any) {
    // Redirects user to correct page according to the error
    if (error instanceof HttpErrorResponse) {
      const httpError = error as HttpErrorResponse;
      if (httpError.status >= 500) {
        this.errorService.setDefaultHTTPError(httpError);
        this.router.navigate(['/error']);
      } else if (httpError.status === 401 || httpError.status === 403) {
        // Unauthorized - token invalid
        this.loginService.logout();
        this.errorService.setErrorReason(`${httpError.status} ${httpError.statusText}`);
        this.errorService.setErrorMessage('Token was invalid');
        this.router.navigate(['/auth/login']);
      } else {
        this.loginService.logout();
        this.errorService.setDefaultHTTPError(httpError);
        this.router.navigate(['/error']);
      }
    } else {
      this.errorService.setDefaultError();
      this.router.navigate(['/error']);
    }
  }
}
