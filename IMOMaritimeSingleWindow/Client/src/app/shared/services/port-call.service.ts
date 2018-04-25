import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { PortCallModel } from '../models/port-call-model';
import { PortCallOverviewModel } from '../models/port-call-overview-model';
import { PortCallDetailsModel } from '../models/port-call-details-model';
import { FormMetaData } from '../models/form-meta-data.interface';
import { ClearanceModel } from '../models/clearance-model';

@Injectable()
export class PortCallService {

  constructor(private http: Http) {
    // Port call
    this.getPortCallUrl = "api/portcall/get";
    this.savePortCallUrl = "api/portcall/register";
    this.getPurposeUrl = "api/portcallpurpose/portcall"
    this.getPortCallsByUserIdUrl = "api/portcall/user";
    this.portCallModel = new PortCallModel();

    // Details
    this.saveDetailsUrl = "api/portcalldetails/register";
    this.getDetailsByPortCallIdUrl = "api/portcalldetails/portcall"
    this.detailsModel = new PortCallDetailsModel();

    // Overview
    this.overviewModel = new PortCallOverviewModel();
    this.getOverviewUrl = 'api/portcall/overview';
    this.getPortCallsByLocationUrl = 'api/portcall/location';

    // Clearance
    this.saveClearanceUrl = "api/organizationportcall/save";
    this.getClearanceListByPortCallUrl = "api/organizationportcall/portcall";
    this.registerClearanceAgenciesForPortCallUrl = "api/organizationportcall/register";
  }

  // Global overview
  private overviewModel: PortCallOverviewModel;
  private getOverviewUrl: string;
  private getPortCallsByLocationUrl: string;
  // Global port call
  private getPortCallUrl: string;
  private savePortCallUrl: string;
  private getPurposeUrl: string;
  private getPortCallsByUserIdUrl: string;
  private portCallModel: PortCallModel;
  // Global details
  private saveDetailsUrl: string;
  private getDetailsByPortCallIdUrl: string;
  private detailsModel: PortCallDetailsModel;
  // Global clearance
  private getClearanceUrl: string;
  private saveClearanceUrl: string;
  private getClearanceListByPortCallUrl: string;
  private registerClearanceAgenciesForPortCallUrl: string;
  // Subjects
  private detailsDataSource = new BehaviorSubject<any>(null);
  detailsData$ = this.detailsDataSource.asObservable();
  private detailsPristine = new BehaviorSubject<boolean>(true);
  detailsPristine$ = this.detailsPristine.asObservable();

  private overviewDataSource = new BehaviorSubject<any>(null);
  overviewData$ = this.overviewDataSource.asObservable();

  private clearanceDataSource = new BehaviorSubject<any>(null);
  clearanceData$ = this.clearanceDataSource.asObservable();

  // Overview methods

  wipeServiceData() {
    this.portCallModel = new PortCallModel();
    this.overviewModel = new PortCallOverviewModel();

    this.shipDataSource.next(null);
    this.locationDataSource.next(null);
    this.etaEtdDataSource.next(null);

    // Overview
    this.overviewDataSource.next(null);
    // Details
    this.wipeDetailsData();
  }

  wipeDetailsData() {
    this.reportingForThisPortCallSource.next(null);
    this.crewPassengersAndDimensionsSource.next(null);
    this.portCallPurposeSource.next(null);
    this.otherPurposeNameSource.next("");
    this.detailsModel = new PortCallDetailsModel();
    this.detailsDataSource.next(new PortCallDetailsModel());
    this.detailsPristine.next(true);
  }

  getPortCallById(portCallId: number) {
    let uri: string = [this.getPortCallUrl, portCallId].join('/');

    return this.http.get(uri)
      .map(res => res.json());
  }

  // User
  getPortCallsByUserId(userId: number) {
    let uri: string = [this.getPortCallsByUserIdUrl, userId].join('/');
    return this.http.get(uri)
      .map(res => res.json());
  }

  getPortCallPurpose(purposeId: number) {
    let uri: string = [this.getPurposeUrl, purposeId].join('/');
    return this.http.get(uri).map(res => {
      return res.json();
    }).catch(e => {
      console.log(e);
      return Observable.of(e);
    });
  }

