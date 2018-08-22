import { FalSecurityModel } from './fal-security-model';
import { SecurityPreviousPortOfCallModel } from './security-previous-port-of-call-model';

export class SecurityLevelModel {
  securityLevelId: number;
  name: string;
  description: string;
  // list models
  falSecurity: FalSecurityModel[];
  securityPreviousPortOfCall: SecurityPreviousPortOfCallModel[];
}
