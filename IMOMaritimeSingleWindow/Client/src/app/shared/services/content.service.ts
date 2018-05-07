import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';
import { AccountService } from './account.service';

@Injectable()
export class ContentService extends BaseService {
    private contentSource = new BehaviorSubject<string>('Register User');
    contentName$ = this.contentSource.asObservable();

    private portCallFormSource = new BehaviorSubject<string>('Port Call Details');
    portCallFormName$ = this.portCallFormSource.asObservable();

    constructor(private accountService: AccountService){
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