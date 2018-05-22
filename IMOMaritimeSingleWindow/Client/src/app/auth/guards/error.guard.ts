import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../shared/services/auth-service';

@Injectable()
export class ErrorGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.hasValidToken()
      .map(tokenValid => {
        if(!tokenValid) {
          this.router.navigate(['/login']);
          return false;
        } else {
          // TODO: redirect to an error page
          this.router.navigate(['']);
          return true;
        }
      })
  }
}
