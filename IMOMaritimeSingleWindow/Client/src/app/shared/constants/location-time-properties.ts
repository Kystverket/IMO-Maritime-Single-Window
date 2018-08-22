import { DataProperty } from '../interfaces/property.interface';
import { LocationModel } from '../models/location-model';

export class LocationTimeProperties {
  static LOCATION_NAME = 'Location Name';
  static LOCATION_CODE = 'Location Code';
  static LOCATION_TYPE = 'Location Type';
  static ETA = 'ETA';
  static ETD = 'ETD';

  propertyList: DataProperty[] = [
    { description: LocationTimeProperties.LOCATION_NAME, data: null, imageUrl: null },
    { description: LocationTimeProperties.LOCATION_CODE, data: null, imageUrl: null },
    { description: LocationTimeProperties.LOCATION_TYPE, data: null, imageUrl: null },
    { description: LocationTimeProperties.ETA, data: null, imageUrl: null },
    { description: LocationTimeProperties.ETD, data: null, imageUrl: null },
  ];

  static setLocationData(propertyList, locationModel: LocationModel) {
    LocationTimeProperties.setLocationName(propertyList, locationModel.name);
    LocationTimeProperties.setLocationCode(propertyList, locationModel.locationCode);
    if (locationModel.locationType) {
      LocationTimeProperties.setLocationType(propertyList, locationModel.locationType.name);
    }
  }

  static setLocationName(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === LocationTimeProperties.LOCATION_NAME).data = data;
  }

  static setLocationCode(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === LocationTimeProperties.LOCATION_CODE).data = data;
  }

  static setLocationType(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === LocationTimeProperties.LOCATION_TYPE).data = data;
  }

  static setEta(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === LocationTimeProperties.ETA).data = data;
  }

  static setEtd(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === LocationTimeProperties.ETD).data = data;
  }

  getPropertyList() {
    return this.propertyList;
  }
}
