import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/shared/services/auth-service';
import { LoginService } from 'app/shared/services/login.service';
import { BaseService } from '../../shared/services/base.service';
import { BaseGuard } from '../../shared/interfaces/base-guard.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LoginGuard extends BaseService implements CanActivate, BaseGuard {

  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
  ) {
    super();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('login guard');
    if (!this.authService.hasToken()) {
      return true;
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

  navigateByError(error: HttpErrorResponse | any): void {
    // Redirects user to correct page according to the error
    console.log('redirecting...');
    if (error instanceof HttpErrorResponse) {
      const ERROR = error as HttpErrorResponse;
      if (ERROR.status >= 500) {
        this.router.navigate(['/error']);
      } else if (ERROR.status === 403) {
        //  Unauthorized - token invalid
        /*  User tries to access login route with an invalid token
        *   This is OK, just remove relevant variables from localStorage
        *   so user can receive a new token upon login. */
        this.loginService.logout();
      }
    } else {
      this.router.navigate(['/error']);
    }
  }

}
