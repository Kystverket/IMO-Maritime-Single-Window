import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }

  public search(baseUrl: string, term: string, amount = 10, typeId = -1): Observable<any> {
    const encodedTerm: string = encodeURIComponent(term);
    let uri = '';
    if (typeId < 0) {
      uri = [baseUrl, encodedTerm, amount].join('/');
    } else {
      uri = [baseUrl, encodedTerm, amount, typeId].join('/');
    }
    return this.http.get(uri);
  }
}
