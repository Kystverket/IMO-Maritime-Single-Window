import {CountryModel, OrganizationModel, ShipModel } from './';

export class InternationalShipSecurityCertificateModel {
  isscId: number;
  expiryDate: Date;
  rsoIssuerId: number;
  governmentIssuerId: number;
  certificateNumber: string;
  issuedByGovernment: boolean;
  // models
  rsoIssuer: OrganizationModel;
  governmentIssuer: CountryModel;
  // list models
  ship: ShipModel[];
}
