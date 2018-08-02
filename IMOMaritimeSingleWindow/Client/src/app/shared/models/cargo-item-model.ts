import { ConsignmentModel } from './consignment-model';
import { PackageTypeModel } from './package-type-model';

export class CargoItemModel {
    cargoItemId: number;
    consignmentId: number;
    shippingMarks: string;
    containerIdentification: string;
    numberOfPackages: number;
    packageTypeId: number;
    hsCode: string;
    grossVolume: number;
    grossWeight: number;
    description: string;
    // models
    consignment: ConsignmentModel;
    packageType: PackageTypeModel;
}