import { DataProperty } from 'app/shared/interfaces/property.interface';
export class ShipProperties {
  static PROPERTIES = {
    SHIP_NAME: { description: 'Ship Name', data: null, imageUrl: null },
    CALL_SIGN: { description: 'Call Sign', data: null },
    IMO_NO: { description: 'IMO no.', data: null },
    MMSI_NO: { description: 'MMSI no.', data: null },
    GROSS_TONNAGE: { description: 'Gross Tonnage', data: null },
    LENGTH: { description: 'Length', data: null },
    SHIP_TYPE: { description: 'Ship Type', data: null },
    SHIP_STATUS: { description: 'Ship Status', data: null }
  };

  static COUNTRY = 'Country';
  static SHIP_NAME = 'Ship Name';
  static CALL_SIGN = 'Call Sign';
  static IMO_NO = 'IMO no.';
  static MMSI_NO = 'MMSI no.';
  static GROSS_TONNAGE = 'Gross Tonnage';
  static NET_TONNAGE = 'Net Tonnage';
  static LENGTH = 'Length';
  static SHIP_TYPE = 'Ship Type';
  static SHIP_STATUS = 'Ship Status';
  static FLAGS_FOLDER = 'assets/images/Flags';

  static PROPERTY_LIST: DataProperty[] = [
    { description: 'Country', data: null, imageUrl: null },
    { description: 'Ship Name', data: null, imageUrl: null },
    { description: 'Call Sign', data: null, imageUrl: null },
    { description: 'IMO no.', data: null, imageUrl: null },
    { description: 'MMSI no.', data: null, imageUrl: null },
    { description: 'Gross Tonnage', data: null, imageUrl: null },
    { description: 'Net Tonnage', data: null, imageUrl: null },
    { description: 'Length', data: null, imageUrl: null },
    { description: 'Ship Type', data: null, imageUrl: null },
    { description: 'Ship Status', data: null, imageUrl: null }
  ];
}
