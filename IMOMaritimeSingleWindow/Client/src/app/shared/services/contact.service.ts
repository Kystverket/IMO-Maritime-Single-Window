import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactService {

    constructor() { }

    wipeServiceData() {
        this.contactDataSource.next(null);
    }

    private contactDataSource = new BehaviorSubject<any>(null);
    contactData$ = this.contactDataSource.asObservable();

    setContactData(data) {
        this.contactDataSource.next(data);
    }

}