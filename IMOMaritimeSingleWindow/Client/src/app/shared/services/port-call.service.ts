import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { PortCallModel } from '../models/port-call-model';
import { PortCallOverviewModel } from '../models/port-call-overview-model';
import { CrewPassengersAndDimensionsModel } from '../../content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crewPassengersAndDimensionsModel';
import { PortCallDetailsModel } from '../models/port-call-details-model';

@Injectable()
export class PortCallService {

  constructor(private http: Http) {
    // Port call
    this.getPortCallUrl = "api/portcall/get";
    this.savePortCallUrl = "api/portcall/register";
    this.getPurposeUrl = "api/portcallpurpose/portcall"
    this.portCallModel = new PortCallModel();

    // Details
    this.saveDetailsUrl = "api/portcalldetails/register";
    this.detailsModel = new PortCallDetailsModel();

    // Overview
    this.overviewModel = new PortCallOverviewModel();
    this.getOverviewUrl = 'api/portcall/overview';
    this.getPortCallsByLocationUrl = 'api/portcall/location';

  }

  // Global overview
  private overviewModel: PortCallOverviewModel;
  private getOverviewUrl: string;
  private getPortCallsByLocationUrl: string; 
  // Global port call
  private getPortCallUrl: string;
  private savePortCallUrl: string;
  private getPurposeUrl: string;
  private portCallModel: PortCallModel;
  // Global details
  private saveDetailsUrl: string;
  private detailsModel: PortCallDetailsModel;
  
  // Subjects
  private portCallRegistered = new BehaviorSubject<boolean>(true);
  portCallRegistered$ = this.portCallRegistered.asObservable();

  private detailsDataSource = new BehaviorSubject<any>(null);
  detailsData$ = this.detailsDataSource.asObservable();
  private detailsRegistered = new BehaviorSubject<boolean>(true);
  detailsRegistered$ = this.detailsRegistered.asObservable();

  private overviewDataSource = new BehaviorSubject<any>(null);
  overviewData$ = this.overviewDataSource.asObservable();

  // Overview methods

  wipeServiceData() {
    this.portCallModel = new PortCallModel();
    this.detailsModel = new PortCallDetailsModel();    
    this.overviewModel = new PortCallOverviewModel();
    this.portCallRegistered.next(false);
    this.detailsRegistered.next(false);


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
    // Details
    this.detailsDataSource.next(null);
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
    this.detailsModel = new PortCallDetailsModel(); // todo: get details from db
    this.detailsModel.portCallId = overviewModel.portCall.portCallId;
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
          this.detailsModel.portCallId = data.portCallId;
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
    this.detailsRegistered.next(false);
    this.reportingForThisPortCallSource.next(data);
  }

  private crewPassengersAndDimensionsSource = new BehaviorSubject<any>(null);
  crewPassengersAndDimensionsData$ = this.crewPassengersAndDimensionsSource.asObservable();
  setCrewPassengersAndDimensionsData(data) {
    this.detailsRegistered.next(false); 
    this.crewPassengersAndDimensionsSource.next(data);
    this.detailsModel.numberOfCrew = (data.numberOfCrew != null) ? data.numberOfCrew : null;
    this.detailsModel.numberOfPassengers = (data.numberOfPassengers != null) ? data.numberOfPassengers : null;
    this.detailsModel.actualDraught = (data.actualDraught != null) ? data.actualDraught : null;
    this.detailsModel.airDraught = (data.airDraught != null) ? data.airDraught : null;
  }

  private crewPassengersAndDimensionsError = new BehaviorSubject<boolean>(false);
  crewPassengersAndDimensionsError$ = this.crewPassengersAndDimensionsError.asObservable();
  setCrewPassengersAndDimensionsError(error: boolean) {
    this.crewPassengersAndDimensionsError.next(error);
  }

  private cargoWeightSource = new BehaviorSubject<any>(null);
  cargoWeightData$ = this.cargoWeightSource.asObservable();
  setCargoWeightData(data) {
    this.detailsRegistered.next(false);
    this.cargoWeightSource.next(data);
    this.detailsModel.cargoGrossWeight = (data.grossWeight != null) ? data.grossWeight : null;
    this.detailsModel.cargoGrossGrossWeight = (data.grossGrossWeight != null) ? data.grossGrossWeight : null;
  }

  private cargoWeightError = new BehaviorSubject<boolean>(false);
  cargoWeightError$ = this.cargoWeightError.asObservable();
  setCargoWeightError(error: boolean) {
    this.cargoWeightError.next(error);
  }

  private portCallPurposeSource = new BehaviorSubject<any>(null);
  portCallPurposeData$ = this.portCallPurposeSource.asObservable();
  setPortCallPurposeData(data) {
    this.detailsRegistered.next(false);    
    this.portCallPurposeSource.next(data);
  }

  private otherPurposeNameSource = new BehaviorSubject<string>("");
  otherPurposeName$ = this.otherPurposeNameSource.asObservable();
  setOtherPurposeName(data) {
    this.otherPurposeNameSource.next(data);
  }

  saveDetails() {
    if (!this.detailsRegistered.value) {
      console.log(this.overviewModel);
      console.log(this.detailsModel);
      console.log("Saving port call details to database...");
      this.http.post(this.saveDetailsUrl, this.detailsModel).map(res => res.json()).subscribe(
        data => {
          console.log("Success.");
          console.log(data);
          this.detailsRegistered.next(true);
        }
      );
    } else {
      console.log("Port call details already registered in the database."); 
    }
  }

}
