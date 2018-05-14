import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from "../models/user-model";
import { BaseRequest } from "../utils/base.request";
import { ConfigService } from "../utils/config.service";
import { AuthRequest } from "./auth.request.service";


@Injectable()
export class AccountService extends BaseRequest {
    // URLs
    private accountBaseUrl = "/account";
    private actionUrl: string;
    private registerUrl: string;
    private rolesUrl: string;
    private organizationForUserUrl: string;
    // Request headers & options
    private authorizationHeaders: Headers;
    private requestOptions: RequestOptions;
    // Subjects & observables
    private userClaimsDataSource = new BehaviorSubject<any>(null);
    userClaimsData$ = this.userClaimsDataSource.asObservable();

    private userOrganizationDataSource = new BehaviorSubject<any>(null);
    userOrganizationData$ = this.userOrganizationDataSource.asObservable();

    constructor(
        private http: Http,
        private authRequestService: AuthRequest,
        configService: ConfigService
    ) {
        super(configService);

        this.actionUrl = this.baseUrl + this.accountBaseUrl;
        this.registerUrl = this.actionUrl + "/register";
        this.rolesUrl = this.actionUrl + "/getrole";
    }

    getAllRoles() {
        return this.http.get(this.rolesUrl + "/all")
            .map(res => res.json());
    }
    getRoles() {
        var auth_headers = this.authRequestService.GetHeaders();
        let options = new RequestOptions({ headers: auth_headers })
        return this.http
            .get(this.rolesUrl, options)
            .map(res => res.json());
    }

    setUserOrganization(data) {
        this.userOrganizationDataSource.next(data);
    }

    getUserClaims() {
        const auth_header = this.authRequestService.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http.get(this.actionUrl + "/user/claims", options)
            .map(res => res.json());
    }
    setUserClaims(data) {
        this.userClaimsDataSource.next(data);
    }

    registerUser(newUser: UserModel) {
        return this.http.post(this.registerUrl, newUser)
            .map(res => res.json());
    }

    getUserName() {
        const auth_header = this.authRequestService.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http
            .get(this.actionUrl + "/user/name", options)
            .map(res => res.json());
    }

}