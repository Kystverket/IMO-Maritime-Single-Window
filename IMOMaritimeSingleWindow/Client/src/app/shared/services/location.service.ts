import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocationModel } from 'app/shared/models/location-model';
import { SearchService } from 'app/shared/services/search.service';

import { BehaviorSubject ,  Observable } from 'rxjs';

@Injectable()
export class LocationService {
  private searchService: SearchService;
  private locationUrl: string;
  private locationTypeUrl: string;
  private countryUrl: string;
  private searchUrl: string;
  private searchHarbourUrl: string;
  private locationSourceUrl: string;

  constructor(private http: HttpClient) {
    this.locationUrl = 'api/location';
    this.locationTypeUrl = 'api/locationtype';
    this.countryUrl = 'api/country';
    this.searchService = new SearchService(http);
    this.searchUrl = 'api/location/search';
    this.searchHarbourUrl = 'api/location/harbour/search';
    this.locationSourceUrl = 'api/location/locationSourceInternal';
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

  public search(term: string, restrictTypeHarbour: boolean, amount = 10): Observable<any> {
    if (term.length < 2) {
      return Observable.of([]);
    }
    const uri = (restrictTypeHarbour) ? this.searchHarbourUrl : this.searchUrl;
    return this.searchService.search(uri, term, amount);
  }

  setLocationData(data) {
    this.locationDataSource.next(data);
  }

  getLocationById(locationId: number) {
    const uri = [this.locationUrl, locationId].join('/');
    return this.http.get(uri);
  }


  public updateLocation(location: LocationModel): Observable<any> {
    location.country = null;
    location.locationType = null;
    return this.http
      .put(this.locationUrl, location);
  }

  public registerLocation(newLocation: LocationModel): Observable<any> {
    return this.http
      .post(this.locationUrl, newLocation);
  }

  public getLocationTypes(): Observable<any> {
    return this.http.get(this.locationTypeUrl);
  }

  public getCountries(): Observable<any> {
    return this.http.get(this.countryUrl);
  }

  public getInternalLocationSource(): Observable<any> {
    return this.http.get(this.locationSourceUrl);
  }
}
