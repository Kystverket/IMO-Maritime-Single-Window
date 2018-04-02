import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PortCallService {

  // Ship, Location and Time

  private shipDataSource = new BehaviorSubject<any>(null);
  shipData$ = this.shipDataSource.asObservable();
  setShipData(data) {
    this.shipDataSource.next(data);
  }

  private locationDataSource = new BehaviorSubject<any>(null);
  locationData$ = this.locationDataSource.asObservable();
  setLocationData(data) {
    this.locationDataSource.next(data);
  }

  private etaEtdDataSource = new BehaviorSubject<any>(null);
  etaEtdData$ = this.etaEtdDataSource.asObservable();
  setEtaEtdData(data) {
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
