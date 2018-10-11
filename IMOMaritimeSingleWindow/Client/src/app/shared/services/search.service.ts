import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }

  public search(baseUrl: string, term: string, amount = 10): Observable<any> {
    const encodedTerm: string = encodeURIComponent(term);
    const uri: string = [baseUrl, encodedTerm, amount].join('/');

    return this.http.get(uri);
  }
}
