import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService, BaseService, ErrorService, LoginService } from 'app/shared/services/';
import { Observable } from 'rxjs';
import { BaseGuard } from '../../shared/interfaces/base-guard.interface';

@Injectable()
export class LoginGuard extends BaseService implements CanActivate, BaseGuard {
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
      return true;
    } else {
      return this.authService.hasValidToken()
        .toPromise()
        .then(() => {
          this.router.navigateByUrl('');
          return false;
        })
        .catch((error: HttpErrorResponse) => {
          console.log(error);
          const _canActivate: boolean = this.navigateByError(error);
          return _canActivate;
        });
    }
  }

  navigateByError(error: HttpErrorResponse | any): boolean {
    // Redirects user to correct page according to the error
    if (error instanceof HttpErrorResponse) {
      const httpError = error as HttpErrorResponse;
      if (httpError.status >= 500) {
        this.errorService.setDefaultHTTPError(error);
        this.router.navigate(['/error']);
      } else if (httpError.status === 401 || httpError.status === 403) {
        //  Unauthorized - token invalid
        /*  User tries to access login route with an invalid token
        *   This is OK, just remove relevant variables from localStorage
        *   so user can receive a new token upon login. */
        this.loginService.logout();
        return true;
      } else {
        this.errorService.setDefaultHTTPError(httpError);
        this.router.navigate(['/error']);
      }
    } else {
      this.errorService.setDefaultError();
      this.router.navigate(['/error']);
    }

    return false;
  }
}
