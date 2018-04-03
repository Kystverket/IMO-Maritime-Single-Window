import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class ContentService extends BaseService {
    private contentSource = new BehaviorSubject<string>('Port Call');
    contentName$ = this.contentSource.asObservable();

    private portCallSource = new BehaviorSubject<string>('Register Port Call');
    portCallName$ = this.portCallSource.asObservable();

    private portCallFormSource = new BehaviorSubject<string>('Ship, Location and Time');
    portCallFormName$ = this.portCallFormSource.asObservable();

    setContent(contentName: string) {        
        this.contentSource.next(contentName);
    }

    setPortCallForm(contentName: string) {
        this.portCallFormSource.next(contentName);
    }

    
}