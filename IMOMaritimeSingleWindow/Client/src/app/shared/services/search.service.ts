import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { of } from "rxjs/observable/of";
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SearchService {

    constructor(private http: Http){}

    public search(baseUrl: string, term: string) {
        
        let encoded_term:string = encodeURIComponent(term);
        console.log(encoded_term);

        if (term === '') {
            return of([]);
        }

        let uri:string = [baseUrl, encoded_term].join('/');        

        return this.http.get(uri)
            .map(res => res.json())
            .toPromise();
    }
}