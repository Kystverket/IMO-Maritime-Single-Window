import {FalSecurityModel, LocationModel, PortCallPurposeModel } from './';

export class ShipToShipActivityModel {
  shipToShipActivityId: number;
  fromDate: Date;
  toDate: Date;
  activityTypeId: number;
  locationId: number;
  latitude: number;
  longitude: number;
  falSecurityId: number;
  securityMeasuresAppliedInLieu: number;
  // models
  activityType: PortCallPurposeModel;
  falSecurity: FalSecurityModel;
  location: LocationModel;
}
