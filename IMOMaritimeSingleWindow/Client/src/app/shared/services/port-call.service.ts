import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { FormMetaData } from 'app/shared/interfaces/form-meta-data.interface';
import { PortCallDetailsModel } from 'app/shared/models/port-call-details-model';
import { PortCallModel } from 'app/shared/models/port-call-model';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { LocationModel } from '../models/location-model';
import { AuthRequest } from './auth.request.service';
import { PrevAndNextPocService } from './prev-and-next-poc.service';



@Injectable()
export class PortCallService {
  // Global port call
  private portCallUrl: string;
  private portCallUserUrl: string;
  private updatePortCallStatusAwaitingClearanceUrl: string;
  private updatePortCallStatusCancelledUrl: string;
  private updatePortCallStatusClearedUrl: string;
  private updatePortCallStatusDraftUrl: string;
  // Global purpose
  private purposePortCallUrl: string;
  private purposeOtherNameUrl: string;
  // Global details
  private detailsUrl: string;
  private detailsPortCallUrl: string;
  // Global clearance
  private clearanceUrl: string;
  private clearancePortCallUrl: string;
  // Subjects
  private detailsPristine = new BehaviorSubject<boolean>(true);
  detailsPristine$ = this.detailsPristine.asObservable();

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

  private detailsIdentificationSource = new BehaviorSubject<any>(null);
  detailsIdentificationData$ = this.detailsIdentificationSource.asObservable();

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

  private clearanceDataSource = new BehaviorSubject<any>(null);
  clearanceData$ = this.clearanceDataSource.asObservable();

  private clearanceListDataSource = new BehaviorSubject<any>(null);
  clearanceListData$ = this.clearanceListDataSource.asObservable();

