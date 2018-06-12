import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ContactService {

    private contactDataSource = new BehaviorSubject<any>(null);
    contactData$ = this.contactDataSource.asObservable();

    constructor() { }

    wipeServiceData() {
        this.contactDataSource.next(null);
    }

    setContactData(data) {
        this.contactDataSource.next(data);
    }

}
