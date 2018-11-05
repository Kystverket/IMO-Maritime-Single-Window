import {FalSecurityModel, SecurityPreviousPortOfCallModel} from './';

export class SecurityLevelModel {
  securityLevelId: number;
  name: string;
  description: string;
  // list models
  falSecurity: FalSecurityModel[];
  securityPreviousPortOfCall: SecurityPreviousPortOfCallModel[];
}
