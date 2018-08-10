import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

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