  setPortCall(overviewModel: PortCallOverviewModel) {
    this.detailsModel.portCallId = overviewModel.portCall.portCallId;
    this.setDetails(this.detailsModel);
    this.setShipLocationTime(overviewModel);

    overviewModel.clearanceList.forEach(c => console.log(c));
    this.overviewModel.clearanceList = overviewModel.clearanceList;
    this.overviewDataSource.next(this.overviewModel);
  }

  setDetails(detailsModel: PortCallDetailsModel) {
    if (detailsModel == null) {
      this.wipeDetailsData();
    } else {
      this.detailsModel = detailsModel;
      this.detailsDataSource.next(detailsModel);
      this.setCrewPassengersAndDimensionsData(detailsModel);
      this.setReportingForThisPortCallData(detailsModel);
    }

    this.detailsPristine.next(true);
  }

  setShipLocationTime(overviewModel: PortCallOverviewModel) {
    this.setShipData(overviewModel.shipOverview);
    this.setLocationData(overviewModel.locationOverview);

    let etaData = new Date(overviewModel.portCall.locationEta);
    let etdData = new Date(overviewModel.portCall.locationEtd);

    let etaEtdData = {
      eta: { year: etaData.getFullYear(), month: etaData.getMonth(), day: etaData.getDate(), hour: etaData.getHours(), minute: etaData.getMinutes() },
      etd: { year: etdData.getFullYear(), month: etdData.getMonth(), day: etdData.getDate(), hour: etdData.getHours(), minute: etdData.getMinutes() },
    };
    this.setEtaEtdData(etaEtdData);
  }

  savePortCall() {
    console.log("Saving port call to database...");
    this.http.post(this.savePortCallUrl, this.overviewModel.portCall).map(res => res.json()).subscribe(
      data => {
        console.log("Success.");
        console.log(data);
        this.detailsModel.portCallId = data.portCallId;
        // add list of government agencies for clearance
        console.log("Registering government clearance agencies to port call...");
        this.http.post(this.registerClearanceAgenciesForPortCallUrl, data).map(res => res.json()).subscribe(
          clearanceData => {
            console.log("Clearance information added successfully.");
          }
        )
      }
    );
  }

  // Ship, Location and Time

  private shipDataSource = new BehaviorSubject<any>(null);
  shipData$ = this.shipDataSource.asObservable();
  setShipData(data) {
    this.portCallModel.shipId = data != null ? data.ship.shipId : null;
    this.overviewModel.portCall = this.portCallModel;
    this.overviewModel.shipOverview = data;
    this.overviewDataSource.next(this.overviewModel);
  }

  private locationDataSource = new BehaviorSubject<any>(null);
  locationData$ = this.locationDataSource.asObservable();
  setLocationData(data) {
    this.portCallModel.locationId = data != null ? data.location.locationId : null;
    this.overviewModel.locationOverview = data;
    this.overviewDataSource.next(this.overviewModel);
  }

  private etaEtdDataSource = new BehaviorSubject<any>(null);
  etaEtdData$ = this.etaEtdDataSource.asObservable();
  setEtaEtdData(data) {

    if (data != null) {
      // UTC conversion
      let eta = new Date(Date.UTC(data.eta.year, (data.eta.month - 1), data.eta.day, data.eta.hour, data.eta.minute));
      let etd = new Date(Date.UTC(data.etd.year, (data.etd.month - 1), data.eta.day, data.eta.hour, data.eta.minute));

      this.overviewModel.portCall.locationEta = eta;
      this.overviewModel.portCall.locationEtd = etd;
    } else {
      this.overviewModel.portCall.locationEta = null;
      this.overviewModel.portCall.locationEtd = null;
    }
    this.etaEtdDataSource.next(data);
    // Overview
    this.overviewDataSource.next(this.overviewModel);
  }

  // Port Call Details
  getDetailsByPortCallId(portCallId: number) {
    let uri: string = [this.getDetailsByPortCallIdUrl, portCallId].join('/');
    return this.http.get(uri).map(res => {
      if (res && res.ok) {
        return res.json();
      } else {
        return res.status;
      }
    }).catch(e => {
      return Observable.of(e);
    });

  }

