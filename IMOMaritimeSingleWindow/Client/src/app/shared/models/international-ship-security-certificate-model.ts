import { OrganizationModel } from 'app/shared/models/organization-model';
import { ShipModel } from 'app/shared/models/ship-model';

export class InternationalShipSecurityCertificateModel {
  isscId: number;
  expiryDate: Date;
  issuerId: number;
  certificateNumber: string;
  // models
  issuer: OrganizationModel;
  // list models
  ship: ShipModel[];
}
