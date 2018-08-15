import { LocationModel } from 'app/shared/models/location-model';
import { SecurityLevelModel } from './security-level-model';

export class SecurityPreviousPortOfCallModel {
  securityPreviousPortOfCallId: number;
  locationId: number;
  arrivalDateTime: Date;
  departureDateTime: Date;
  securityLevelId; number;
  additionalSecurityMeasures: string;
  sequenceNumber: number;
  // models
  location: LocationModel;
  securityLevel: SecurityLevelModel;
}
