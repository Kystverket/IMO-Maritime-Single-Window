import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject ,  Observable } from 'rxjs';
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

  private portCallDetailsIdSource = new BehaviorSubject<any>(null);
  portCallDetailsIdData$ = this.portCallDetailsIdSource.asObservable();

  private crewPassengersAndDimensionsSource = new BehaviorSubject<any>(null);
  crewPassengersAndDimensionsData$ = this.crewPassengersAndDimensionsSource.asObservable();

  private crewPassengersAndDimensionsMeta = new BehaviorSubject<FormMetaData>({ valid: true });
  crewPassengersAndDimensionsMeta$ = this.crewPassengersAndDimensionsMeta.asObservable();

  private cargoBriefDescriptionSource = new BehaviorSubject<string>('');
  cargoBriefDescriptionData$ = this.cargoBriefDescriptionSource.asObservable();

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
    private http: HttpClient
  ) {
    super();
  }

  setDetails(details: PortCallDetailsModel) {
    this.setPortCallDetailsId(details.portCallDetailsId);
    this.setCrewPassengersAndDimensionsData(details);
    this.setReportingForThisPortCallData(details);
    this.setCargoBriefDescriptionData(details.cargoBriefDescription);
    this.detailsPristine.next(true);
  }

  setPortCallDetailsId(data) {
    this.portCallDetailsIdSource.next(data);
  }

  setCrewPassengersAndDimensionsData(data) {
    this.detailsPristine.next(false);
    this.crewPassengersAndDimensionsSource.next(data);
  }

  setCrewPassengersAndDimensionsMeta(metaData: FormMetaData) {
    this.crewPassengersAndDimensionsMeta.next(metaData);
  }

  setCargoBriefDescriptionData(data) {
    this.cargoBriefDescriptionSource.next(data);
  }

  // Reporting
  // This is a list of checkboxes that specify which FAL forms to include in this port call registration

  setReportingForThisPortCallData(data) {
    this.detailsPristine.next(false);
    this.reportingForThisPortCallSource.next(data);
  }
  // Purpose

  setPortCallPurposeData(data) {
    this.detailsPristine.next(false);
    this.portCallPurposeDataSource.next(data);
  }
  // User-specified purpose of type "Other"
  setOtherPurposeName(data) {
    this.detailsPristine.next(false);
    this.otherPurposeNameSource.next(data);
  }

  setOtherPurposeData(data) {
    this.otherPurposeDataSource.next(data);
  }

  setDetailsPristine(isPristine: boolean) {
    this.detailsPristine.next(isPristine);
  }

  // Get methods
  getDetailsByPortCallId(portCallId: number): Observable<PortCallDetailsModel> {
    const uri: string = [this.detailsPortCallUrl, portCallId].join('/');
    return this.http.get<PortCallDetailsModel>(uri);
  }

  getPurposeByPortCallId(portCallId: number): Observable<any> {
    const uri: string = [this.purposePortCallUrl, portCallId].join('/');
    return this.http.get<any>(uri);
  }

  getOtherName(portCallId: number) {
    const uri: string = [this.purposeOtherNameUrl, portCallId].join('/');
    return this.http.get(uri);
  }

  wipeDetailsData() {
    this.portCallDetailsIdSource.next(null);
    this.reportingForThisPortCallSource.next(null);
    this.crewPassengersAndDimensionsSource.next(null);
    this.portCallPurposeDataSource.next(null);
    this.otherPurposeNameSource.next('');
    this.detailsPristine.next(true);
  }

}
