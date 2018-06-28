import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationModel } from '../models/location-model';
import { BaseService } from './base.service';

@Injectable()
export class PrevAndNextPocService extends BaseService {
    private prevPortOfCallSource = new BehaviorSubject<LocationModel>(null);
    prevPortOfCallData$ = this.prevPortOfCallSource.asObservable();

    private nextPortOfCallSource = new BehaviorSubject<LocationModel>(null);
    nextPortOfCallData$ = this.nextPortOfCallSource.asObservable();

    private prevPortOfCallEtdSource = new BehaviorSubject<Date>(null);
    prevPortOfCallEtdData$ = this.prevPortOfCallEtdSource.asObservable();

    private nextPortOfCallEtaSource = new BehaviorSubject<Date>(null);
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

    setPrevPortOfCallEtd(prevPortOfCallEtd: Date) {
        this.prevPortOfCallEtdSource.next(prevPortOfCallEtd);
    }

    setNextPortOfCallEta(nextPortOfCallEta: Date) {
        this.nextPortOfCallEtaSource.next(nextPortOfCallEta);
    }
}
