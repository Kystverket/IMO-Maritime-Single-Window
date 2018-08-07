import { PortCallModel } from 'app/shared/models/port-call-model';
import { LocationModel } from 'app/shared/models/location-model';
import { CargoItemModel } from './cargo-item-model';

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
