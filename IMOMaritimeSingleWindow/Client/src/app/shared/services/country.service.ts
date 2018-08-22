import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { CountryModel } from 'app/shared/models/country-model';

@Injectable()
export class CountryService {
  private countryUrl: string;
  private searchUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.searchUrl = 'api/country/search';
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

  public search(term: string): Observable<any> {
    if (term.length < 2) {
      return Observable.of([]);
    }
    const encodedTerm: string = encodeURIComponent(term);
    const uri: string = [this.searchUrl, encodedTerm].join('/');
    return this.http.get(uri);
  }

  public getCountries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.countryUrl);
  }

}
