import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class ContentService extends BaseService {
    private contentSource = new BehaviorSubject<string>('Port Call');
    contentName$ = this.contentSource.asObservable();

    private portCallFormSource = new BehaviorSubject<string>('Port Call Details');
    portCallFormName$ = this.portCallFormSource.asObservable();

    setContent(contentName: string) {        
        this.contentSource.next(contentName);
    }

    setPortCallForm(contentName: string) {
        this.portCallFormSource.next(contentName);
    }

    
}