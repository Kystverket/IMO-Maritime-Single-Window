import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './search.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';

@Injectable()
export class CountryService {
  private searchService: SearchService;
  private searchUrl: string;
  countryUrl: string;

  constructor(private http: Http) {
    this.searchService = new SearchService(http);
    this.searchUrl = 'api/country/search/';
    this.countryUrl = 'api/country';
  }

  private countryDataSource = new BehaviorSubject<any>(null);
  countryData$ = this.countryDataSource.asObservable();

  private countrySearchDataSource = new BehaviorSubject<any>(null);
  countrySearchData$ = this.countrySearchDataSource.asObservable();

  setCountryData(data) {
    this.countryDataSource.next(data);
  }

  setCountrySearchData(data) {
    this.countrySearchDataSource.next(data);
  }

  public search(term: string) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    // return this.searchService.search(this.searchUrl, term);
    const encodedTerm: string = encodeURIComponent(term);
    const uri: string = [this.searchUrl, encodedTerm].join('/');
    return this.http.get(uri).map(res => res.json());
  }

  public getCountries() {
    return this.http.get(this.countryUrl).map(res => res.json());
  }

}
