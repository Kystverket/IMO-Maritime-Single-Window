import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PurposeService {
  private purposeUrl = 'api/purpose';

  constructor(private http: HttpClient) { }

  getPurposes(): Observable<any> {
    return this.http.get(this.purposeUrl);
  }
}
