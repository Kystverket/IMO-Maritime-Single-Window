import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ShipModel } from '../models/ship-model';
import { ContactModel } from '../models/contact-model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactService {
    
    constructor() {}

    wipeServiceData() {
        this.contactDataSource.next(null);
    }

    private contactDataSource = new BehaviorSubject<any>(null);
    contactData$ = this.contactDataSource.asObservable();
    
    setContactData(data: ContactModel[]) {
        this.contactDataSource.next(data);
    }
    
}