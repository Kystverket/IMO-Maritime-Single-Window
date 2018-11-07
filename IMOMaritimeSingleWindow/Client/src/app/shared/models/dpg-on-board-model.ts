import { DpgModel } from './dpg-model';

export class DpgOnBoardModel {
    sequenceNo: number;
    dpgOnBoardId: number;
    dpgId: number;
    portCallId: number;
    placedInContainer: boolean;
    transportUnitIdentification: string;
    locationOnBoard: string;
    grossWeight: number;
    netWeight: number;
    dpg: DpgModel;
    placedInContainerStr: string;
}
