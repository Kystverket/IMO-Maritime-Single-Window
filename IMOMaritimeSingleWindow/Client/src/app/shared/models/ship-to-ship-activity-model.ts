import { FalSecurityModel } from './fal-security-model';
import { LocationModel } from './location-model';
import { PortCallPurposeModel } from './port-call-purpose-model';

export class ShipToShipActivityModel {
  shipToShipActivityId: number;
  fromDate: Date;
  toDate: Date;
  activityTypeId: number;
  locationId: number;
  latitude: number;
  longitude: number;
  falSecurityId: number;
  // models
  activityType: PortCallPurposeModel;
  falSecurity: FalSecurityModel;
  location: LocationModel;
}
