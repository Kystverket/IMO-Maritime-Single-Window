import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConstantsService {
  private contactMediumUrl: string;
  private claimUrl: string;
  private portCallClaimsUrl: string;
  private getMenuClaimListUrl: string;

  constructor(private http: HttpClient) {
    this.contactMediumUrl = 'api/contactmedium';
    this.claimUrl = 'api/claim';
    this.portCallClaimsUrl = 'api/claim/type/portcall';
    this.getMenuClaimListUrl = 'api/claim/type/menu';
  }

  getContactMediumList(): Observable<any> {
    return this.http.get(this.contactMediumUrl);
  }

  getClaimList(): Observable<any> {
    return this.http.get(this.claimUrl);
  }

  GetPortCallClaimList(): Observable<any> {
    return this.http.get(this.portCallClaimsUrl);
  }
}
