import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../shared/services/auth-service';

@Injectable()
export class EmailConfirmationGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // const queryPar = next.queryParams;
    // console.log(queryPar);

    // No redirection desired
    return true;
  }
}
