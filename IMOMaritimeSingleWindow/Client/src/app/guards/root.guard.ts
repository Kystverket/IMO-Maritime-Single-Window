import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/shared/services/auth-service';
import { LoginService } from 'app/shared/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseService } from '../shared/services/base.service';
import { BaseGuard } from '../shared/interfaces/base-guard.interface';

@Injectable()
export class RootGuard extends BaseService implements CanActivate, BaseGuard {
  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
  ) {
    super();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('root guard');

    if (!this.authService.hasToken()) {
      console.log('does not have token');

      this.loginService.logout(); // Clear remaining cached data
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      console.log('validating token...');

      return this.authService.hasValidToken().map(
        tokenValid => true,
        error => false
      ).catch((error: HttpErrorResponse) => {
        this.navigateByError(error);
        return this.handleError(error);
      });
    }
  }

  navigateByError(error: HttpErrorResponse | any) {
    // Redirects user to correct page according to the error
    console.log('redirecting...');
    if (error instanceof HttpErrorResponse) {
      const ERROR = error as HttpErrorResponse;
      if (ERROR.status >= 500) {
        this.router.navigate(['/error']);
      } else if (ERROR.status === 403) {
        // Unauthorized - token invalid
        this.loginService.logout();
        this.router.navigate(['/auth/login']);
      }
    } else {
      this.router.navigate(['/error']);
    }
  }
}
