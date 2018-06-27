import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../utils/config.service';
import { AccountService } from './account.service';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/shared/services/user.service.ts

@Injectable()
export class LoginService extends BaseService {
  baseUrl = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private _loggedInSource = new BehaviorSubject<boolean>(false);
  loggedIn$ = this._loggedInSource.asObservable();
  private loggedIn = false;

  constructor(
    private http: Http,
    private configService: ConfigService,
    private jwtHelperService: JwtHelperService
  ) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
    this.jwtHelperService = new JwtHelperService({
      tokenGetter: () => localStorage.getItem('')
    });
  }


  protected /*override*/ handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      if (error.status === 400) {
        console.log('error instanceof Response && error.status == 400');
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        console.log('error instanceof Response && error.status != 400');
        errMsg = "Server error";
        // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      }
    } else {
      if (error.status === 400) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        // errMsg = "Server error";
        errMsg = error.message ? error.message : error.toString();
      }
      // console.log(error.constructor.name);
      // console.log(error.json());
      // errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  login(userName, password) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        this.baseUrl + '/auth/login',
        JSON.stringify({ userName, password }),
        { headers }
      )
      .map(res => {
        if (this.tryParseAsJson(res)) {
          localStorage.setItem('auth_token', res.json().auth_token);
          this.loggedIn = true;
          this._loggedInSource.next(true);
          this._authNavStatusSource.next(true);
          return true;
        }
        this._loggedInSource.next(false);
        this._authNavStatusSource.next(false);
        return false;
      }, error => {
        console.log('error logging in', error);
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_claims');
    this.loggedIn = false;
    this._loggedInSource.next(false);
    this._authNavStatusSource.next(false);
  }

  // Tips from https://ryanchenkie.com/angular-authentication-using-route-guards
  isLoggedIn() {
    // Get token from localStorage
    const token = localStorage.getItem('auth_token');
    // Check whether the token is expired
    const isExpired = this.jwtHelperService.isTokenExpired(token);

    return !isExpired;
  }

  private tryParseAsJson(error: any) {
    let response: any;
    try {
        response = error.json();
    } catch (jsonError) {
        return false;
    }
    return true;
}

}
