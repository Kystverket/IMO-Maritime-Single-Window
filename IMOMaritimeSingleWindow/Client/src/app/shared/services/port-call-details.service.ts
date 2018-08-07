import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { FormMetaData } from '../interfaces/form-meta-data.interface';
import { PortCallDetailsModel } from '../models/port-call-details-model';
import { BaseService } from './base.service';

@Injectable()
export class PortCallDetailsService extends BaseService {

  // Global purpose
  private purposePortCallUrl = 'api/purpose/portcall';
  private purposeOtherNameUrl = 'api/purpose/othername';
  // Global details
  private detailsUrl = 'api/portcalldetails';
  private detailsPortCallUrl = 'api/portcalldetails/portcall';

  private crewPassengersAndDimensionsSource = new BehaviorSubject<any>(null);
  crewPassengersAndDimensionsData$ = this.crewPassengersAndDimensionsSource.asObservable();

  private crewPassengersAndDimensionsMeta = new BehaviorSubject<FormMetaData>({
    valid: true
  });
  crewPassengersAndDimensionsMeta$ = this.crewPassengersAndDimensionsMeta.asObservable();

  private reportingForThisPortCallSource = new BehaviorSubject<any>(null);
  reportingForThisPortCallData$ = this.reportingForThisPortCallSource.asObservable();

  private portCallPurposeDataSource = new BehaviorSubject<any>(null);
  portCallPurposeData$ = this.portCallPurposeDataSource.asObservable();

  private otherPurposeNameSource = new BehaviorSubject<string>('');
  otherPurposeName$ = this.otherPurposeNameSource.asObservable();

  private otherPurposeDataSource = new BehaviorSubject<any>(null);
  otherPurposeData$ = this.otherPurposeDataSource.asObservable();

  private detailsPristine = new BehaviorSubject<boolean>(true);
  detailsPristine$ = this.detailsPristine.asObservable();

  constructor(
    private http: Http
  ) {
    super();
  }

  setDetails(details: PortCallDetailsModel) {
    // NEW
    this.setCrewPassengersAndDimensionsData(details);
    this.setReportingForThisPortCallData(details);
    // this.setPortCallIdData(details);
    this.detailsPristine.next(true);
  }

  setCrewPassengersAndDimensionsData(data) {
    // NEW
    this.detailsPristine.next(false);
    this.crewPassengersAndDimensionsSource.next(data);
  }

  setCrewPassengersAndDimensionsMeta(metaData: FormMetaData) {
    this.crewPassengersAndDimensionsMeta.next(metaData);
  }

  // Reporting
  // This is a list of checkboxes that specify which FAL forms to include in this port call registration

  setReportingForThisPortCallData(data) {
    // NEW
    this.detailsPristine.next(false);
    this.reportingForThisPortCallSource.next(data);
  }
  // Purpose

  setPortCallPurposeData(data) {
    // NEW
    this.detailsPristine.next(false);
    this.portCallPurposeDataSource.next(data);
  }
  // User-specified purpose of type "Other"
  setOtherPurposeName(data) {
    this.detailsPristine.next(false);
    this.otherPurposeNameSource.next(data);
  }

  setOtherPurposeData(data) {
    // NEW - try to use otherpurpose object instead of just name string, for easier id handling etc.
    this.otherPurposeDataSource.next(data);
  }

  setDetailsPristine(isPristine: boolean) {
    this.detailsPristine.next(isPristine);
  }

  // Get methods
  getDetailsByPortCallId(portCallId: number) {
    const uri: string = [this.detailsPortCallUrl, portCallId].join('/');
    return this.http
      .get(uri)
      .map(res => {
        if (res && res.ok) {
          return res.json();
        } else {
          return res.status;
        }
      })
      .catch(e => {
        return Observable.of(e);
      });
  }

  getPurposeByPortCallId(portCallId: number) {
    const uri: string = [this.purposePortCallUrl, portCallId].join('/');
    return this.http
      .get(uri)
      .map(res => {
        return res.json();
      })
      .catch(e => {
        console.log(e);
        return Observable.of(e);
      });
  }

  getOtherName(portCallId: number) {
    const uri: string = [this.purposeOtherNameUrl, portCallId].join('/');
    return this.http
      .get(uri)
      .map(res => {
        return res.json();
      })
      .catch(e => {
        console.log(e);
        return Observable.of(e);
      });
  }

  wipeDetailsData() {
    this.reportingForThisPortCallSource.next(null);
    this.crewPassengersAndDimensionsSource.next(null);
    this.portCallPurposeDataSource.next(null);
    this.otherPurposeNameSource.next('');
    this.detailsPristine.next(true);
  }

}
