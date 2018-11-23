import {CargoItemModel, LocationModel, PortCallModel } from './';


export class ConsignmentModel {
    consignmentId: number;
    portCallId: number;
    portOfLoadingId: number;
    portOfDischargeId: number;
    name: string;
    remark: string;
    // models
    portCall: PortCallModel;
    portOfLoading: LocationModel;
    portOfDischarge: LocationModel;
    cargoItem: CargoItemModel[];
}
