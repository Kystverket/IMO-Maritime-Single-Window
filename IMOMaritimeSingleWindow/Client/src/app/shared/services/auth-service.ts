import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BaseRequest } from '../utils/base.request';
import { ConfigService } from '../utils/config.service';
import { AuthRequest } from './auth.request.service';

@Injectable()
export class AuthService extends BaseRequest {

  private authBaseUrl = "/auth";
  private actionUrl;

  constructor(
    private http: Http,
    private authService: AuthRequest,
    configService: ConfigService
  ) {
    super(configService, authService);
    this.actionUrl = this.baseUrl + this.authBaseUrl;
  }

  isAdmin(): Observable<boolean> {
    let auth_header = this.authService.GetHeaders();
    let options = new RequestOptions({ headers: auth_header });
    return this.http
      .get(this.actionUrl + "/isAdmin", options)
      .map(res => res.json());
  }

  canSetClearance(): Observable<any> {
    let auth_header = this.authService.GetHeaders();
    let options = new RequestOptions({ headers: auth_header });
    return this.http
      //.get(this.actionUrl + "/canSetPortCallClearance", options);
      .get("api/test/canSetPortCallClearance", options)
      .map(res => res.json());
  }

  hasToken(): boolean {
    return localStorage.getItem("auth_token") != null;
  }

  hasValidToken(): Observable<boolean> {
    let auth_header = this.authService.GetHeaders();
    let options = new RequestOptions({ headers: auth_header });
    return this.http
      .get(this.actionUrl + "/hasValidToken", options)
      .map(res => res.json());
  }
}
