import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../../shared/services/login.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      let isLoggedIn = this.loginService.isLoggedIn();
      if(isLoggedIn){
        this.router.navigate(['']);
        return false;
      }
      return true;
  }
}
