import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShipContactModel } from '../models/ship-contact-model';
import { AuthRequest } from './auth.request.service';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { InternationalShipSecurityCertificateModel } from '../models/international-ship-security-certificate-model';

@Injectable()
export class ShipService {
  private shipUrl = 'api/ship';
  private shipTypeUrl = 'api/shiptype';
  private hullTypeUrl = 'api/shiphulltype';
  private lengthTypeUrl = 'api/shiplengthtype';
  private breadthTypeUrl = 'api/shipbreadthtype';
  private powerTypeUrl = 'api/shippowertype';
  private shipSourceUrl = 'api/shipsource';
  private shipStatusListUrl = 'api/shipstatus';
  private contactListShipUrl = 'api/shipcontact/ship';
  private shipContactListUrl = 'api/shipcontact/list';
  private isscUrl = 'api/internationalShipSecurityCertificate';

  private shipDataSource = new BehaviorSubject<any>(null);
  shipData$ = this.shipDataSource.asObservable();

  private shipSearchDataSource = new BehaviorSubject<any>(null);
  shipSearchData$ = this.shipSearchDataSource.asObservable();

  private validIsscDataSource = new BehaviorSubject<boolean>(false);
  validIsscData$ = this.validIsscDataSource.asObservable();

  private isscPristineDataSource = new BehaviorSubject<boolean>(true);
  isscPristineData$ = this.isscPristineDataSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  registerShip(newShip: any): Observable<any> {
    return this.http
      .post(this.shipUrl, newShip);
  }

  getShip(id: number): Observable<any> {
    const uri = [this.shipUrl, id].join('/');
    return this.http.get(uri);
  }

  setValidIsscData(data: boolean) {
    this.validIsscDataSource.next(data);
  }

  setIsscPristineData(data: boolean) {
    this.isscPristineDataSource.next(data);
  }

  setShipData(data) {
    this.shipDataSource.next(data);
  }

  setShipSearchData(data) {
    this.shipSearchDataSource.next(data);
  }

  updateShip(ship: any) {
    return this.http.put(this.shipUrl, ship);
  }

  saveISSC(issc: InternationalShipSecurityCertificateModel): Observable<InternationalShipSecurityCertificateModel> {
    const uri = this.isscUrl;
    return this.http.put<InternationalShipSecurityCertificateModel>(uri, issc);
  }

  updateShipISSC(shipId: number, isscId: number) {
    const uri = [this.shipUrl, shipId, 'internationalShipSecurityCertificate/isscId'].join('/');
    return this.http.put(uri, isscId);
  }

  saveShipContactList(shipContactList: ShipContactModel[]) {
    return this.http.post(this.shipContactListUrl, shipContactList);
  }

  getShipTypes(): Observable<any> {
    return this.http.get(this.shipTypeUrl);
  }

  getHullTypes(): Observable<any> {
    return this.http.get(this.hullTypeUrl);
  }

  getLengthTypes(): Observable<any> {
    return this.http.get(this.lengthTypeUrl);
  }

  getBreadthTypes(): Observable<any> {
    return this.http.get(this.breadthTypeUrl);
  }

  getPowerTypes(): Observable<any> {
    return this.http.get(this.powerTypeUrl);
  }

  getShipSources(): Observable<any> {
    return this.http.get(this.shipSourceUrl);
  }

  getShipStatusList(): Observable<any> {
    return this.http.get(this.shipStatusListUrl);
  }

  getContactList(shipId: number): Observable<any> {
    const uri: string = [this.contactListShipUrl, shipId].join('/');
    return this.http.get(uri);
  }
}
