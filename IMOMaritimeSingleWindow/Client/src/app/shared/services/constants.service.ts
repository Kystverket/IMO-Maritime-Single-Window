import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ConstantsService {
    
    private getContactMediumListUrl: string;
    private getClaimListUrl: string;

    constructor(private http: Http) {
        this.getContactMediumListUrl = 'api/contactmedium/getall';
        this.getClaimListUrl = 'api/claim/getall';
    }
    
    getContactMediumList() {
        return this.http.get(this.getContactMediumListUrl)
                .map(res => res.json());
    }

    getClaimList() {
        return this.http.get(this.getClaimListUrl)
                .map(res => res.json());
    }
}