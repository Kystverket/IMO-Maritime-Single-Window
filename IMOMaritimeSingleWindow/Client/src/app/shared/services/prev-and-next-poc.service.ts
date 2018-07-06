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

    dataIsPristine = new BehaviorSubject<boolean>(true);
    dataIsPristine$ = this.dataIsPristine.asObservable();

    constructor() {
        super();
    }

    setDataPristine(data: boolean) {
        this.dataIsPristine.next(data);
    }

    setPrevPortOfCall(prevPortOfCall: LocationModel) {
        this.dataIsPristine.next(false);
        this.prevPortOfCallSource.next(prevPortOfCall);
    }

    setNextPortOfCall(nextPortOfCall: LocationModel) {
        this.dataIsPristine.next(false);
        this.nextPortOfCallSource.next(nextPortOfCall);
    }

    setPrevPortOfCallEtd(prevPortOfCallEtd: Date) {
        this.dataIsPristine.next(false);
        this.prevPortOfCallEtdSource.next(prevPortOfCallEtd);
    }

    setNextPortOfCallEta(nextPortOfCallEta: Date) {
        this.dataIsPristine.next(false);
        this.nextPortOfCallEtaSource.next(nextPortOfCallEta);
    }
}
