import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { OrganizationModel } from 'app/shared/models/organization-model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthRequest } from './auth.request.service';
import { SearchService } from './search.service';

@Injectable()
export class OrganizationService {
  private searchService: SearchService;
  private searchOrganizationUrl: string;
  private organizationUrl: string;
  private organizationTypeUrl: string;
  private organizationUserUrl: string;

  constructor(private http: Http, private authRequestService: AuthRequest) {
    this.searchService = new SearchService(http);
    this.organizationUrl = 'api/organization';
    this.organizationTypeUrl = 'api/organizationtype';
    this.organizationUserUrl = this.organizationUrl + '/user';
    this.searchOrganizationUrl = this.organizationUrl + '/search';
  }

  private organizationDataSource = new BehaviorSubject<any>(null);
  organizationData$ = this.organizationDataSource.asObservable();

  setOrganizationData(data) {
    this.organizationDataSource.next(data);
  }

  public registerOrganization(newOrganization: OrganizationModel) {
    const authHeaders = this.authRequestService.GetHeaders();
    const options = new RequestOptions({ headers: authHeaders });
    return this.http
      .post(this.organizationUrl, newOrganization, options)
      .map(res => res.json());
  }

  public search(term: string) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    return this.searchService.search(this.searchOrganizationUrl, term);
  }

  public getOrganizationTypes() {
    return this.http.get(this.organizationTypeUrl).map(res => res.json());
  }

  public getOrganizationForUser() {
    const authHeaders = this.authRequestService.GetHeaders();
    const options = new RequestOptions({ headers: authHeaders });
    const uri: string = this.organizationUserUrl;
    return this.http.get(uri, options).map(res => res.json());
  }
}
