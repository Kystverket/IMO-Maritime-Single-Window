import { Injectable } from '@angular/core';
import { BaseRequest } from 'app/shared/utils/base.request';
import { ConfigService } from 'app/shared/utils/config.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { MenuClaims } from '../constants/menu-claims';

@Injectable()
export class AuthService extends BaseRequest {
  private authBaseUrl = '/auth';
  private actionUrl;

  constructor(
    private http: HttpClient,
    configService: ConfigService
  ) {
    super(configService);
    this.actionUrl = this.baseUrl + this.authBaseUrl;
  }

  isAdmin(): Observable<boolean> {
    return this.http
      .get<boolean>(this.actionUrl + '/isAdmin');
  }

  canSetClearance(): Observable<any> {
    return this.http
      .get('api/test/canSetPortCallClearance');
  }

  hasToken(): boolean {
    return localStorage.getItem('auth_token') != null;
  }

  hasValidToken(): Observable<boolean> {
    return this.http
      .get<boolean>(this.actionUrl + '/hasValidToken');
  }

  hasPortCallMenuClaim(claims: any[]): boolean {
    return claims.filter(claim => claim.type === MenuClaims.TYPE)
    .some(claim => claim.value === MenuClaims.PORT_CALL);
  }

}
