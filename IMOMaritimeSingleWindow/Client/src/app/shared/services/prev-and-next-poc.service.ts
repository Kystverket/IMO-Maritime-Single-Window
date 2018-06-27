import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BaseService } from './base.service';

@Injectable()
export class PrevAndNextPocService extends BaseService {
    private prevPortOfCallSource = new BehaviorSubject<any>(null);
    prevPortOfCallData$ = this.prevPortOfCallSource.asObservable();

    private nextPortOfCallSource = new BehaviorSubject<any>(null);
    nextPortOfCallData$ = this.nextPortOfCallSource.asObservable();

    private prevPortOfCallEtdSource = new BehaviorSubject<any>(null);
    prevPortOfCallEtdData$ = this.prevPortOfCallEtdSource.asObservable();

    private nextPortOfCallEtaSource = new BehaviorSubject<any>(null);
    nextPortOfCallEtaData$ = this.nextPortOfCallEtaSource.asObservable();

    constructor() {
        super();
    }

    setPrevPortOfCall(prevPortOfCall) {
        this.prevPortOfCallSource.next(prevPortOfCall);
    }

    setNextPortOfCall(nextPortOfCall) {
        this.nextPortOfCallSource.next(nextPortOfCall);
    }

    setPrevPortOfCallEtd(prevPortOfCallEtd) {
        this.prevPortOfCallEtdSource.next(prevPortOfCallEtd);
    }

    setNextPortOfCallEta(nextPortOfCallEta) {
        this.nextPortOfCallEtaSource.next(nextPortOfCallEta);
    }
}
