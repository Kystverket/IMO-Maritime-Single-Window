import {PortCallModel, PortCallPurposeModel} from './';

export class PortCallHasPortCallPurposeModel {
  portCallHasPortCallPurposeId: number;
  portCallId: number;
  portCallPurposeId: number;
  purposeIfUnknown: string;
  // models
  portCall: PortCallModel;
  portCallPurpose: PortCallPurposeModel;
}
