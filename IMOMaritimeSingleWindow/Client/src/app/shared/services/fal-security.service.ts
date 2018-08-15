import { HttpClient } from '@angular/common/http';
import { FalSecurityModel } from 'app/shared/models/fal-security-model';
import { Observable } from 'rxjs/Observable';
import { SecurityLevelModel } from '../models/security-level-model';
import { Injectable } from '@angular/core';

@Injectable()
export class FalSecurityService {

  private apiUrl = 'api';
  private falSecurityUrl = 'falSecurity';
  private portCallUrl = 'portCall';
  private securityLevelUrl = 'securityLevel';

  constructor(
    private http: HttpClient
  ) { }

  getFalSecurityByPortCallId(portCallId: number): Observable<FalSecurityModel> {
    const uri = [this.apiUrl, this.portCallUrl, portCallId, this.falSecurityUrl].join('/');
    return this.http.get<FalSecurityModel>(uri);
  }

  getSecurityLevelList(): Observable<SecurityLevelModel[]> {
    const uri = [this.apiUrl, this.securityLevelUrl].join('/');
    return this.http.get<SecurityLevelModel[]>(uri);
  }

}
