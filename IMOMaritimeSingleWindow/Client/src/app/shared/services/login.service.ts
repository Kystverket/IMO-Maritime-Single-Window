import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../utils/config.service';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  login(userName, password) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(
        this.baseUrl + '/auth/login',
        JSON.stringify({ userName, password }),
        { headers }
      )
      .map(res => JSON.stringify(res))
      .map(res => {
        if (res) {
          localStorage.setItem('auth_token', JSON.parse(res).auth_token);
          this.loggedIn = true;
          this._loggedInSource.next(true);
          this._authNavStatusSource.next(true);
          return true;
        }
        this._loggedInSource.next(false);
        this._authNavStatusSource.next(false);
        return false;
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
