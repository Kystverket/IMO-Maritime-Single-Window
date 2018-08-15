import { PortCallPurposeModel } from 'app/shared/models/port-call-purpose-model';
import { PortCallModel } from 'app/shared/models/port-call-model';

export class PortCallHasPortCallPurposeModel {
  portCallHasPortCallPurposeId: number;
  portCallId: number;
  portCallPurposeId: number;
  purposeIfUnknown: string;
  // models
  portCall: PortCallModel;
  portCallPurpose: PortCallPurposeModel;
}