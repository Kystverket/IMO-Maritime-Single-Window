import { HttpClient } from '@angular/common/http';
import { FalSecurityModel } from 'app/shared/models/fal-security-model';
import { Observable } from 'rxjs/Observable';
import { SecurityLevelModel } from '../models/security-level-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { CompanySecurityOfficerModel } from '../models/company-security-officer-model';
import { InternationalShipSecurityCertificateModel } from '../models/international-ship-security-certificate-model';
import { ShipModel } from 'app/shared/models/ship-model';

@Injectable()
export class FalSecurityService {

  private apiUrl = 'api';
  private falSecurityUrl = 'falSecurity';
  private portCallUrl = 'portCall';
  private securityLevelUrl = 'securityLevel';
  private companySecurityOfficerUrl = 'companySecurityOfficer';

  constructor(
    private http: HttpClient
  ) { }

  private securityDataSource = new BehaviorSubject<FalSecurityModel>(null);
  securityData$ = this.securityDataSource.asObservable();

  private securityIsCheckedDataSource = new BehaviorSubject<boolean>(false);
  securityIsCheckedData$ = this.securityIsCheckedDataSource.asObservable();

  private pristineDataSource = new BehaviorSubject<boolean>(true);
  pristineData$ = this.pristineDataSource.asObservable();

  private validSecurityDetailsDataSource = new BehaviorSubject<boolean>(true);
  validSecurityDetailsData$ = this.validSecurityDetailsDataSource.asObservable();

  private validCompanySecurityOfficerDataSource = new BehaviorSubject<boolean>(true);
  validCompanySecurityOfficerData$ = this.validCompanySecurityOfficerDataSource.asObservable();

  private validLast10PortCallsDataSource = new BehaviorSubject<boolean>(true);
  validLast10PortCallsData$ = this.validLast10PortCallsDataSource.asObservable();

  private validShipToShipActivityDataSource = new BehaviorSubject<boolean>(true);
  validShipToShipActivityData$ = this.validShipToShipActivityDataSource.asObservable();

  private saveSecurityModelDataSource = new BehaviorSubject<FalSecurityModel>(null);
  saveSecurityModelData$ = this.saveSecurityModelDataSource.asObservable();

  private saveIsscModelDataSource = new BehaviorSubject<InternationalShipSecurityCertificateModel>(null);
  saveIsscModelData$ = this.saveIsscModelDataSource.asObservable();

  private saveShipModelDataSource = new BehaviorSubject<ShipModel>(null);
  saveShipModelData$ = this.saveShipModelDataSource.asObservable();

  private allowSavingDataSource = new BehaviorSubject<boolean>(false);
  allowSavingData$ = this.allowSavingDataSource.asObservable();


  setSecurityData(data) {
    this.securityDataSource.next(data);
  }
  setSecurityIsCheckedData(data: boolean) {
    this.securityIsCheckedDataSource.next(data);
  }
  setPristineData(data: boolean) {
    this.pristineDataSource.next(data);
  }
  setValidSecurityDetailsData(data: boolean) {
    this.validSecurityDetailsDataSource.next(data);
  }
  setValidCompanySecurityOfficerData(data: boolean) {
    this.validCompanySecurityOfficerDataSource.next(data);
  }
  setValidLast10PortCallsData(data: boolean) {
    this.validLast10PortCallsDataSource.next(data);
  }
  setValidShipToShipActivityData(data: boolean) {
    this.validShipToShipActivityDataSource.next(data);
  }
  setSaveSecurityModelData(data: FalSecurityModel) {
    this.saveSecurityModelDataSource.next(data);
  }
  setSaveIsscModelData(data: InternationalShipSecurityCertificateModel) {
    this.saveIsscModelDataSource.next(data);
  }
  setSaveShipModelData(data: ShipModel) {
    this.saveShipModelDataSource.next(data);
  }
  setAllowSavingData(data: boolean) {
    this.allowSavingDataSource.next(data);
  }

  saveCompanySecurityOfficer(cso: CompanySecurityOfficerModel): Observable<CompanySecurityOfficerModel> {
    const uri = [this.apiUrl, this.companySecurityOfficerUrl].join('/');
    return this.http.put<CompanySecurityOfficerModel>(uri, cso);
  }

  saveFalSecurity(falSecurity: FalSecurityModel) {
    const uri = [this.apiUrl, this.falSecurityUrl].join('/');
    return this.http.put(uri, falSecurity);
  }

  getCompanySecurityOfficerBySecurityId(securityId: number): Observable<CompanySecurityOfficerModel> {
    const uri = [this.apiUrl, this.falSecurityUrl, securityId, this.companySecurityOfficerUrl].join('/');
    return this.http.get<CompanySecurityOfficerModel>(uri);
  }

  getFalSecurityByPortCallId(portCallId: number): Observable<FalSecurityModel> {
    const uri = [this.apiUrl, this.portCallUrl, portCallId, this.falSecurityUrl].join('/');
    return this.http.get<FalSecurityModel>(uri);
  }

  getSecurityLevelList(): Observable<SecurityLevelModel[]> {
    const uri = [this.apiUrl, this.securityLevelUrl].join('/');
    return this.http.get<SecurityLevelModel[]>(uri);
  }

  resetServiceData() {
    this.setPristineData(true);
    this.setSecurityData(null);
    this.setAllowSavingData(false);
    this.setSecurityIsCheckedData(false);
    this.setValidCompanySecurityOfficerData(true);
    this.setValidLast10PortCallsData(true);
    this.setValidSecurityDetailsData(true);
    this.setValidShipToShipActivityData(true);
    this.setSaveIsscModelData(null);
    this.setSaveShipModelData(null);
    this.setSaveSecurityModelData(null);
  }

}
