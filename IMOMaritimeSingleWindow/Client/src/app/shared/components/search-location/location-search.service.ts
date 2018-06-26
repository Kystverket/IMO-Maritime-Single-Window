import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchService } from 'app/shared/services/search.service';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationSearchService {
  private searchService: SearchService;
  private searchUrl: string;
  private searchHarbourUrl: string;

  constructor(private http: Http) {
    this.searchService = new SearchService(this.http);
    this.searchUrl = 'api/location/search';
    this.searchHarbourUrl = 'api/location/harbour/search';
  }

  private locationDataSource = new BehaviorSubject<any>(null);
  locationData$ = this.locationDataSource.asObservable();

  private locationSearchDataSource = new BehaviorSubject<any>(null);
  locationSearchData$ = this.locationSearchDataSource.asObservable();

  setLocationData(data) {
    this.locationDataSource.next(data);
  }

  setLocationSearchData(data) {
    this.locationSearchDataSource.next(data);
  }

  public search(term: string, restrictTypeHarbour: boolean, amount = 10) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    const uri = (restrictTypeHarbour) ? this.searchHarbourUrl : this.searchUrl;
    return this.searchService.search(uri, term, amount);
  }
}
