import { LocationModel } from './location-model';

export class PortCallModel {
  portCallId: number;
  nextLocationId: number;
  previousLocationId: number;
  locationId: number;
  shipId: number;
  portCallStatusId: number;
  remark: string;
  previousLocation: LocationModel;
  previousLocationEtd: Date;
  previousLocationAtd: Date;
  locationEtd: Date;
  locationAtd: Date;
  locationEta: Date;
  locationAta: Date;
  nextLocation: LocationModel;
  nextLocationEta: Date;
  nextLocationAta: Date;
  userId: number;
  portCallStatus: any;
}
