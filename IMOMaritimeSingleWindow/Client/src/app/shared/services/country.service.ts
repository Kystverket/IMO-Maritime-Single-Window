import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {
  constructor(private http: HttpClient) {
    this.searchService = new SearchService(http);
    this.searchUrl = 'api/country/search/';
  }

  private searchService: SearchService;
  private searchUrl: string;

  public search(term: string): Observable<any> {
    if (term.length < 2) {
      return Observable.of([]);
    }
    return this.searchService.search(this.searchUrl, term);
  }
}
