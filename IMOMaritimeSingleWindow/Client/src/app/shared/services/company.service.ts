import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";

@Injectable()
export class CompanyService {
    constructor(private http: Http) {
        this.actionUrl = 'api/company/search/';
    }

    private actionUrl: string;

    public search(term: string) {
        if (term === '') {
            return of([]);
        }

        return this.http.get(this.actionUrl + term)
            .map(res => res.json())
            .toPromise();
    }
}