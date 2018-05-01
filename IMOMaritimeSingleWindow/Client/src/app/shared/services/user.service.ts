import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";
import { BehaviorSubject, Subject } from 'rxjs';
import { UserModel } from "../models/user-model";
import { ConfigService } from "../utils/config.service";
import { AuthRequest } from "./auth.request.service";
import { BaseRequest } from "../utils/base.request";

@Injectable()
export class UserService extends BaseRequest {
    constructor(private http: Http,
        private authRequestService: AuthRequest,
        configService: ConfigService
    ) {
        super(configService);
        this.actionUrl = 'api/user/search';
        this.registerUrl = 'api/user/register';
    }
    
    private accountBaseUrl = "/account";
    private actionUrl: string;
    private registerUrl : string;

    // private organizationDataSource = new BehaviorSubject<any>(null);
    // organizationData$ = this.organizationDataSource.asObservable();

    // private countryDataSource = new BehaviorSubject<any>(null);
    // countryData$ = this.countryDataSource.asObservable();

    // private userFlagCodeDataSource = new BehaviorSubject<any>(null);
    // userFlagCodeData$ = this.userFlagCodeDataSource.asObservable();

    registerUser(newUser: UserModel) {
        return this.http.post(this.registerUrl, newUser)
                .map(res => res.json());
    }    
    
}