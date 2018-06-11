import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from './account.service';
import { BaseService } from './base.service';
import { CONTENT_NAMES } from '../constants/content-names';

@Injectable()
export class ContentService extends BaseService {
    private contentSource = new BehaviorSubject<string>(CONTENT_NAMES.VIEW_PORT_CALLS);
    contentName$ = this.contentSource.asObservable();

    private portCallFormSource = new BehaviorSubject<string>('Port Call Details');
    portCallFormName$ = this.portCallFormSource.asObservable();

    constructor(private accountService: AccountService) {
        super();
    }

    setContent(contentName: string) {
        this.contentSource.next(contentName);
    }

    setPortCallForm(contentName: string) {
        this.portCallFormSource.next(contentName);
    }
}
