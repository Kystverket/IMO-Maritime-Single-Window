import { SHIP_STORE_ERRORS } from '../constants/enumValues';
import {MeasurementTypeModel, PortCallModel } from './';

export class ShipStoresModel {
    falShipStoresId: number;
    sequenceNumber: number;
    articleName: string;
    quantity: number;
    locationOnBoardCode: string;
    locationOnBoard: string;
    measurementTypeId: number;
    portCallId: number;
    // Connected tables
    measurementType: MeasurementTypeModel;
    portCall: PortCallModel; // Probably won't be necessary to use this one
}
