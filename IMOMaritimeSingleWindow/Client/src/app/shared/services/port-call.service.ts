import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';

import { BehaviorSubject ,  Observable } from 'rxjs';
import { PortCallDetailsModel } from '../models/port-call-details-model';
import { PortCallModel } from '../models/port-call-model';
import { PortCallDetailsService } from './port-call-details.service';

/**
 * To future developers:
 * Sorry about the mess.
 */
@Injectable()
export class PortCallService {
  // Global port call
  private portCallUrl = 'api/portcall';
  private portCallUserUrl = 'api/portcall/user';
  private updatePortCallStatusAwaitingClearanceUrl = 'api/portcall/updatestatus/awaitingclearance';
  private updatePortCallStatusCancelledUrl = 'api/portcall/updatestatus/cancelled';
  private updatePortCallStatusClearedUrl = 'api/portcall/updatestatus/cleared';
  private updatePortCallStatusCompletedUrl = 'api/portcall/updatestatus/completed';
  private updatePortCallStatusDraftUrl = 'api/portCall/updateStatus/draft';

  // Global details
  private detailsUrl = 'api/portcalldetails';
  private detailsPortCallUrl = 'api/portcalldetails/portcall';

  // Global purpose
  private purposePortCallUrl = 'api/purpose/portcall';
  private purposeOtherNameUrl = 'api/purpose/othername';

  // Global clearance
  private clearanceUrl = 'api/organizationportcall';
  private clearancePortCallUrl = 'api/organizationportcall/portcall';

  // Data sources with observables
  private portCallIdSource = new BehaviorSubject<any>(null);
  portCallIdData$ = this.portCallIdSource.asObservable();

  private portCallStatusSource = new BehaviorSubject<any>(null);
  portCallStatusData$ = this.portCallStatusSource.asObservable();

  private clearanceDataSource = new BehaviorSubject<any>(null);
  clearanceData$ = this.clearanceDataSource.asObservable();

  private clearanceListDataSource = new BehaviorSubject<any>(null);
  clearanceListData$ = this.clearanceListDataSource.asObservable();

  private createdByUserDataSource = new BehaviorSubject<any>(null);
  createdByUserData$ = this.createdByUserDataSource.asObservable();

  // Data sources for Voyages tab
  private shipDataSource = new BehaviorSubject<any>(null);
  shipData$ = this.shipDataSource.asObservable();

  private locationDataSource = new BehaviorSubject<any>(null);
  locationData$ = this.locationDataSource.asObservable();

  private etaSource = new BehaviorSubject<DateTime>(null);
  etaData$ = this.etaSource.asObservable();

  private etdSource = new BehaviorSubject<DateTime>(null);
  etdData$ = this.etdSource.asObservable();

  private prevLocationDataSource = new BehaviorSubject<any>(null);
  prevLocationData$ = this.prevLocationDataSource.asObservable();

  private prevEtdSource = new BehaviorSubject<DateTime>(null);
  prevEtdData$ = this.prevEtdSource.asObservable();

  private nextLocationDataSource = new BehaviorSubject<any>(null);
  nextLocationData$ = this.nextLocationDataSource.asObservable();

  private nextEtaSource = new BehaviorSubject<DateTime>(null);
  nextEtaData$ = this.nextEtaSource.asObservable();

  private voyagesErrorsSource = new BehaviorSubject<boolean>(null);
  voyagesErrors$ = this.voyagesErrorsSource.asObservable();

  private voyagesIsPristineSource = new BehaviorSubject<boolean>(true);
  voyagesIsPristine$ = this.voyagesIsPristineSource.asObservable();

  constructor(
    private http: HttpClient,
    private portCallDetailsService: PortCallDetailsService
  ) { }

  private portCallDataSource = new BehaviorSubject<PortCallModel>(null);
  portCallData$ = this.portCallDataSource.asObservable();

  setPortCallData(data) {
    this.portCallDataSource.next(data);
  }

