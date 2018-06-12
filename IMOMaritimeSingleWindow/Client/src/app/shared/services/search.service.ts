import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

    constructor(private http: Http) { }

    public search(baseUrl: string, term: string) {

        const encoded_term: string = encodeURIComponent(term);
        const uri: string = [baseUrl, encoded_term].join('/');

        return this.http.get(uri).map(res => {
            console.log(res.json());
            return res.json();
        });
    }
}
