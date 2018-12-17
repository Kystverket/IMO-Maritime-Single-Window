import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { CompanySecurityOfficerModel } from '../models/company-security-officer-model';
import { OrganizationModel } from '../models/organization-model';
import { SearchService } from './search.service';

@Injectable()
export class OrganizationService {
  private searchService: SearchService;
  private searchOrganizationUrl: string;
  private organizationUrl: string;
  private organizationTypeUrl: string;
  private validOrganizationTypesUrl: string;
  private organizationUserUrl: string;

  constructor(private http: HttpClient) {
    this.searchService = new SearchService(http);
    this.organizationUrl = 'api/organization';
    this.organizationTypeUrl = 'api/organizationtype';
    this.validOrganizationTypesUrl = 'api/organizationtype/ValidTypes';
    this.organizationUserUrl = this.organizationUrl + '/user';
    this.searchOrganizationUrl = this.organizationUrl + '/search';
  }

  private organizationDataSource = new BehaviorSubject<any>(null);
  organizationData$ = this.organizationDataSource.asObservable();

  private organizationSearchDataSource = new BehaviorSubject<any>(null);
  organizationSearchData$ = this.organizationSearchDataSource.asObservable();

  setOrganizationData(data) {
    this.organizationDataSource.next(data);
  }

  setOrganizationSearchData(data) {
    this.organizationSearchDataSource.next(data);
  }

  public registerOrganization(newOrganization: OrganizationModel): Observable<any> {
    return this.http
      .post(this.organizationUrl, newOrganization);
  }

  updateOrganization(organization: OrganizationModel): Observable<any> {
    return this.http
      .put(this.organizationUrl, organization);
  }

  public search(term: string, amount = 10): Observable<any> {
    if (term.length < 2) {
      return Observable.of([]);
    }
    return this.searchService.search(this.searchOrganizationUrl, term, amount);
  }

  public getValidOrganizationTypes(): Observable<any> {
    return this.http.get(this.validOrganizationTypesUrl);
  }

  public getOrganizationForUser(): Observable<any> {
    const uri: string = this.organizationUserUrl;
    return this.http.get(uri);
  }

  getOrganizationById(organizationId: number): Observable<any> {
    const uri: string = [this.organizationUrl, organizationId].join('/');
    return this.http.get(uri);
  }

  getRecognizedSecurityOrganizations(): Observable<OrganizationModel[]> {
    const uri = [this.organizationTypeUrl, 'recognizedSecurityOrganization', 'organization'].join('/');
    return this.http.get<OrganizationModel[]>(uri);
  }

  getCompanySecurityOfficersByOrganizationId(organizationId: number): Observable<CompanySecurityOfficerModel[]> {
    const uri = [this.organizationUrl, organizationId, 'companySecurityOfficer'].join('/');
    return this.http.get<CompanySecurityOfficerModel[]>(uri);
  }
}
