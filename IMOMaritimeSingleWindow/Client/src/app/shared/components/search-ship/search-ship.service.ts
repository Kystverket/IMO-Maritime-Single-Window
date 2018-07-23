import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchService } from 'app/shared/services/search.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchShipService {
  private searchService: SearchService;
  private searchUrl: string;
  private shipUrl: string;

  constructor(private http: Http) {
    this.searchService = new SearchService(this.http);
    this.searchUrl = 'api/ship/search';
    this.shipUrl = 'api/ship';
  }

  search(term: string, amount = 10) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    return this.searchService.search(this.searchUrl, term, amount);
  }

  getShip(id: number) {
    const uri = [this.shipUrl, id].join('/');
    return this.http.get(uri)
      .map(res => res.json());
  }
}
