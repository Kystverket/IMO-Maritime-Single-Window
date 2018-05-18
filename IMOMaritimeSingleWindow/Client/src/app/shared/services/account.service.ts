import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from "../models/user-model";
import { BaseRequest } from "../utils/base.request";
import { ConfigService } from "../utils/config.service";
import { AuthRequest } from "./auth.request.service";
import { UserModelWithPassword } from "../models/UserModelWithPassword";


@Injectable()
export class AccountService extends BaseRequest {
    // URLs
    private accountBaseUrl = "/account";
    private actionUrl: string;
    private registerUserUrl: string;
    private userUrl: string;
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
        this.userUrl = this.actionUrl + "/user";

        this.rolesUrl = this.actionUrl + "/roles";
    }

    getAllRoles() {
        var auth_headers = this.authRequestService.GetHeaders();
        let options = new RequestOptions({ headers: auth_headers })
        return this.http.get(this.rolesUrl, options)
            .map(res => res.json());
    }

    getUserRole() {
        var auth_headers = this.authRequestService.GetHeaders();
        let options = new RequestOptions({ headers: auth_headers })
        return this.http.get(this.userUrl+"/role")
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
        return this.http.get(this.userUrl + "/claims", options)
            .map(res => res.json());
    }
    setUserClaims(data) {
        this.userClaimsDataSource.next(data);
    }

    registerUser(newUser: UserModel) {
        const auth_header = this.authRequestService.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http.post(this.userUrl, newUser, options)
            .map(res => res.json());
    }

    registerUserWithPassword(newUser: UserModelWithPassword) {
        const auth_header = this.authRequestService.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http.post(this.registerUrl+"withpw", newUser, options);
    }

    getUserName() {
        const auth_header = this.authRequestService.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http
            .get(this.actionUrl + "/user/name", options)
            .map(res => res.json());
    }

    getUserByEmail(email: string) {
        const auth_header = this.authRequestService.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http
            .get(this.actionUrl + "/user/"+email, options)
            .map(res => res.json());
    }

    userExistsByEmail(email: string) {
        const auth_header = this.authRequestService.GetHeaders();
        const options = new RequestOptions({ headers: auth_header });
        return this.http
            .get(this.actionUrl + "/user/"+email+"/exists", options)
            .map(res => res.json());
    }

    addToRole(userName: string, roleName: string) {
        /* Not yet implemented
        return this.http.post(url,body)
            .map(res => res.json());
         */
    }

}