import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';

@Injectable()
export class DbConnectionService extends BaseService {
  private connectionUrl: string;

  private hasDbConnectionSource = new BehaviorSubject<boolean>(true);
  hasDbConnection$ = this.hasDbConnectionSource.asObservable();

  constructor(private http: HttpClient) {
    super();
    this.connectionUrl = 'api/connection/state';
  }

  getHasDbConnection(): Observable<any> {
    return this.http.get(this.connectionUrl);
  }
}
