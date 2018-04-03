import { EtaEtdDateTime } from './eta-etd-interface';
import { EtaEtdModel } from './eta-etd-model';
import { DatePipe } from '@angular/common';

export class PortCallModel {
    portCallId: number;
    nextLocationId: number;
    previousLocationId: number;
    locationId: number;
    shipId: number;
    portCallStatusId: number = 100235;
    remark: string;
    previousLocationEtd: Date;
    previousLocationAtd: Date;
    locationEtd: Date;
    locationAtd: Date;
    locationEta: Date;
    locationAta: Date;
    nextLocationEta: Date;
    nextLocationAta: Date;
    personId: number;
}