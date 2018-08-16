import { OrganizationModel } from 'app/shared/models/organization-model';
import { ShipModel } from 'app/shared/models/ship-model';
import { CountryModel } from './country-model';

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
