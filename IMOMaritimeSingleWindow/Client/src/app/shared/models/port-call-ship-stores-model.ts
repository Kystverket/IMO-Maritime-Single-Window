import { MeasurementTypeModel } from 'app/shared/models/measurement-type-model';

export class PortCallShipStoresModel {
    sequenceNumber: number;
    articleName: string;
    articleCode: number;
    quantity: number;
    measurementType: MeasurementTypeModel;
    locationOnBoardCode: number;
    locationOnBoard: string;
}
