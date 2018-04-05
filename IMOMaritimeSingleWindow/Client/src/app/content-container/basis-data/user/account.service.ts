import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AccountService {
    private accountBaseUrl = "api/account/";
    private registerUrl = this.accountBaseUrl + "register";
    private rolesUrl = this.accountBaseUrl + "getrole/all";

    constructor(private http: Http) { }

    getRoles() {        
        return this.http.get(this.rolesUrl)
            .map(res => res.json());
    }

    getAgentRole(){
        return ["agent"];
    }
}