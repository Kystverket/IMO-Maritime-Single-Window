import { OrganizationModel } from 'app/shared/models/organization-model';
import { FalSecurityModel } from 'app/shared/models/fal-security-model';

export class CompanySecurityOfficerModel {
  companySecurityOfficerId: number;
  organizationId: number;
  givenName: string;
  surname: string;
  phoneNumber: string;
  email: string;
  // Models
  organization: OrganizationModel;
  falSecurity: FalSecurityModel[];
}
