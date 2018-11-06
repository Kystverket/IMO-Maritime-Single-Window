import {PortCallHasPortCallPurposeModel, ShipToShipActivityModel} from './';

export class PortCallPurposeModel {
  portCallPurposeId: number;
  name: string;
  // list models
  portCallHasPortCallPurpose: PortCallHasPortCallPurposeModel[];
  shipToShipActivity: ShipToShipActivityModel[];
}
