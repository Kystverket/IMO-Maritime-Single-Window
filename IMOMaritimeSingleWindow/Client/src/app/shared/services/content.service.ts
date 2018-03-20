import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class ContentService extends BaseService {
    private contentSource = new BehaviorSubject<string>('');
    shipData$ = this.contentSource.asObservable();

    setContent(contentName: string) {
        this.contentSource.next(contentName);
    }
}