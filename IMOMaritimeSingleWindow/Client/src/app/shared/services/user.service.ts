import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";
import { BehaviorSubject, Subject } from 'rxjs';
import { UserModel } from "../models/user-model";

@Injectable()
export class UserService {
    constructor(private http: Http) {
        this.actionUrl = 'api/user/search';
        this.registerUserUrl = 'api/user/register';
    }

    private actionUrl: string;
    private registerUserUrl: string;

    // private organizationDataSource = new BehaviorSubject<any>(null);
    // organizationData$ = this.organizationDataSource.asObservable();

    // private countryDataSource = new BehaviorSubject<any>(null);
    // countryData$ = this.countryDataSource.asObservable();

    // private userFlagCodeDataSource = new BehaviorSubject<any>(null);
    // userFlagCodeData$ = this.userFlagCodeDataSource.asObservable();

    registerUser(newUser: any) {
        return this.http.post(this.registerUserUrl, newUser)
                .map(res => res.json());
    }    
    
}