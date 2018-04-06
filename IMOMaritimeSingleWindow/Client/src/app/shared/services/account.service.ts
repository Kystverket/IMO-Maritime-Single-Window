import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthRequest } from "./auth.request.service";
import { BaseRequest } from "../utils/base.request";
import { ConfigService } from "../utils/config.service";

@Injectable()
export class AccountService extends BaseRequest {
    private accountBaseUrl = "account/";
    private registerUrl : string;
    private rolesUrl : string;
    private actionUrl: string;

    constructor(
        private http: Http,
        private authRequestService: AuthRequest,
        configService: ConfigService
    ) {
        super(configService);
        
        this.actionUrl = this.baseUrl + this.accountBaseUrl;
        this.registerUrl = this.actionUrl + "register";
        this.rolesUrl = this.actionUrl + "getrole";
    }

    getAllRoles() {        
        return this.http.get(this.rolesUrl)
            .map(res => res.json());
    }

    getRoles(){
        var auth_headers = this.authRequestService.GetHeaders();
        console.log(auth_headers);
        return this.http
            .get(this.rolesUrl)
            .map(res => res.json());
    }
}