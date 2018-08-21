import { LocationModel } from 'app/shared/models/location-model';
import { SecurityLevelModel } from './security-level-model';
import { FalSecurityModel } from './fal-security-model';

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
