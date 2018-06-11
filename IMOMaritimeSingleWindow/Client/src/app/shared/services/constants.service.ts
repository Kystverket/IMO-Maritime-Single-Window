import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ConstantsService {

    private contactMediumUrl: string;
    private claimUrl: string;
    private portCallClaimsUrl: string;
    private getMenuClaimListUrl: string;

    constructor(private http: Http) {
        this.contactMediumUrl = "api/contactmedium";
        this.claimUrl = "api/claim";
        this.portCallClaimsUrl = "api/claim/type/portcall";
        this.getMenuClaimListUrl = "api/claim/type/menu";
    }

    getContactMediumList() {
        return this.http.get(this.contactMediumUrl)
            .map(res => res.json());
    }

    getClaimList() {
        return this.http.get(this.claimUrl)
            .map(res => res.json());
    }

    GetPortCallClaimList() {
        return this.http.get(this.portCallClaimsUrl)
            .map(res => res.json());
    }

}