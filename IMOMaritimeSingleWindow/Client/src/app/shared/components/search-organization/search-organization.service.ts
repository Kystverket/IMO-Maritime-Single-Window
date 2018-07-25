import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchService } from 'app/shared/services/search.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchOrganizationService {
  private searchService: SearchService;
  private searchUrl: string;
  private organizationUrl: string;

  constructor(private http: Http) {
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

  getorganization(id: number) {
    const uri = [this.organizationUrl, id].join('/');
    return this.http.get(uri)
      .map(res => res.json());
  }
}
