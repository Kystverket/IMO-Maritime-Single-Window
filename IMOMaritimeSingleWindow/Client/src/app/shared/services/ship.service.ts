import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ShipService {
    constructor(private http: Http) {
        this.actionUrl = 'api/ship/';
        //this.actionUrl = 'api/ship/search/';
    }

    private actionUrl: string;

    public search(term: string) {
        if (term === '') {
            return [];
        }

        term = '254168';

        return this.http.get(this.actionUrl + term)
            .map(res => res.json())
            .toPromise();
    }
}