  // This is a list of checkboxes that specify which FAL forms to include in this port call registration 
  private reportingForThisPortCallSource = new BehaviorSubject<any>(null);
  reportingForThisPortCallData$ = this.reportingForThisPortCallSource.asObservable();
  setReportingForThisPortCallData(data) {
    this.detailsPristine.next(false);
    this.detailsModel.reportingBunkers = data.reportingBunkers || null;
    this.detailsModel.reportingCargo = data.reportingCargo || null;
    this.detailsModel.reportingCrew = data.reportingCrew || null;
    this.detailsModel.reportingHazmat = data.reportingHazmat || null;
    this.detailsModel.reportingPax = data.reportingPax || null;
    this.detailsModel.reportingShipStores = data.reportingShipStores || null;
    this.detailsModel.reportingWaste = data.reportingWaste || null;
    this.reportingForThisPortCallSource.next(data);
    this.detailsDataSource.next(this.detailsModel);
  }

  private crewPassengersAndDimensionsSource = new BehaviorSubject<any>(null);
  crewPassengersAndDimensionsData$ = this.crewPassengersAndDimensionsSource.asObservable();
  setCrewPassengersAndDimensionsData(data) {
    this.detailsPristine.next(false);
    this.detailsModel.numberOfCrew = (data.numberOfCrew != null) ? data.numberOfCrew : null;
    this.detailsModel.numberOfPassengers = (data.numberOfPassengers != null) ? data.numberOfPassengers : null;
    this.detailsModel.actualDraught = (data.actualDraught != null) ? data.actualDraught : null;
    this.detailsModel.airDraught = (data.airDraught != null) ? data.airDraught : null;
    this.crewPassengersAndDimensionsSource.next(this.detailsModel);
  }

  private crewPassengersAndDimensionsMeta = new BehaviorSubject<FormMetaData>({ valid: true });
  crewPassengersAndDimensionsMeta$ = this.crewPassengersAndDimensionsMeta.asObservable();
  setCrewPassengersAndDimensionsMeta(metaData: FormMetaData) {
    this.crewPassengersAndDimensionsMeta.next(metaData);
  }

  private portCallPurposeSource = new BehaviorSubject<any>(null);
  portCallPurposeData$ = this.portCallPurposeSource.asObservable();
  setPortCallPurposeData(data) {
    this.detailsPristine.next(false);
    this.portCallPurposeSource.next(data);
  }

  private otherPurposeNameSource = new BehaviorSubject<string>("");
  otherPurposeName$ = this.otherPurposeNameSource.asObservable();
  setOtherPurposeName(data) {
    this.otherPurposeNameSource.next(data);
  }

  saveDetails() {
    if (!this.detailsPristine.value) {
      this.detailsModel.portCallDetailsId = this.detailsModel.portCallId;
      console.log(this.overviewModel);
      console.log(this.detailsModel);
      console.log("Saving port call details to database...");
      this.http.post(this.saveDetailsUrl, this.detailsModel).map(res => res.json()).subscribe(
        data => {
          console.log("Success.");
          console.log(data);

          this.detailsPristine.next(true);
        }
      );
    } else {
      console.log("Port call details already registered in the database.");
    }
  }

  getClearanceListForPortCall(portCallId: number) {
    let uri: string = [this.getClearanceListByPortCallUrl, portCallId].join('/');

    return this.http.get(uri).map(
      res => res.json().catch(
        error => {
          return Observable.of(error);
        }
      )
    );
  }

  setClearance(data) {
    this.clearanceDataSource.next(data);
  }

  // Clearance
  saveClearance(clearanceModel: ClearanceModel) {
    console.log('Saving clearance to database...');
    this.http.post(this.saveClearanceUrl, clearanceModel).map(res => res.json()).subscribe(
      data => {
        console.log("Clearance saved successfully.");
        console.log(data);
      },
      error => {
        console.log("ERROR: ", error);
      }
    );
  }
}
