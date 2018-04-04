import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { PortCallModel } from '../models/port-call-model';
import { PortCallOverviewModel } from '../models/port-call-overview-model';

@Injectable()
export class PortCallService {

  

  constructor(private http: Http) {
    this.getPortCallUrl = "api/portcall/get";
    this.savePortCallUrl = "api/portcall/register";
    this.getPurposeUrl = "api/portcallpurpose/portcall"
    this.portCallModel = new PortCallModel();
   }

  // Global
  private getPortCallUrl: string;
  private savePortCallUrl: string;
  private getPurposeUrl: string;
  private portCallModel: PortCallModel;
  
  
  private portCallRegistered = new BehaviorSubject<boolean>(true);
  portCallRegistered$ = this.portCallRegistered.asObservable();

  wipeServiceData() {
    this.portCallModel = new PortCallModel();
    this.portCallRegistered.next(false);

    this.shipDataSource.next(null);
    this.locationDataSource.next(null);
    this.etaEtdDataSource.next(null);
    this.reportingForThisPortCallSource.next(null);
    this.crewPassengersAndDimensionsSource.next(null);
    this.cargoWeightSource.next(null);
    this.portCallPurposeSource.next(null);
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
    this.setLocationData(overviewModel.locationOverview.location);
    this.getPortCallPurpose(overviewModel.portCall.portCallId).subscribe(data => {
      console.log(data);
      this.setPortCallPurposeData(data);
    });
    let etaData = new Date(overviewModel.portCall.locationEta);
    let etdData = new Date(overviewModel.portCall.locationEtd);

    let etaEtdData = {
      eta: { year: etaData.getFullYear(), month: etaData.getMonth()+1, day: etaData.getDate(), hour: etaData.getHours(), minute: etaData.getMinutes() },
      etd: { year: etdData.getFullYear(), month: etdData.getMonth()+1, day: etdData.getDate(), hour: etdData.getHours(), minute: etdData.getMinutes() },
    };
    
    this.setEtaEtdData(etaEtdData);
  } 

  savePortCall() {
    if (!this.portCallRegistered.value) {
      console.log("Saving port call to database...");
      this.http.post(this.savePortCallUrl, this.portCallModel).map(res => res.json()).subscribe(
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
    this.shipDataSource.next(data);
  }

  private locationDataSource = new BehaviorSubject<any>(null);
  locationData$ = this.locationDataSource.asObservable();
  setLocationData(data) {
    this.portCallModel.locationId = data != null ? data.locationId : null;    
    this.locationDataSource.next(data);
  }

  private etaEtdDataSource = new BehaviorSubject<any>(null);
  etaEtdData$ = this.etaEtdDataSource.asObservable();
  setEtaEtdData(data) {

    if (data != null) {
      let eta = new Date();
      eta.setFullYear(data.eta.year);
      // Haha, a JavaScript month ranges from 0 to 11
      eta.setMonth(data.eta.month - 1);
      eta.setDate(data.eta.day);
      eta.setHours(data.eta.hour);
      eta.setMinutes(data.eta.minute);

      let etd = new Date();
      etd.setFullYear(data.etd.year);
      etd.setMonth(data.etd.month - 1);
      etd.setDate(data.etd.day);
      etd.setHours(data.etd.hour);
      etd.setMinutes(data.etd.minute);

      this.portCallModel.locationEta = eta;
      this.portCallModel.locationEtd = etd;
    } else {
      this.portCallModel.locationEta = null;
      this.portCallModel.locationEtd = null;
    }    
    this.etaEtdDataSource.next(data);
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
