import { DataProperty } from 'app/shared/interfaces/property.interface';

export class LocationProperties {
  static PROPERTIES = {
    COUNTRY: { description: 'Country', data: null },
    LOCATION_NAME: { description: 'Name', data: null },
    LOCATION_CODE: { description: 'Location Code', data: null },
    LOCATION_TYPE: { description: 'Type', data: null }
  };

  static COUNTRY = 'Country';
  static LOCATION_NAME = 'Location Name';
  static LOCATION_CODE = 'Location Code';
  static LOCATION_TYPE = 'Location Type';
  static FLAGS_FOLDER = 'assets/images/Flags';

  propertyList: DataProperty[] = [
    { description: LocationProperties.COUNTRY, data: null, imageUrl: null },
    { description: LocationProperties.LOCATION_NAME, data: null, imageUrl: null },
    { description: LocationProperties.LOCATION_CODE, data: null, imageUrl: null },
    { description: LocationProperties.LOCATION_TYPE, data: null, imageUrl: null },
  ];

  constructor() {}

  getPropertyList() {
    return this.propertyList;
  }
}
