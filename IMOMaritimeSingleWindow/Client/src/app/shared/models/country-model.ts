import { InternationalShipSecurityCertificateModel } from './international-ship-security-certificate-model';
import { LocationModel } from 'app/shared/models/location-model';
import { ShipFlagCodeModel } from './ship-flag-code-model';

export class CountryModel {
  countryId: number;
  name: string;
  twoCharCode: string;
  threeCharCode: string;
  callCode: string;
  isActive: boolean;
  // List models
  internationalShipSecurityCertificate: InternationalShipSecurityCertificateModel[];
  location: LocationModel[];
  shipFlagCode: ShipFlagCodeModel[];
}
