import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class EmailConfirmationGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.paramsNull([next.queryParams['userId'], next.queryParams['token']])) {
        this.router.navigate(['/error']);
        return false;
      }
      return true;
  }

  // Checks if any of the query parameters are null/undefined or empty string
  paramsNull(params: any[]): boolean {
    return params.some(param => {
      // Checks for null/undefined and empty string
      return !param || param === '';
    });
  }
}
