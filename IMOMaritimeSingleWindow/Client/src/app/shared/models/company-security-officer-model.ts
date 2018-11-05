import {FalSecurityModel, OrganizationModel  } from './';


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
