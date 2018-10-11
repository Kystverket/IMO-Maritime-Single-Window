import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'app/shared/utils/config.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { PasswordChangeModel } from '../models/password-change-model';
import { PasswordResetModel } from '../models/password-reset-model';
import { TokenQueryModel } from '../models/token-query-model';
import { UserModel } from '../models/user-model';
import { BaseRequest } from '../utils/base.request';

@Injectable()
export class AccountService extends BaseRequest {
  // URLs
  private accountBaseUrl = '/account';
  private actionUrl: string;
  private registerUserUrl: string;
  private userUrl: string;
  private rolesUrl: string;
  private userClaimsUrl: string;
  private userNameUrl: string;
  private emailUrl: string;
  private passwordUrl: string;
  private emailTakenUrl: string;
  private organizationForUserUrl: string;
  private accountOverviewUrl: string;

  // Subjects & observables
  private userClaimsDataSource = new BehaviorSubject<any[]>(null);
  userClaimsData$ = this.userClaimsDataSource.asObservable();

  private userOrganizationDataSource = new BehaviorSubject<any>(null);
  userOrganizationData$ = this.userOrganizationDataSource.asObservable();

  constructor(private http: HttpClient, configService: ConfigService) {
    super(configService);
    this.actionUrl = this.baseUrl + this.accountBaseUrl;  /* /api/account/account             */
    this.userUrl = this.actionUrl + '/user';               /* /api/account/user                */
    this.rolesUrl = this.actionUrl + '/roles';            /* /api/account/roles               */
    this.userClaimsUrl = this.userUrl + '/claims';        /* /api/account/claims              */
    this.userNameUrl = this.userUrl + '/displayName';     /* /api/account/user/displayName    */
    this.emailUrl = this.userUrl + '/email';              /* /api/account/user/email          */
    this.passwordUrl = this.userUrl + '/password';        /* /api/account/user/password       */
    this.emailTakenUrl = this.actionUrl + '/emailTaken';  /* /api/account/emailTaken          */
    this.accountOverviewUrl = [this.actionUrl, 'details', 'overview'].join('/');  // /api/account/details/overview
  }

  getAllRoles(): Observable<any> {
    return this.http.get(this.rolesUrl);
  }

  setUserOrganization(data) {
    this.userOrganizationDataSource.next(data);
  }

  getUserClaims(): Observable<any[]> {
    return this.http.get<any[]>(this.userClaimsUrl);
  }

  setUserClaims(data: any[]) {
    this.userClaimsDataSource.next(data);
    localStorage.setItem('user_claims', JSON.stringify(data));
  }

  registerUser(newUser: UserModel): Observable<any> {
    return this.http.post(this.userUrl, newUser);
  }

  getDisplayName(): Observable<string> {
    return this.http.get(this.userNameUrl,
      { responseType: 'text' });
  }

  getUserByEmail(email: string): Observable<any> {
    const uri = [this.userUrl, email].join('/');
    return this.http.get(uri);
  }

  emailTaken(email: string): Observable<boolean> {
    const uri = [this.emailTakenUrl, email].join('/');
    return this.http.get<boolean>(uri);
  }

  changeRole(userName: string, roleName: string) {
    /* Not yet implemented */
  }

  confirmEmail(queryModel: TokenQueryModel): Observable<TokenQueryModel> {
    const uri = [this.emailUrl, 'confirm'].join('/');
    return this.http
      .post(uri, null, {
        params: {
          userId: queryModel.userId,
          token: queryModel.token
        },
        responseType: 'text'
      })
      .map(token => {
        return new TokenQueryModel(queryModel.userId, token);
      })
      .catch(this.handleError);
  }

  // Allow anonymous
  requestPasswordReset(userName: string): Observable<any> {
    const uri = [this.passwordUrl, 'forgotten'].join('/');
    return this.http
      .get(uri, {
        params: {
          userName: userName
        }
      })
      .catch(this.handleError);
  }

  changePassword(model: PasswordChangeModel): Observable<any> {
    const uri = [this.passwordUrl, 'change'].join('/');
    return this.http
      .put(uri, model)
      .catch(this.handleError);
  }

  // Allow anonymous
  resetPassword(model: PasswordResetModel): Observable<any> {
    const uri = [this.passwordUrl, 'reset'].join('/');
    return this.http
      .put(uri, model)
      .catch(this.handleError);
  }

  getAccountOverview(): Observable<any> {
    return this.http
      .get(this.accountOverviewUrl)
      .catch(this.handleError);
  }

}
