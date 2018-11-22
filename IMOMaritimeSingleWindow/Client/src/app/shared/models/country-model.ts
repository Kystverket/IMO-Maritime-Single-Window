import {InternationalShipSecurityCertificateModel, LocationModel, ShipFlagCodeModel } from './';


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
