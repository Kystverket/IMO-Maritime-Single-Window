import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchService } from 'app/shared/services/search.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchUserService {
  private searchService: SearchService;
  private searchUrl: string;
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.searchService = new SearchService(this.http);
    this.searchUrl = 'api/account/user/search';
    this.userUrl = 'api/account/user';
  }

  search(term: string, amount = 25) {
    if (term.length < 2) {
      return Observable.of([]);
    }

    return this.searchService.search(this.searchUrl, term, amount);
  }

  getUser(email: string) {
    const uri = [this.userUrl, email].join('/');
    return this.http.get(uri);
  }
}
