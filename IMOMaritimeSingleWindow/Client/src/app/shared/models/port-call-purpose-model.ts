import { ShipToShipActivityModel } from './ship-to-ship-activity-model';
import { PortCallHasPortCallPurposeModel } from './port-call-has-port-call-purpose-model';

export class PortCallPurposeModel {
  portCallPurposeId: number;
  name: string;
  // list models
  portCallHasPortCallPurpose: PortCallHasPortCallPurposeModel[];
  shipToShipActivity: ShipToShipActivityModel[];
}
