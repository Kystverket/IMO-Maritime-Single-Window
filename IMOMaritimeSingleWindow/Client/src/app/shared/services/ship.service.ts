import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ShipContactModel } from '../models/ship-contact-model';
import { AuthRequest } from './auth.request.service';
import { SearchService } from './search.service';
import 'rxjs/add/observable/of';

@Injectable()
export class ShipService {
  private searchService: SearchService;
  private shipSearchUrl: string;
  private shipTypeUrl: string;
  private hullTypeUrl: string;
  private lengthTypeUrl: string;
  private breadthTypeUrl: string;
  private powerTypeUrl: string;
  private shipSourceUrl: string;
  private shipStatusListUrl: string;
  private shipUrl: string;
  private contactListShipUrl: string;
  private shipContactListUrl: string;

  private shipOverviewDataSource = new BehaviorSubject<any>(null);
  shipOverviewData$ = this.shipOverviewDataSource.asObservable();

  private shipSearchDataSource = new BehaviorSubject<any>(null);
  shipSearchData$ = this.shipSearchDataSource.asObservable();

  private countryDataSource = new BehaviorSubject<any>(null);
  countryData$ = this.countryDataSource.asObservable();

  private certificateDataSource = new BehaviorSubject<any>(null);
  certificateData$ = this.certificateDataSource.asObservable();

  private dataPristineSource = new BehaviorSubject<boolean>(true);
  dataPristine$ = this.dataPristineSource.asObservable();

  constructor(
    private http: Http,
    private authRequest: AuthRequest
  ) {
    this.searchService = new SearchService(http);
    this.shipUrl = 'api/ship';
    this.shipSearchUrl = 'api/ship/search';
    this.shipTypeUrl = 'api/shiptype';
    this.hullTypeUrl = 'api/shiphulltype';
    this.lengthTypeUrl = 'api/shiplengthtype';
    this.breadthTypeUrl = 'api/shipbreadthtype';
    this.powerTypeUrl = 'api/shippowertype';
    this.shipSourceUrl = 'api/shipsource';
    this.shipStatusListUrl = 'api/shipstatus';
    this.contactListShipUrl = 'api/shipcontact/ship';
    this.shipContactListUrl = 'api/shipcontact/list';
  }

  setDataPristine(data: boolean) {
    this.dataPristineSource.next(data);
  }

  registerShip(newShip: any) {
    const auth_header = this.authRequest.GetHeaders();
    const options = new RequestOptions({ headers: auth_header });
    return this.http
      .post(this.shipUrl, newShip, options)
      .map(res => res.json());
  }

  getShip(id: number) {
    const uri = [this.shipUrl, id].join('/');
    return this.http.get(uri)
      .map(res => res.json());
  }

  setShipOverviewData(data) {
    this.dataPristineSource.next(false);
    this.shipOverviewDataSource.next(data);
  }

  setCountryData(data) {
    this.dataPristineSource.next(false);
    this.countryDataSource.next(data);
  }

  setShipSearchData(data) {
    this.dataPristineSource.next(false);
    this.shipSearchDataSource.next(data);
  }

  setCertificateData(data) {
    this.dataPristineSource.next(false);
    this.certificateDataSource.next(data);
  }

  updateShip(ship: any) {
    const auth_header = this.authRequest.GetHeaders();
    const options = new RequestOptions({ headers: auth_header });
    return this.http.put(this.shipUrl, ship, options)
      .map(res => res.json());
  }

  saveShipContactList(shipContactList: ShipContactModel[]) {
    return this.http.post(this.shipContactListUrl, shipContactList)
      .map(res => res.json());
  }


  search(term: string, amount = 10) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    return this.searchService.search(this.shipSearchUrl, term, amount);
  }

  getShipTypes() {
    return this.http.get(this.shipTypeUrl).map(res => res.json());
  }

  getHullTypes() {
    return this.http.get(this.hullTypeUrl).map(res => res.json());
  }

  getLengthTypes() {
    return this.http.get(this.lengthTypeUrl).map(res => res.json());
  }

  getBreadthTypes() {
    return this.http.get(this.breadthTypeUrl).map(res => res.json());
  }

  getPowerTypes() {
    return this.http.get(this.powerTypeUrl).map(res => res.json());
  }

  getShipSources() {
    return this.http.get(this.shipSourceUrl).map(res => res.json());
  }

  getShipStatusList() {
    return this.http.get(this.shipStatusListUrl).map(res => res.json());
  }

  getContactList(shipId: number) {
    const uri: string = [this.contactListShipUrl, shipId].join('/');
    return this.http.get(uri).map(res => res.json());
  }
}
