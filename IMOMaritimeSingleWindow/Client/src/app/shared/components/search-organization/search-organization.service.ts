import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ORGANIZATION_TYPES } from 'app/shared/constants/enumValues';
import { SearchService } from 'app/shared/services/search.service';

import { Observable } from 'rxjs';
import { OrganizationModel } from '../../models/organization-model';

@Injectable()
export class SearchOrganizationService {
  private searchService: SearchService;
  private searchUrl: string;
  private organizationUrl: string;
  private organizationPlaceholderDataUrl: string;

  constructor(private http: HttpClient) {
    this.searchService = new SearchService(this.http);
    this.searchUrl = 'api/organization/search';
    this.organizationUrl = 'api/organization';
    this.organizationPlaceholderDataUrl = 'api/organization/placeholder';
  }

  search(type: ORGANIZATION_TYPES = null, term: string, amount = 10) {
    if (term.length < 2) {
      return Observable.of([]);
    }
    if (type == null || type === undefined) {
      return this.searchService.search(this.searchUrl, term, amount);
    } else {
        const uri = [this.searchUrl, term, amount, type].join('/');
        return this.http.get(uri);
    }
  }


  getorganization(id: number): Observable<OrganizationModel> {
    const uri = [this.organizationUrl, id].join('/');
    return this.http.get<OrganizationModel>(uri);
  }

  getPlaceHolderData() {
    return this.http.get(this.organizationPlaceholderDataUrl);
  }
}
