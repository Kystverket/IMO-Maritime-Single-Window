import { HttpClient } from '@angular/common/http';
import { FalSecurityModel } from 'app/shared/models/fal-security-model';
import { Observable } from 'rxjs/Observable';
import { SecurityLevelModel } from '../models/security-level-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { CompanySecurityOfficerModel } from '../models/company-security-officer-model';

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

  setSecurityData(data) {
    this.securityDataSource.next(data);
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

}
