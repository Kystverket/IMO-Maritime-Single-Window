import { DataProperty } from 'app/shared/interfaces/property.interface';
import { ShipFlagCodeModel } from '../models/ship-flag-code-model';

export class ShipFlagCodeProperties {
  static SHIP_FLAG_CODE_NAME = 'Flag Code';
  static SHIP_FLAG_CODE_DESCRIPTION = 'Desciption';
  static COUNTRY = 'Country';
  static FLAGS_FOLDER = 'assets/images/Flags/';

  propertyList: DataProperty[] = [
    { description: ShipFlagCodeProperties.COUNTRY, data: null, imageUrl: null },
    { description: ShipFlagCodeProperties.SHIP_FLAG_CODE_NAME, data: null, imageUrl: null }
  ];

  static setShipFlagCodeData(propertyList, shipFlagCodeModel: ShipFlagCodeModel) {
    ShipFlagCodeProperties.setName(propertyList, shipFlagCodeModel.name);
    if (shipFlagCodeModel.country) {
      ShipFlagCodeProperties.setCountry(propertyList, shipFlagCodeModel.country.name);
    }
  }

  static setCountry(propertyList, data, image = null) {
    propertyList.find(e => e.description === ShipFlagCodeProperties.COUNTRY).data = data;
    if (image) {
      propertyList.find(e => e.description === ShipFlagCodeProperties.COUNTRY).imageUrl = (ShipFlagCodeProperties.FLAGS_FOLDER + image);
    }
  }

  static setName(propertyList, data) {
    propertyList.find(e => e.description === ShipFlagCodeProperties.SHIP_FLAG_CODE_NAME).data = data;
  }

  getPropertyList() {
    return this.propertyList;
  }

}
