import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/shared/services/auth-service';
import { LoginService } from 'app/shared/services/login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.authService.hasToken()) {
      return true;
    } else {
      return this.authService.hasValidToken()
        .map(tokenValid => {
          console.log(tokenValid);
          if (tokenValid) {
            this.router.navigate(['']);
            return false;
          } else {
            /* User tries to access login route with an invalid token
             * This is OK, just remove relevant variables from localStorage
             * so user can receive a new token upon login. */
            this.loginService.logout();
            return true;
          }
        });
    }

  }
}
