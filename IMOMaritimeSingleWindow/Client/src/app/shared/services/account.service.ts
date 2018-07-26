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
        private http: HttpClient,
        configService: ConfigService
    ) {
        super(configService);
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
        return this.http
            .get(this.rolesUrl);
    }

    setUserOrganization(data) {
        this.userOrganizationDataSource.next(data);
    }

    getUserClaims(): Observable<any> {
        return this.http.get(this.userClaimsUrl);
    }

    setUserClaims(data) {
        this.userClaimsDataSource.next(data);
    }

    // Will be deprecated once email registration is implemented.
    registerUser(newUser: UserModelWithPassword): Observable<any> {
        return this.http.post(this.userUrl, newUser);
    }

    getUserName(): Observable<any> {
        return this.http
            .get(this.userNameUrl);
    }

    getUserByEmail(email: string): Observable<any> {
        const uri = [this.userUrl, email].join('/');

        return this.http
            .get(uri);
    }

    emailTaken(email: string): Observable<boolean> {
        const uri = [this.emailTakenUrl, email].join('/');
        return this.http
            .get<boolean>(uri);
    }

    changeRole(userName: string, roleName: string) {
        /* Not yet implemented
        return this.http.post(url,body)
            .map(res => res.json());
         */
    }

    confirmEmail(queryModel: TokenQueryModel): Observable<boolean> {
        return Observable.of(true);
        /* const uri = [this.emailUrl, 'confirm'].join('/');
        return this.http
            .post(uri, JSON.stringify(queryModel))
            .map(res => res.json()); */
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

    getEmailLink(): Observable<any> {
        const uri = [this.actionUrl, 'emailLink'].join('/');
        return this.http
            .get(uri);
    }

}
