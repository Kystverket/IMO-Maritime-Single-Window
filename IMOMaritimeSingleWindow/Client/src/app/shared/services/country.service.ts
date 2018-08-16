import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';
import { CountryModel } from 'app/shared/models/country-model';

@Injectable()
export class CountryService {

  private searchService: SearchService;
  private searchUrl: string;
  private apiUrl = 'api';
  private countryUrl = 'country';

  constructor(private http: HttpClient) {
    this.searchService = new SearchService(http);
    this.searchUrl = 'api/country/search/';
  }


  public search(term: string): Observable<any> {
    if (term.length < 2) {
      return Observable.of([]);
    }
    return this.searchService.search(this.searchUrl, term);
  }

  getCountries(): Observable<CountryModel[]> {
    const uri = [this.apiUrl, this.countryUrl].join('/');
    return this.http.get<CountryModel[]>(uri);
  }
}
