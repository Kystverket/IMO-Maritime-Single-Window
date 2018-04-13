import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { PortCallModel } from '../models/port-call-model';
import { PortCallOverviewModel } from '../models/port-call-overview-model';
import { CrewPassengersAndDimensionsModel } from '../../content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crewPassengersAndDimensionsModel';

@Injectable()
export class PortCallService {

  constructor(private http: Http) {
    // Port call
    this.getPortCallUrl = "api/portcall/get";
    this.savePortCallUrl = "api/portcall/register";
    this.getPurposeUrl = "api/portcallpurpose/portcall"
    this.portCallModel = new PortCallModel();

    // Overview
    this.overviewModel = new PortCallOverviewModel();
    this.getOverviewUrl = 'api/portcall/overview';
    this.getPortCallsByLocationUrl = 'api/portcall/location';

  }
   
  // Global port call
  private getPortCallUrl: string;
  private savePortCallUrl: string;
  private getPurposeUrl: string;
  private portCallModel: PortCallModel;
  // Global overview
  private overviewModel: PortCallOverviewModel;
  private getOverviewUrl: string;
  private getPortCallsByLocationUrl: string;
  
  // Subjects
  private portCallRegistered = new BehaviorSubject<boolean>(true);
  portCallRegistered$ = this.portCallRegistered.asObservable();

  private overviewDataSource = new BehaviorSubject<any>(null);
  overviewData$ = this.overviewDataSource.asObservable();

  // Overview methods


  wipeServiceData() {
    this.portCallModel = new PortCallModel();
    this.overviewModel = new PortCallOverviewModel();
    this.portCallRegistered.next(false);

    this.shipDataSource.next(null);
    this.locationDataSource.next(null);
    this.etaEtdDataSource.next(null);
    this.reportingForThisPortCallSource.next(null);
    this.crewPassengersAndDimensionsSource.next(null);
    this.cargoWeightSource.next(null);
    this.portCallPurposeSource.next(null);
    this.otherPurposeNameSource.next("");

    // Overview
    this.overviewDataSource.next(null);
  }

  getPortCallById(portCallId: number) {
    let uri:string = [this.getPortCallUrl, portCallId].join('/');

    return this.http.get(uri)
            .map(res => res.json());
  }

  getPortCallPurpose(purposeId: number) {
    let uri:string = [this.getPurposeUrl, purposeId].join('/');
    return this.http.get(uri).map(res => res.json());
  }

  setPortCall(overviewModel: PortCallOverviewModel) {
    this.portCallRegistered.next(true);
    this.setShipLocationTime(overviewModel); 

  }

  setShipLocationTime(overviewModel: PortCallOverviewModel) {
    this.setShipData(overviewModel.shipOverview);
    this.setLocationData(overviewModel.locationOverview);
    this.getPortCallPurpose(overviewModel.portCall.portCallId).subscribe(data => {
      this.setPortCallPurposeData(data);
    });
    let etaData = new Date(overviewModel.portCall.locationEta);
    let etdData = new Date(overviewModel.portCall.locationEtd);

    let etaEtdData = {
      eta: { year: etaData.getFullYear(), month: etaData.getMonth(), day: etaData.getDate(), hour: etaData.getHours(), minute: etaData.getMinutes() },
      etd: { year: etdData.getFullYear(), month: etdData.getMonth(), day: etdData.getDate(), hour: etdData.getHours(), minute: etdData.getMinutes() },
    };
    
    this.setEtaEtdData(etaEtdData);
  } 

  savePortCall() {
    if (!this.portCallRegistered.value) {
      console.log("Saving port call to database...");
      this.http.post(this.savePortCallUrl, this.overviewModel.portCall).map(res => res.json()).subscribe(
        data => {
          console.log("Success.");        
          console.log(data);
          this.portCallRegistered.next(true);
        }
      );
    } else {
      console.log("Port call already registered in the database."); 
    }
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
      let eta = new Date(Date.UTC(data.eta.year, (data.eta.month-1), data.eta.day, data.eta.hour, data.eta.minute));
      let etd = new Date(Date.UTC(data.etd.year, (data.etd.month-1), data.eta.day, data.eta.hour, data.eta.minute));

      this.portCallModel.locationEta = eta;
      this.portCallModel.locationEtd = etd;
    } else {
      this.portCallModel.locationEta = null;
      this.portCallModel.locationEtd = null;
    }    
    this.etaEtdDataSource.next(data);
    // Overview
    this.overviewModel.portCall = this.portCallModel;
    this.overviewDataSource.next(this.overviewModel);
  }

  // Port Call Details

  // This is a list of checkboxes that specify which FAL forms to include in this port call registration 
  private reportingForThisPortCallSource = new BehaviorSubject<any>(null);
  reportingForThisPortCallData$ = this.reportingForThisPortCallSource.asObservable();
  setReportingForThisPortCallData(data) {    
    this.reportingForThisPortCallSource.next(data);
  }

  private crewPassengersAndDimensionsSource = new BehaviorSubject<any>(null);
  crewPassengersAndDimensionsData$ = this.crewPassengersAndDimensionsSource.asObservable();
  setCrewPassengersAndDimensionsData(data) {    
    this.crewPassengersAndDimensionsSource.next(data);
  }

  private cargoWeightSource = new BehaviorSubject<any>(null);
  cargoWeightData$ = this.cargoWeightSource.asObservable();
  setCargoWeightData(data) {
    this.cargoWeightSource.next(data);
  }

  private portCallPurposeSource = new BehaviorSubject<any>(null);
  portCallPurposeData$ = this.portCallPurposeSource.asObservable();
  setPortCallPurposeData(data) {
    this.portCallPurposeSource.next(data);
  }

  private otherPurposeNameSource = new BehaviorSubject<string>("");
  otherPurposeName$ = this.otherPurposeNameSource.asObservable();
  setOtherPurposeName(data) {
    this.otherPurposeNameSource.next(data);
  }

}
