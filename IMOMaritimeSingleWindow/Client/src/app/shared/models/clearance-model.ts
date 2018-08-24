import { UserModel } from './user-model';

export class ClearanceModel {
  organizationPortCallId: number;
  organizationId: number;
  portCallId: number;
  remark: string;
  cleared: boolean;
  clearedByUserId: string;
  // models
  clearedByUser: any;
  portCall: any;
  organization: any;
}