  // Helper method for ETA/ETD formatting
  etaEtdDataFormat(arrival, departure) {
    const etaData = new Date(arrival);
    const etdData = new Date(departure);
    return {
      eta: {
        year: etaData.getFullYear(),
        month: etaData.getMonth() + 1,
        day: etaData.getDate(),
        hour: etaData.getHours(),
        minute: etaData.getMinutes()
      },
      etd: {
        year: etdData.getFullYear(),
        month: etdData.getMonth() + 1,
        day: etdData.getDate(),
        hour: etdData.getHours(),
        minute: etdData.getMinutes()
      }
    };
  }
  private dateStringToDateTime(dateString: string): DateTime {
    const dateObject = new Date(dateString);
    const dateTime: DateTime = {
      date: new NgbDate(dateObject.getFullYear(), dateObject.getMonth() + 1, dateObject.getDate()),
      time: new NgbTime(dateObject.getHours(), dateObject.getMinutes(), 0)
    };
    return dateTime;
  }

  // setPortCall: sets values for: Ship, Location, ETA/ETD, and Clearance list
  setPortCall(overview: any) {
    this.setPortCallIdData(overview.portCall.portCallId);
    // Ship Location Time
    this.setShipData(overview.ship);
    this.setLocationData(overview.location);
    this.setEtaData(this.dateStringToDateTime(overview.portCall.locationEta));
    this.setEtdData(this.dateStringToDateTime(overview.portCall.locationEtd));
    this.setPrevLocationData(overview.portCall.previousLocation);
    if (overview.portCall.previousLocationEtd) {
      this.setPrevEtdData(this.dateStringToDateTime(overview.portCall.previousLocationEtd));
    }
    this.setNextLocationData(overview.portCall.nextLocation);
    if (overview.portCall.nextLocationEta) {
      this.setNextEtaData(this.dateStringToDateTime(overview.portCall.nextLocationEta));
    }
    // Clearance list
    this.setClearanceListData(overview.clearanceList);
    this.setPortCallStatus(overview.status);
    // User info
    this.setCreatedByUserData(overview.portCall.user);
  }

  updatePortCall(portCall: PortCallModel): Observable<any> {
    return this.http.put(this.portCallUrl, portCall);
  }

  setPortCallIdData(data) {
    this.portCallIdSource.next(data);
  }

  setShipData(data) {
    this.voyagesIsPristineSource.next(false);
    this.shipDataSource.next(data);
  }
  setLocationData(data) {
    this.voyagesIsPristineSource.next(false);
    this.locationDataSource.next(data);
  }
  setEtaData(data) {
    this.voyagesIsPristineSource.next(false);
    this.etaSource.next(data);
  }
  setEtdData(data) {
    this.voyagesIsPristineSource.next(false);
    this.etdSource.next(data);
  }
  setPrevLocationData(data) {
    this.voyagesIsPristineSource.next(false);
    this.prevLocationDataSource.next(data);
  }
  setPrevEtdData(data) {
    this.voyagesIsPristineSource.next(false);
    this.prevEtdSource.next(data);
  }
  setNextLocationData(data) {
    this.voyagesIsPristineSource.next(false);
    this.nextLocationDataSource.next(data);
  }
  setNextEtaData(data) {
    this.voyagesIsPristineSource.next(false);
    this.nextEtaSource.next(data);
  }
  setVoyagesErrors(hasError: boolean) {
    this.voyagesErrorsSource.next(hasError);
  }
  setVoyagesIsPristine(isPristine: boolean) {
    this.voyagesIsPristineSource.next(isPristine);
  }

  setPortCallStatus(data) {
    this.portCallStatusSource.next(data);
  }
  setCreatedByUserData(data) {
    this.createdByUserDataSource.next(data);
  }

  // REGISTER NEW PORT CALL
  registerNewPortCall(portCall: PortCallModel): Observable<PortCallModel> {
    const uri: string = this.portCallUrl;
    this.setPortCallStatus('Draft');
    return this.http.post<PortCallModel>(uri, portCall);
  }
  // Set port call status to awaiting clearance
  updatePortCallStatusAwaitingClearance(portCallId: number) {
    const uri = [
      this.updatePortCallStatusAwaitingClearanceUrl,
      portCallId
    ].join('/');
    return this.http.post(uri, null);
  }
  // Set port call status to cleared
  updatePortCallStatusCleared(portCallId: number): Observable<any> {
    const uri = [this.updatePortCallStatusClearedUrl, portCallId].join('/');
    return this.http.post(uri, null);
  }
  // Set port call status to completed
  updatePortCallStatusCompleted(portCallId: number): Observable<any> {
    const uri = [this.updatePortCallStatusCompletedUrl, portCallId].join('/');
    return this.http.post(uri, null);
  }
  // Set port call status to cancelled
  updatePortCallStatusCancelled(portCallId: number): Observable<any> {
    const uri = [this.updatePortCallStatusCancelledUrl, portCallId].join('/');
    return this.http.post(uri, null);
  }
  // Set port call status to draft
  updatePortCallStatusDraft(portCallId: number) {
    const uri = [this.updatePortCallStatusDraftUrl, portCallId].join('/');
    return this.http
      .put(uri, null)
      .map(res => res);
  }

