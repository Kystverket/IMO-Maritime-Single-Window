import { Injectable } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BaseService } from './base.service';
import { Http } from '@angular/http';

@Injectable()
export class DbConnectionService extends BaseService {
  private connectionUrl: string;

  private hasDbConnectionSource = new BehaviorSubject<boolean>(true);
  hasDbConnection$ = this.hasDbConnectionSource.asObservable();

  constructor(private http: Http) {
    super();
    this.connectionUrl = 'api/connection/state';
  }

  getHasDbConnection() {
    return this.http.get(this.connectionUrl).map(res => res.json());
  }
}
