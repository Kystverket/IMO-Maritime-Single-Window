import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { PortCallModel } from '../models/port-call-model';

@Injectable()
export class PortCallService {

  private savePortCallUrl: string = "api/portcall/register";
  private portCallModel = new PortCallModel();

  constructor(private http: Http) { }

  // Global

  savePortCall() {
    let portCall: any = this.portCallModel;
    this.http.post(this.savePortCallUrl, portCall).map(res => res.json()).subscribe(data => console.log(data));
  }


  // Ship, Location and Time

  private shipDataSource = new BehaviorSubject<any>(null);
  shipData$ = this.shipDataSource.asObservable();
  setShipData(data) {
    this.portCallModel.shipId = data != null ? data.shipId : null;    
    this.shipDataSource.next(data);
  }

  private locationDataSource = new BehaviorSubject<any>(null);
  locationData$ = this.locationDataSource.asObservable();
  setLocationData(data) {
    this.portCallModel.locationId = data != null ? data.locationId : null;
    console.log(this.portCallModel);
    
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
    
    console.log(this.portCallModel);
    
    
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

}
