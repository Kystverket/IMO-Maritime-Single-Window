import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchService } from 'app/shared/services/search.service';

import { Observable } from 'rxjs';

@Injectable()
export class SearchLocationService {
  private searchService: SearchService;
  private searchUrl: string;
  private searchHarbourUrl: string;
  private placeholderLocationDataUrl: string;

  constructor(private http: HttpClient) {
    this.searchService = new SearchService(this.http);
    this.searchUrl = 'api/location/search';
    this.searchHarbourUrl = 'api/location/harbour/search';
    this.placeholderLocationDataUrl = '/api/location/placeholder';
  }

  public search(term: string, restrictTypeHarbour: boolean, amount = 10) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    const uri = (restrictTypeHarbour) ? this.searchHarbourUrl : this.searchUrl;
    return this.searchService.search(uri, term, amount)/* .map(response => response.json().items) */;
  }

  getPlaceHolderData() {
    return this.http.get(this.placeholderLocationDataUrl);
  }
}
