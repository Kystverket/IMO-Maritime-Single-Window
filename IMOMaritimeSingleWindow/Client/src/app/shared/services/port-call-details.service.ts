import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocationModel } from '../models/location-model';
import { BaseService } from './base.service';
import { FormMetaData } from '../interfaces/form-meta-data.interface';

@Injectable()
export class PortCallDetailsService extends BaseService {
  private prevPortOfCallSource = new BehaviorSubject<LocationModel>(null);
  prevPortOfCallData$ = this.prevPortOfCallSource.asObservable();

  private nextPortOfCallSource = new BehaviorSubject<LocationModel>(null);
  nextPortOfCallData$ = this.nextPortOfCallSource.asObservable();

  private prevPortOfCallEtdSource = new BehaviorSubject<Date>(null);
  prevPortOfCallEtdData$ = this.prevPortOfCallEtdSource.asObservable();

  private nextPortOfCallEtaSource = new BehaviorSubject<Date>(null);
  nextPortOfCallEtaData$ = this.nextPortOfCallEtaSource.asObservable();

  private prevAndNextPortOfCallMeta = new BehaviorSubject<FormMetaData>({
    valid: true
  });
  prevAndNextPortOfCallMeta$ = this.prevAndNextPortOfCallMeta.asObservable();

  private dataIsPristine = new BehaviorSubject<boolean>(true);
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

  setPrevPortOfCallEtd(prevPortOfCallEtd) {
    this.dataIsPristine.next(false);
    this.prevPortOfCallEtdSource.next(prevPortOfCallEtd);
  }

  setNextPortOfCallEta(nextPortOfCallEta: Date) {
    this.dataIsPristine.next(false);
    this.nextPortOfCallEtaSource.next(nextPortOfCallEta);
  }

  setPrevAndNextPortOfCallMeta(metaData: FormMetaData) {
      this.prevAndNextPortOfCallMeta.next(metaData);
  }
}
