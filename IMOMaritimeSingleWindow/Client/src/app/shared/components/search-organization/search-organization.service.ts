import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchService } from 'app/shared/services/search.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { OrganizationModel } from '../../models/organization-model';

@Injectable()
export class SearchOrganizationService {
  private searchService: SearchService;
  private searchUrl: string;
  private organizationUrl: string;

  constructor(private http: HttpClient) {
    this.searchService = new SearchService(this.http);
    this.searchUrl = 'api/organization/search';
    this.organizationUrl = 'api/organization';
  }

  search(term: string, amount = 10) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    return this.searchService.search(this.searchUrl, term, amount);
  }

  getorganization(id: number): Observable<OrganizationModel> {
    const uri = [this.organizationUrl, id].join('/');
    return this.http.get<OrganizationModel>(uri);
  }
}
