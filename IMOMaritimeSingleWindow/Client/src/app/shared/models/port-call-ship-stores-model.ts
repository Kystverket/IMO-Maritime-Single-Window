import { MeasurementTypeModel } from 'app/shared/models/measurement-type-model';
import { PortCallModel } from './port-call-model';

export class PortCallShipStoresModel {
    falShipStoresId: number;
    sequenceNumber: number;
    articleName: string;
    articleCode: string;
    quantity: number;
    locationOnBoardCode: string;
    locationOnBoard: string;
    measurementTypeId: number;
    portCallId: number;
    // Connected tables
    measurementType: MeasurementTypeModel;
    portCall: PortCallModel; // Probably won't be necessary to use this one
}