  // Sets port call status to deleted
  deletePortCallDraft(portCallId: number): Observable<PortCallModel> {
    const uri: string = [this.portCallUrl, 'delete', portCallId].join('/');
    return this.http.put<PortCallModel>(uri, null);
  }
  // Get methods
  getPortCallById(portCallId: number): Observable<PortCallModel> {
    const uri: string = [this.portCallUrl, portCallId].join('/');

    return this.http.get<PortCallModel>(uri);
  }

  getPortCallsByUserId(userId: number): Observable<PortCallModel[]> {
    const uri: string = [this.portCallUserUrl, userId].join('/');
    return this.http.get<PortCallModel[]>(uri);
  }

  // SAVE DETAILS
  saveDetails(details: PortCallDetailsModel, purposes: any, otherName: string): Observable<PortCallDetailsModel> {
    return this.http.post<PortCallDetailsModel>(this.detailsUrl, details);
  }

  savePurposesForPortCall(pcId: number, purposes: any, otherName: string) {
    if (purposes == null || purposes.length === 0) {
      const uri = [this.purposePortCallUrl, pcId.toString()].join('/');
      this.http
        .delete(uri)
        .subscribe(removePurposeResponse => {
          if (removePurposeResponse) {
            this.portCallDetailsService.setDetailsPristine(true);
          }
        });
    } else {
      const pcHasPurposeList = purposes.map(p => {
        return {
          portCallId: pcId,
          portCallPurposeId: p.portCallPurposeId,
          purposeIfUnknown: p.name === 'Other' ? otherName : null
        };
      });
      this.http
        .put(this.purposePortCallUrl, pcHasPurposeList)

        .subscribe(purposeResponse => {
          if (purposeResponse) {
            this.portCallDetailsService.setDetailsPristine(true);
          }
        });
    }
  }

  /* * * * * * * * * * *
   *                   *
   *  == CLEARANCE ==  *
   *                   *
   * * * * * * * * * * */

  setClearance(data) {
    this.clearanceDataSource.next(data);
  }

  // Clearance agencies list

  setClearanceListData(data) {
    this.clearanceListDataSource.next(data);
  }

  saveClearance(clearanceModel: any) {
    this.http
      .put(this.clearanceUrl, clearanceModel)
      .subscribe(
        data => {
        },
        error => {
          console.log('ERROR: ', error);
        }
      );
  }

  getClearanceListForPortCall(portCallId: number): Observable<any> {
    const uri: string = [this.clearancePortCallUrl, portCallId].join('/');
    return this.http.get(uri);
  }

  // REGISTER CLEARANCE AGENCIES FOR NEW PORT CALL
  registerClearanceAgenciesForPortCall(portCall: PortCallModel) {
    this.http
      .post(this.clearanceUrl, portCall)
      .subscribe(clearanceData => {
        this.clearanceListDataSource.next(clearanceData);
      });
  }

  // Wipe methods
  wipeServiceData() {
    this.portCallDataSource.next(null);
    this.portCallIdSource.next(null);
    this.shipDataSource.next(null);
    this.locationDataSource.next(null);
    this.etaSource.next(null);
    this.etdSource.next(null);
    this.prevLocationDataSource.next(null);
    this.prevEtdSource.next(null);
    this.nextLocationDataSource.next(null);
    this.nextEtaSource.next(null);
    this.clearanceListDataSource.next(null);
    this.createdByUserDataSource.next(null);
    // Details
    this.portCallDetailsService.wipeDetailsData();
  }
}
