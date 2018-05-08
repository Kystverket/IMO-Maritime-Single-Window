import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ConstantsService {

    constructor(private http: Http) {
        this.getContactMediumListUrl = 'api/contactmedium/getall';
    }
    private getContactMediumListUrl: string;

    getContactMediumList() {
        return this.http.get(this.getContactMediumListUrl)
                .map(res => res.json());
    }
}