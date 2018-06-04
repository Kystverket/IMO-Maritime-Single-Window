import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModelWithPassword } from "../models/UserModelWithPassword";
import { BaseRequest } from "../utils/base.request";
import { ConfigService } from "../utils/config.service";
import { AuthRequest } from "./auth.request.service";


@Injectable()
export class AccountService extends BaseRequest {
    // URLs
    private accountBaseUrl = "/account";
    private actionUrl: string;
    private registerUserUrl: string;
    private userUrl: string;
    private rolesUrl: string;
    private userClaimsUrl: string;
    private userNameUrl: string;
    private emailTakenUrl: string;
    private organizationForUserUrl: string;

    // Subjects & observables
    private userClaimsDataSource = new BehaviorSubject<any>(null);
    userClaimsData$ = this.userClaimsDataSource.asObservable();

    private userOrganizationDataSource = new BehaviorSubject<any>(null);
    userOrganizationData$ = this.userOrganizationDataSource.asObservable();

    constructor(
        private http: Http,
        authRequestService: AuthRequest,
        configService: ConfigService
    ) {
        super(configService, authRequestService);
        this.actionUrl = this.baseUrl + this.accountBaseUrl;
        this.userUrl = this.actionUrl + "/user";
        this.rolesUrl = this.actionUrl + "/roles";
        this.userClaimsUrl = this.userUrl + "/claims";
        this.userNameUrl = this.userUrl + "/name";
        this.emailTakenUrl = this.actionUrl + "/emailTaken";
    }

    getAllRoles() {
        let options = this.getRequestOptions();
        return this.http.get(this.rolesUrl, options)
            .map(res => res.json());
    }

    getRoles() {
        let options = this.getRequestOptions();
        return this.http
            .get(this.rolesUrl, options)
            .map(res => res.json());
    }

    setUserOrganization(data) {
        this.userOrganizationDataSource.next(data);
    }

    getUserClaims() {
        let options = this.getRequestOptions();
        return this.http.get(this.userClaimsUrl, options)
            .map(res => res.json());
    }
    setUserClaims(data) {
        this.userClaimsDataSource.next(data);
    }

    // Will be deprecated once email registration is implemented.
    registerUser(newUser: UserModelWithPassword) {
        let options = this.getRequestOptions();
        return this.http.post(this.userUrl, newUser, options);
    }

    getUserName() {
        let options = this.getRequestOptions();
        return this.http
            .get(this.userNameUrl, options)
            .map(res => res.json());
    }

    getUserByEmail(email: string) {
        let options = this.getRequestOptions();
        let uri = [this.userUrl, email].join('/');

        return this.http
            .get(uri, options)
            .map(res => res.json());
    }

    emailTaken(email: string) : Observable<boolean> {
        let options = this.getRequestOptions();
        let uri = [this.actionUrl, email].join('/');
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

}