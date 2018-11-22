import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ErrorService } from '../shared/services/error.service';

@Injectable()
export class ErrorGuard implements CanActivate {

  constructor(
    private router: Router,
    private errorService: ErrorService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (state.url !== '/error') {
        this.errorService.setErrorReason('Page not found');
        this.errorService.setErrorMessage('The page you requested could not be found.');
        this.router.navigate(['/error']);
        return false;
      }
      return true;
  }

}
