import { Injectable } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AccountService } from './account.service';
import { BaseService } from './base.service';

@Injectable()
export class ContentService extends BaseService {
  private contentSource = new BehaviorSubject<string>(
    CONTENT_NAMES.VIEW_PORT_CALLS
  );
  contentName$ = this.contentSource.asObservable();

  private portCallFormSource = new BehaviorSubject<string>('Port Call Details');
  portCallFormName$ = this.portCallFormSource.asObservable();

  constructor() {
    super();
  }

  setContent(contentName: string) {
    this.contentSource.next(contentName);
  }

  setPortCallForm(contentName: string) {
    this.portCallFormSource.next(contentName);
  }
}
