import { FalSecurityModel, LocationModel, SecurityLevelModel } from './';

export class SecurityPreviousPortOfCallModel {
  securityPreviousPortOfCallId: number;
  locationId: number;
  arrivalDateTime: Date;
  departureDateTime: Date;
  securityLevelId; number;
  additionalSecurityMeasures: string;
  sequenceNumber: number;
  falSecurityId: number;
  // models
  location: LocationModel;
  securityLevel: SecurityLevelModel;
  falSecurity: FalSecurityModel;
}
