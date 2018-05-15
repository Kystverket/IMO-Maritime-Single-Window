import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";

@Injectable()
export class SearchService {

    constructor(private http: Http) { }

    public search(baseUrl: string, term: string) {

        let encoded_term: string = encodeURIComponent(term);

        if (term === '') {
            return of([]);
        }

        let uri: string = [baseUrl, encoded_term].join('/');


        console.log(uri);

        return this.http.get(uri)
            .map(res => res.json())
            .toPromise().catch(err => {
                console.log(err);
                return null;
            });
    }
}