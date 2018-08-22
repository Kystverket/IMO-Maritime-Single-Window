import { CargoItemModel } from './cargo-item-model';

export class PackageTypeModel {
    packageTypeId: number;
    name: string;
    description: string;
    // models
    cargoItem: CargoItemModel[];
}
