import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ConstantsService {
    
    private getContactMediumListUrl: string;
    private getClaimListUrl: string;
    private getPortCallClaimListUrl: string;
    private getMenuClaimListUrl: string;

    constructor(private http: Http) {
        this.getContactMediumListUrl = 'api/contactmedium/getall';
        this.getClaimListUrl = 'api/claim/getall';
        this.getPortCallClaimListUrl = 'api/claim/type/portcall';
        this.getMenuClaimListUrl = 'api/claim/type/menu';
    }
    
    getContactMediumList() {
        return this.http.get(this.getContactMediumListUrl)
                .map(res => res.json());
    }

    getClaimList() {
        return this.http.get(this.getClaimListUrl)
                .map(res => res.json());
    }

    GetPortCallClaimList() {
        return this.http.get(this.getPortCallClaimListUrl)
                .map(res => res.json());
    }

}