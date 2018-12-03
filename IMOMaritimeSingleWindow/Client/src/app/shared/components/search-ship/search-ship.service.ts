import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SHIP_STATUSES } from 'app/shared/constants/enumValues';
import { SearchService } from 'app/shared/services/search.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchShipService {
  private searchService: SearchService;
  private searchUrl: string;
  private shipUrl: string;
  private placeholderShipDataUrl: string;


  constructor(private http: HttpClient) {
    this.searchService = new SearchService(this.http);
    this.searchUrl = 'api/ship/search';
    this.shipUrl = 'api/ship';
    this.placeholderShipDataUrl = '/api/ship/placeholder';
  }

  search(type: SHIP_STATUSES = null, term: string, amount = 10) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    if (type == null || type === undefined) {
      return this.searchService.search(this.searchUrl, term, amount);
    } else {
      const uri = [this.searchUrl, term, amount, type].join('/');
      return this.http.get(uri);
    }
  }

  getShip(id: number) {
    const uri = [this.shipUrl, id].join('/');
    return this.http.get(uri);
  }

  getPlaceHolderData() {
    return this.http.get(this.placeholderShipDataUrl);
  }
}
