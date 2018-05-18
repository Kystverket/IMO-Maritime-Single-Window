import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { SearchService } from "./search.service";

@Injectable()
export class CountryService {
    constructor(private http: Http) {
        this.searchService = new SearchService(http);
        this.actionUrl = 'api/country/search/';
    }

    private searchService: SearchService;
    private actionUrl: string;

    public search(term: string) {
        if (term.length < 2) {
            return Observable.of([]);
        }
        return this.searchService.search(this.actionUrl, term);
    }
}