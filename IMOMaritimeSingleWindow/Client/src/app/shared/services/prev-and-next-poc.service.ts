import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BaseService } from './base.service';
import { LocationModel } from '../models/location-model';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Injectable()
export class PrevAndNextPocService extends BaseService {
    private prevPortOfCallSource = new BehaviorSubject<LocationModel>(null);
    prevPortOfCallData$ = this.prevPortOfCallSource.asObservable();

    private nextPortOfCallSource = new BehaviorSubject<LocationModel>(null);
    nextPortOfCallData$ = this.nextPortOfCallSource.asObservable();

    private prevPortOfCallEtdSource = new BehaviorSubject<any>(null);
    prevPortOfCallEtdData$ = this.prevPortOfCallEtdSource.asObservable();

    private nextPortOfCallEtaSource = new BehaviorSubject<any>(null);
    nextPortOfCallEtaData$ = this.nextPortOfCallEtaSource.asObservable();

    constructor() {
        super();
    }

    setPrevPortOfCall(prevPortOfCall: LocationModel) {
        this.prevPortOfCallSource.next(prevPortOfCall);
    }

    setNextPortOfCall(nextPortOfCall: LocationModel) {
        this.nextPortOfCallSource.next(nextPortOfCall);
    }

    setPrevPortOfCallEtd(prevPortOfCallEtd: NgbDate) {
        this.prevPortOfCallEtdSource.next(prevPortOfCallEtd);
    }

    setNextPortOfCallEta(nextPortOfCallEta: NgbDate) {
        this.nextPortOfCallEtaSource.next(nextPortOfCallEta);
    }
}
