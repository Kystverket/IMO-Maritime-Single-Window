import {CompanySecurityOfficerModel, PortCallModel, SecurityLevelModel, SecurityPreviousPortOfCallModel, ShipToShipActivityModel } from './';

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
