import { PortCallModel } from './port-call-model';
import { CompanySecurityOfficerModel } from './company-security-officer-model';
import { SecurityLevelModel } from './security-level-model';
import { ShipToShipActivityModel } from './ship-to-ship-activity-model';
import { SecurityPreviousPortOfCallModel } from './security-previous-port-of-call-model';

export class FalSecurityModel {
  falSecurityId: number;
  shipHasValidSspOnBoard: boolean;
  otherRelatedInfo: string;
  companySecurityOfficerId: number;
  securityLevelId: number;
  portCallId: number;
  // models
  companySecurityOfficer: CompanySecurityOfficerModel;
  portCall: PortCallModel;
  securityLevel: SecurityLevelModel;
  // list models
  shipToShipActivity: ShipToShipActivityModel[];
  securityPreviousPortOfCall: SecurityPreviousPortOfCallModel[];
}
