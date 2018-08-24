import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../utils/config.service';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Credentials } from '../interfaces/credentials.interface';
import { JWTResponse } from '../interfaces/jwt-response.interface';

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
    private http: HttpClient,
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

  protected /*override*/ handleError(error: HttpErrorResponse | any) {
    let errMsg: any;

    if (error instanceof HttpErrorResponse) {
      const ERROR = error as HttpErrorResponse;
      if (ERROR.status >= 500) {
        errMsg = `${ERROR.status} ${ERROR.statusText}`;
      } else if (ERROR.status >= 400) {
        errMsg = 'Login failed';
      } else if (ERROR.error.error instanceof SyntaxError) {
        errMsg = 'Application error';
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      return Observable.throw(errMsg);
    }
  }

  login(credentials: Credentials): Observable<JWTResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<JWTResponse>(
        this.baseUrl + '/auth/login',
        credentials,
        { headers }
      )
      .map(jwtResponse => {
        if (jwtResponse) {
          localStorage.setItem('auth_token', jwtResponse.auth_token);
          this.loggedIn = true;
          this._loggedInSource.next(true);
          this._authNavStatusSource.next(true);
        } else {
          this._loggedInSource.next(false);
          this._authNavStatusSource.next(false);
        }
        return jwtResponse;
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


}
