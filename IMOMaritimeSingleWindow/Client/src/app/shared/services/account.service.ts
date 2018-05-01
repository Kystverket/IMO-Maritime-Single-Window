import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthRequest } from "./auth.request.service";
import { BaseRequest } from "../utils/base.request";
import { ConfigService } from "../utils/config.service";
import { UserModel } from "../models/user-model";


@Injectable()
export class AccountService extends BaseRequest {
    private accountBaseUrl = "/account";
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
        this.registerUrl = this.actionUrl + "/register";
        this.rolesUrl = this.actionUrl + "/getrole";
    }

    getAllRoles() {        
        return this.http.get(this.rolesUrl+"/all")
            .map(res => res.json());
    }

    getRoles(){
        var auth_headers = this.authRequestService.GetHeaders();
        auth_headers.forEach( element => console.log(element));
        console.log("auth headers has header 'Authorization'?");
        console.log(auth_headers.has("Authorization"));
        console.log("auth_headers: " + auth_headers.get("Authorization"));
        let options = new RequestOptions({ headers: auth_headers })
        return this.http
            .get(this.rolesUrl, options)
            .map(res => res.json());
    }

    registerUser(newUser: UserModel) {
        return this.http.post(this.registerUrl, newUser)
                .map(res => res.json());
    }

}