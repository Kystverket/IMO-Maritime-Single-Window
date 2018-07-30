import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { LocationModel } from 'app/shared/models/location-model';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthRequest } from './auth.request.service';
import { SearchService } from 'app/shared/services/search.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {
  private searchService: SearchService;
  private locationUrl: string;
  private locationTypeUrl: string;
  private countryUrl: string;
  private searchUrl: string;
  private searchHarbourUrl: string;

  constructor(private http: Http, private authRequest: AuthRequest) {
    this.locationUrl = 'api/location';
    this.locationTypeUrl = 'api/locationtype';
    this.countryUrl = 'api/country';
    this.searchService = new SearchService(this.http);
    this.searchUrl = 'api/location/search';
    this.searchHarbourUrl = 'api/location/harbour/search';
  }

  private locationDataSource = new BehaviorSubject<any>(null);
  locationData$ = this.locationDataSource.asObservable();

  private locationSearchDataSource = new BehaviorSubject<any>(null);
  locationSearchData$ = this.locationSearchDataSource.asObservable();

  setLocationSearchData(data) {
    this.locationSearchDataSource.next(data);
  }

  clearLocationSearch() {
    this.setLocationData(null);
    this.setLocationSearchData(null);
  }

  public search(term: string, restrictTypeHarbour: boolean, amount = 10) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    const uri = (restrictTypeHarbour) ? this.searchHarbourUrl : this.searchUrl;
    return this.searchService.search(uri, term, amount);
  }

  setLocationData(data) {
    this.locationDataSource.next(data);
  }


  public updateLocation(location: LocationModel) {
    location.country = null;
    location.locationType = null;
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
