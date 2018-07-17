import { DataProperty } from 'app/shared/interfaces/property.interface';
import { ShipModel } from '../models/ship-model';

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
  static FLAGS_FOLDER = 'assets/images/Flags/';

  propertyList: DataProperty[] = [
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

  static setShipData(propertyList, shipModel: ShipModel) {
    if (shipModel.shipFlagCode && shipModel.shipFlagCode.country) {
      ShipProperties.setCountry(propertyList, shipModel.shipFlagCode.country.name);
    }
    ShipProperties.setShipName(propertyList, shipModel.name);
    ShipProperties.setCallSign(propertyList, shipModel.callSign);
    ShipProperties.setImoNo(propertyList, shipModel.imoNo);
    ShipProperties.setMmsiNo(propertyList, shipModel.mmsiNo);
    ShipProperties.setGrossTonnage(propertyList, shipModel.grossTonnage);
    ShipProperties.setNetTonnage(propertyList, shipModel.netTonnage);
    ShipProperties.setLength(propertyList, shipModel.length);
    if (shipModel.shipType) {
      ShipProperties.setShipType(propertyList, shipModel.shipType.name);
    }
    if (shipModel.shipStatus) {
      ShipProperties.setShipStatus(propertyList, shipModel.shipStatus.name);
    }
  }

  static setCountry(propertyList, data, image = null) {
    propertyList.find(e => e.description === ShipProperties.COUNTRY).data = data;
    if (image) {
      propertyList.find(e => e.description === ShipProperties.COUNTRY).imageUrl = (ShipProperties.FLAGS_FOLDER + image);
    }
  }

  static setShipName(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.SHIP_NAME).data = data;
  }

  static setCallSign(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.CALL_SIGN).data = data;
  }

  static setImoNo(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.IMO_NO).data = data;
  }

  static setMmsiNo(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.MMSI_NO).data = data;
  }

  static setGrossTonnage(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.GROSS_TONNAGE).data = data;
  }

  static setNetTonnage(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.NET_TONNAGE).data = data;
  }

  static setLength(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.LENGTH).data = data;
  }

  static setShipType(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.SHIP_TYPE).data = data;
  }

  static setShipStatus(propertyList, data, imageUrl = null) {
    propertyList.find(e => e.description === ShipProperties.SHIP_STATUS).data = data;
  }

  getPropertyList() {
    return this.propertyList;
  }
}
