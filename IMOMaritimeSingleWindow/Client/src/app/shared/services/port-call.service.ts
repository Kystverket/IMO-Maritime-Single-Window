import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocationModel } from '../models/location-model';
import { PortCallModel } from '../models/port-call-model';
import { AuthRequest } from './auth.request.service';
import { PortCallDetailsService } from './port-call-details.service';
import { PrevAndNextPocService } from './prev-and-next-poc.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { PortCallDetailsModel } from '../models/port-call-details-model';

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
  private updateOverviewSource = new BehaviorSubject<any>(null);
  updateOverview$ = this.updateOverviewSource.asObservable();

  private shipDataSource = new BehaviorSubject<any>(null);
  shipData$ = this.shipDataSource.asObservable();

  private locationDataSource = new BehaviorSubject<any>(null);
  locationData$ = this.locationDataSource.asObservable();

  private etaEtdDataSource = new BehaviorSubject<any>(null);
  etaEtdData$ = this.etaEtdDataSource.asObservable();

  private portCallStatusSource = new BehaviorSubject<any>(null);
  portCallStatusData$ = this.portCallStatusSource.asObservable();

  private portCallIdSource = new BehaviorSubject<any>(null);
  portCallIdData$ = this.portCallIdSource.asObservable();

  private clearanceDataSource = new BehaviorSubject<any>(null);
  clearanceData$ = this.clearanceDataSource.asObservable();

  private clearanceListDataSource = new BehaviorSubject<any>(null);
  clearanceListData$ = this.clearanceListDataSource.asObservable();

  constructor(
    private authRequestService: AuthRequest,
    private prevAndNextPocService: PrevAndNextPocService,
    private portCallDetailsService: PortCallDetailsService
  ) { }
    private http: Http,

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

  setUpdateOverview(data) {
    this.updateOverviewSource.next(data);
  }

  /** * * * * * * * * * * *
   *                       *
   *  == NEW PORT CALL ==  *
   *                       *
   * * * * * * * * * * * * */
  // setPortCall: sets values for: Ship, Location, ETA/ETD, and Clearance list
  setPortCall(overview: any) {
    console.log(overview);
    this.setPortCallIdData(overview.portCall.portCallId);
    // Ship Location Time
    this.setShipData(overview.ship);
    this.setLocationData(overview.location);
    const etaEtd = this.etaEtdDataFormat(
      overview.portCall.locationEta,
      overview.portCall.locationEtd
    );
    this.setEtaEtdData(etaEtd);
    // Clearance list
    this.setClearanceListData(overview.clearanceList);
    this.setPortCallStatus(overview.status);
  }

  updatePortCall(portCall: PortCallModel): Observable<any> {
    console.log('Updating port call...');
    return this.http
      .put(this.portCallUrl, portCall);
  }
  setShipData(data) {
    this.shipDataSource.next(data);
  }
  setLocationData(data) {
    this.locationDataSource.next(data);
  }
  setEtaEtdData(data) {
    this.etaEtdDataSource.next(data);
  }
  setPortCallStatus(data) {
    this.portCallStatusSource.next(data);
  }
  setPortCallIdData(data) {
    this.portCallIdSource.next(data);
  }

  // REGISTER NEW PORT CALL
  registerNewPortCall(portCall: PortCallModel): Observable<PortCallModel> {
    console.log('Registering new port call...');
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
    console.log('Updating port call status to awaiting clearance...');
    return this.http.post(uri, null);
  }
  // Set port call status to cleared
  updatePortCallStatusCleared(portCallId: number): Observable<any> {
    const uri = [this.updatePortCallStatusClearedUrl, portCallId].join('/');
    console.log('Updating port call status to cleared...');
    return this.http.post(uri, null);
  }
  // Set port call status to completed
  updatePortCallStatusCompleted(portCallId: number): Observable<any> {
    const uri = [this.updatePortCallStatusCompletedUrl, portCallId].join('/');
    console.log('Updating port call status to completed...');
    return this.http.post(uri, null);
  }
  // Set port call status to cancelled
  updatePortCallStatusCancelled(portCallId: number) {
    const uri = [this.updatePortCallStatusCancelledUrl, portCallId].join('/');
    console.log('Updating port call status to cancelled...');
    this.http
      .post(uri, null)
      .subscribe(updateStatusResponse => {
        console.log('Port call successfully cancelled.');
      });
  }
  // Set port call status to draft
  updatePortCallStatusDraft(portCallId: number) {
    const uri = [this.updatePortCallStatusDraftUrl, portCallId].join('/');
    console.log('Updating port call status to draft...');
    return this.http
      .put(uri, null)
      .map(res => res);
  }

  // Delete port call draft
  deletePortCallDraft(portCall: PortCallModel) {
    console.log('Deleting port call...');
    const uri: string = this.portCallUrl;
    return this.http.delete(uri);
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
  saveDetails(details: PortCallDetailsModel, purposes: any, otherName: string) {
    console.log(details);
    details.portCallDetailsId = details.portCallId; // To ensure one-to-one in DB
    console.log('Saving port call details...');
    this.http
      .post(this.detailsUrl, details)
      .subscribe(detailsResponse => {
        console.log('Successfully saved port call details.');
        this.savePurposesForPortCall(details.portCallId, purposes, otherName);
      });
  }

  savePurposesForPortCall(pcId: number, purposes: any, otherName: string) {
    if (purposes.length === 0) {
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
      console.log('Saving port call purposes to database...');
      this.http
        .put(this.purposePortCallUrl, pcHasPurposeList)

        .subscribe(purposeResponse => {
          if (purposeResponse) {
            this.portCallDetailsService.setDetailsPristine(true);
          }
          console.log('Purposes successfully saved.');
        });
    }
  }

  savePrevAndNextPortCall(
    portCallId: number,
    prevPortOfCall: LocationModel,
    nextPortCall: LocationModel,
    prevEtd: Date,
    nextEta: Date
  ) {
    // const updatedPortCallData = new PortCallModel();
    this.getPortCallById(portCallId).subscribe(data => {
      if (data) {
        const updatedPortCallData = data;
        updatedPortCallData.previousLocationId =
          prevPortOfCall != null ? prevPortOfCall.locationId : null;
        updatedPortCallData.nextLocationId =
          nextPortCall != null ? nextPortCall.locationId : null;
        updatedPortCallData.previousLocationEtd = prevEtd;
        updatedPortCallData.nextLocationEta = nextEta;
        console.log(updatedPortCallData);
        this.updatePortCall(updatedPortCallData).subscribe(
          result => {
            console.log(result);
            this.prevAndNextPocService.setDataPristine(true);
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  /** * * * * * * * * *
   *                   *
   *  == CLEARANCE ==  *
   *                   *
   * * * * * * * * * * */

  setClearance(data) {
    this.clearanceDataSource.next(data);
  }

  // Clearance agencies list

  setClearanceListData(data) {
    // NEW
    this.clearanceListDataSource.next(data);
  }

  saveClearance(clearanceModel: any) {
    console.log('Saving clearance to database...');
    this.http
      .put(this.clearanceUrl, clearanceModel)
      .subscribe(
        data => {
          console.log('Clearance saved successfully.');
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
    // NEW
    this.http
      .post(this.clearanceUrl, portCall)
      .subscribe(clearanceData => {
        console.log(
          'Clearance agency information successfully added to port call.'
        );
        this.clearanceListDataSource.next(clearanceData);
      });
  }

  // Wipe methods
  wipeServiceData() {
    this.shipDataSource.next(null);
    this.locationDataSource.next(null);
    this.etaEtdDataSource.next(null);
    this.clearanceListDataSource.next(null);
    // Details
    this.portCallDetailsService.wipeDetailsData();
  }
}
