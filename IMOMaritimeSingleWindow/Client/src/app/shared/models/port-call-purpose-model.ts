import {ShipToShipActivityModel, PortCallHasPortCallPurposeModel} from './';

export class PortCallPurposeModel {
  portCallPurposeId: number;
  name: string;
  // list models
  portCallHasPortCallPurpose: PortCallHasPortCallPurposeModel[];
  shipToShipActivity: ShipToShipActivityModel[];
}
