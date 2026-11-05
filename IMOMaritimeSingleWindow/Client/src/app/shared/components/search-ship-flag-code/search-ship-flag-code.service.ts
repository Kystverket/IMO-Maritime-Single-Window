import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchService } from 'app/shared/services/search.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class SearchShipFlagCodeService {

    private searchService: SearchService;
    private searchUrl: string;

    constructor(private http: HttpClient) {
        this.searchService = new SearchService(http);
        this.searchUrl = 'api/shipflagcode/search';
    }

    search(term: string, amount = 10) {
        if (term.length < 2) {
            return of([]);
        }
        return this.searchService.search(this.searchUrl, term, amount);
    }
}