  constructor(private http: Http, private authRequestService: AuthRequest, private prevAndNextPocService: PrevAndNextPocService) {
    // Port call
    this.portCallUrl = 'api/portcall';
    this.portCallUserUrl = 'api/portcall/user';
    this.updatePortCallStatusAwaitingClearanceUrl = 'api/portcall/updatestatus/awaitingclearance';
    this.updatePortCallStatusCancelledUrl = 'api/portcall/updatestatus/cancelled';
    this.updatePortCallStatusClearedUrl = 'api/portcall/updatestatus/cleared';
    this.updatePortCallStatusDraftUrl = 'api/portCall/updateStatus/draft';
    // Purpose
    this.purposePortCallUrl = 'api/purpose/portcall';
    this.purposeOtherNameUrl = 'api/purpose/othername';
    // Details
    this.detailsUrl = 'api/portcalldetails';
    this.detailsPortCallUrl = 'api/portcalldetails/portcall';
    // Clearance
    this.clearanceUrl = 'api/organizationportcall';
    this.clearancePortCallUrl = 'api/organizationportcall/portcall';
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

  updatePortCall(portCall: PortCallModel) {
    console.log('Updating port call...');
    const authHeaders = this.authRequestService.GetHeaders();
    const options = new RequestOptions({ headers: authHeaders });
    return this.http
      .put(this.portCallUrl, portCall, options)
      .map(res => res.json());
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

  // REGISTER NEW PORT CALL
  registerNewPortCall(portCall: PortCallModel) {
    // NEW
    console.log('Registering new port call...');
    const authHeaders = this.authRequestService.GetHeaders();
    const options = new RequestOptions({ headers: authHeaders });
    const uri: string = this.portCallUrl;
    this.setPortCallStatus('Draft');
    return this.http.post(uri, portCall, options).map(res => res.json());
  }
  // Set port call status to awaiting clearance
  updatePortCallStatusAwaitingClearance(portCallId: number) {
    const uri = [this.updatePortCallStatusAwaitingClearanceUrl, portCallId].join('/');
    console.log('Updating port call status to awaiting clearance...');
    return this.http.post(uri, null).map(res => res.json());
  }
  // Set port call status to cleared
  updatePortCallStatusCleared(portCallId: number) {
    const uri = [this.updatePortCallStatusClearedUrl, portCallId].join('/');
    console.log('Updating port call status to cleared...');
    return this.http.post(uri, null).map(res => res.json());
  }
  // Set port call status to cancelled
  updatePortCallStatusCancelled(portCallId: number) {
    const uri = [this.updatePortCallStatusCancelledUrl, portCallId].join('/');
    console.log('Updating port call status to cancelled...');
    this.http
      .post(uri, null)
      .map(res => res.json())
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
      .map(res => res.json());
  }

  // Delete port call draft
  deletePortCallDraft(portCall: PortCallModel) {
    console.log('Deleting port call...');
    const authHeaders = this.authRequestService.GetHeaders();
    const options = new RequestOptions({
      headers: authHeaders,
      body: portCall
    });
    const uri: string = this.portCallUrl;

    return this.http.delete(uri, options).map(res => res.json());
  }
  // Get methods
  getPortCallById(portCallId: number) {
    const uri: string = [this.portCallUrl, portCallId].join('/');

    return this.http.get(uri).map(res => res.json());
  }

  getPortCallsByUserId(userId: number) {
    const uri: string = [this.portCallUserUrl, userId].join('/');
    return this.http.get(uri).map(res => res.json());
  }

  /** * * * * * * * * * * * * *
   *                           *
   * == PORT CALL DETAILS ==   *
   *                           *
   * * * * * * * * * * * * * * */
  setDetails(details: PortCallDetailsModel) {
    // NEW
    this.setCrewPassengersAndDimensionsData(details);
    this.setReportingForThisPortCallData(details);
    this.setDetailsIdentificationData(details);
    this.detailsPristine.next(true);
  }

  setDetailsIdentificationData(data) {
    this.detailsPristine.next(false);
    this.detailsIdentificationSource.next(data);
  }
  // Crew, passengers and dimensions

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

  savePrevAndNextPortCall(portCallId: number, prevPortOfCall: LocationModel, nextPortCall: LocationModel, prevEtd: Date, nextEta: Date) {
    // const updatedPortCallData = new PortCallModel();
    this.getPortCallById(portCallId).subscribe(data => {
      if (data) {
        const updatedPortCallData = data;
        updatedPortCallData.previousLocationId = prevPortOfCall != null ? prevPortOfCall.locationId : null;
        updatedPortCallData.nextLocationId = nextPortCall != null ? nextPortCall.locationId : null;
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

  // SAVE DETAILS
  saveDetails(details: any, purposes: any, otherName: string) {
    details.portCallDetailsId = details.portCallId; // To ensure one-to-one in DB
    console.log('Saving port call details...');
    this.http
      .post(this.detailsUrl, details)
      .map(res => res.json())
      .subscribe(detailsResponse => {
        console.log('Successfully saved port call details.');
        this.savePurposesForPortCall(details.portCallId, purposes, otherName);
      });
  }
  savePurposesForPortCall(pcId: number, purposes: any, otherName: string) {
    if (purposes.length === 0) {
      const uri = [this.purposePortCallUrl, pcId.toString()].join('/');
      this.http
        .delete(uri, null)
        .map(res => res.json())
        .subscribe(removePurposeResponse => {
          if (removePurposeResponse) {
            this.detailsPristine.next(true);
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
        .map(res => res.json())
        .subscribe(purposeResponse => {
          if (purposeResponse) {
            this.detailsPristine.next(true);
          }
          console.log('Purposes successfully saved.');
        });
    }
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
      .map(res => res.json())
      .subscribe(
        data => {
          console.log('Clearance saved successfully.');
        },
        error => {
          console.log('ERROR: ', error);
        }
      );
  }

  getClearanceListForPortCall(portCallId: number) {
    const uri: string = [this.clearancePortCallUrl, portCallId].join('/');
    return this.http.get(uri).map(res => res.json());
  }

  // REGISTER CLEARANCE AGENCIES FOR NEW PORT CALL
  registerClearanceAgenciesForPortCall(portCall: PortCallModel) {
    // NEW
    this.http
      .post(this.clearanceUrl, portCall)
      .map(res => res.json())
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
    this.wipeDetailsData();
  }

  wipeDetailsData() {
    this.reportingForThisPortCallSource.next(null);
    this.crewPassengersAndDimensionsSource.next(null);
    this.portCallPurposeDataSource.next(null);
    this.otherPurposeNameSource.next('');
    this.detailsPristine.next(true);
  }
}
