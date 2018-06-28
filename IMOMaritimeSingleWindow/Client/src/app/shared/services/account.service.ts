import { AuthRequest } from './auth.request.service';
import { BaseRequest } from 'app/shared/utils/base.request';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from 'app/shared/utils/config.service';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TokenQueryModel } from '../models/token-query-model';
import { UserModelWithPassword } from 'app/shared/models/user-model-with-password';
import { PasswordResetModel } from '../models/password-reset-model';
import { PasswordChangeModel } from '../models/password-change-model';


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

    // Subjects & observables
    private userClaimsDataSource = new BehaviorSubject<any>(null);
    userClaimsData$ = this.userClaimsDataSource.asObservable();

    private userOrganizationDataSource = new BehaviorSubject<any>(null);
    userOrganizationData$ = this.userOrganizationDataSource.asObservable();

    constructor(
        private http: Http,
        private httpClient: HttpClient,
        authRequestService: AuthRequest,
        configService: ConfigService
    ) {
        super(configService, authRequestService);
        this.actionUrl = this.baseUrl + this.accountBaseUrl;    /* /api/account/                    */
        this.userUrl = this.actionUrl + '/user';                /* /api/account/user                */
        this.rolesUrl = this.actionUrl + '/roles';              /* /api/account/roles               */
        this.userClaimsUrl = this.userUrl + '/claims';          /* /api/account/claims              */
        this.userNameUrl = this.userUrl + '/name';              /* /api/account/user/name           */
        this.emailUrl = this.userUrl + '/email';                /* /api/account/user/email          */
        this.passwordUrl = this.userUrl + '/password';          /* /api/account/user/password       */
        this.emailTakenUrl = this.actionUrl + '/emailTaken';    /* /api/account/emailTaken          */

    }

    getAllRoles() {
        const options = this.getRequestOptions();
        return this.http
            .get(this.rolesUrl, options)
            .map(res => res.json());
    }

    setUserOrganization(data) {
        this.userOrganizationDataSource.next(data);
    }

    getUserClaims() {
        const options = this.getRequestOptions();
        return this.http.get(this.userClaimsUrl, options)
            .map(res => res.json());
    }
    setUserClaims(data) {
        this.userClaimsDataSource.next(data);
    }

    // Will be deprecated once email registration is implemented.
    registerUser(newUser: UserModelWithPassword) {
        const options = this.getRequestOptions();
        return this.http.post(this.userUrl, newUser, options);
    }

    getUserName() {
        const options = this.getRequestOptions();
        return this.http
            .get(this.userNameUrl, options)
            .map(res => res.json());
    }

    getUserByEmail(email: string) {
        const options = this.getRequestOptions();
        const uri = [this.userUrl, email].join('/');

        return this.http
            .get(uri, options)
            .map(res => res.json());
    }

    emailTaken(email: string): Observable<boolean> {
        const options = this.getRequestOptions();
        const uri = [this.emailTakenUrl, email].join('/');
        console.log(uri);

        return this.http
            .get(uri, options)
            .map(res => res.json());
    }

    changeRole(userName: string, roleName: string) {
        /* Not yet implemented
        return this.http.post(url,body)
            .map(res => res.json());
         */
    }

    confirmEmail(queryModel: TokenQueryModel): Observable<TokenQueryModel> {
        // return Observable.of(false);

        // const uri = [this.emailUrl, 'confirm'].join('/');
        // return this.http
        //     .post(uri, JSON.stringify(queryModel))
        //     .map(res => res.json());
        
            const uri = [this.emailUrl, 'confirm'].join('/');
            return this.http.post(uri, null, {
                params: {
                    userId: queryModel.userId,
                    token: queryModel.token
                }
            })
                .map(result => {
                    const token = result.json();
                    const model = new TokenQueryModel(queryModel.userId, token);
                    console.log(model);
                    return model;
                });
    }

    sendPasswordResetLink(userName: string) {
        const uri = [this.passwordUrl, 'forgotten'].join('/');
        // Implementation for testing purposes
        return this.http
            .get(uri, {
                params: {
                    userName: userName
                }
            })
            .map(res => res.text());
        // Actual implementation comes here...
    }

    resetPassword(model: PasswordResetModel): Observable<boolean> {
        const uri = [this.passwordUrl, 'reset'].join('/');
        return this.http.put(uri, model)
            .map(res => {
                return res.json();
            }, error => {
                return Observable.of(false);
            }
            );
    }

    changePassword(model: PasswordChangeModel): Observable<boolean> {
        const uri = [this.passwordUrl, 'change'].join('/');
        return this.http.put(uri, model)
            .map(res => {
                    return res.json();
                }, error => {
                    return Observable.of(false);
                }
            );
    }

    getPasswordResetToken(userId: string): Observable<string> {
        return Observable.of('default token');
        /* const uri = [this.passwordUrl, 'reset'].join('/');
        return this.httpClient
            .post(uri, null, {
                params: {
                    userId
                }
            })
            .map(res => res.toString()); */
    }

    // getPasswordResetToken() {
    //     this.route.queryParams.subscribe((queryParams: any) => {
    //         const uri = [this.emailUrl, 'confirm'].join('/');

    //         return this.http
    //             .post(uri, null, {
    //                 params: {
    //                     userId: queryParams.userId,
    //                     emailConfirmationToken: queryParams.emailConfirmationToken
    //                 }
    //             })
    //             .map(res => res.text());
    //     });
    // }

    getEmailLink() {
        const uri = [this.actionUrl, 'emailLink'].join('/');
        return this.http
            .get(uri)
            .map(res => res.text());
    }

}
