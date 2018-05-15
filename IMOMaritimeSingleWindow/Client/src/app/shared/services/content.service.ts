import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from './account.service';
import { BaseService } from './base.service';

@Injectable()
export class ContentService extends BaseService {
    private contentSource = new BehaviorSubject<string>('Organization');
    contentName$ = this.contentSource.asObservable();

    private portCallFormSource = new BehaviorSubject<string>('Port Call Details');
    portCallFormName$ = this.portCallFormSource.asObservable();

    constructor(private accountService: AccountService) {
        super();
    }

    setContent(contentName: string) {
        //TODO: Check if user has right to access
        //this.accountService.getAgentRoles();
        this.contentSource.next(contentName);
    }

    setPortCallForm(contentName: string) {
        this.portCallFormSource.next(contentName);
    }


}