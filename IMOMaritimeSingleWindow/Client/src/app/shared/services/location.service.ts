import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { LocationModel } from 'app/shared/models/location-model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthRequest } from './auth.request.service';
import { SearchService } from './search.service';
import 'rxjs/add/observable/of';

@Injectable()
export class LocationService {
  private searchService: SearchService;
  private searchUrl: string;
  private searchHarbourUrl: string;
  private locationUrl: string;
  private locationTypeUrl: string;
  private countryUrl: string;

  constructor(private http: Http, private authRequest: AuthRequest) {
    this.searchService = new SearchService(http);
    this.searchUrl = 'api/location/search';
    this.searchHarbourUrl = 'api/location/harbour/search';
    this.locationUrl = 'api/location';
    this.locationTypeUrl = 'api/locationtype';
    this.countryUrl = 'api/country';
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

  public searchHarbour(term: string) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    return this.searchService.search(this.searchHarbourUrl, term);
  }

  public updateLocation(location: LocationModel) {
    const auth_headers = this.authRequest.GetHeaders();
    const options = new RequestOptions({ headers: auth_headers });
    return this.http
      .put(this.locationUrl, location, options)
      .map(res => res.json());
  }

  public registerLocation(newLocation: LocationModel) {
    const authHeaders = this.authRequest.GetHeaders();
    const options = new RequestOptions({ headers: authHeaders });
    return this.http
      .post(this.locationUrl, newLocation, options)
      .map(res => res.json());
  }

  public getLocationTypes() {
    return this.http.get(this.locationTypeUrl).map(res => res.json());
  }

  public getCountries() {
    return this.http.get(this.countryUrl).map(res => res.json());
  }
}
