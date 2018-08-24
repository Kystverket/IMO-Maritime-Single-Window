export class PortCallDetailsModel {
  portCallDetailsId: number;
  portCallId: number;
  numberOfCrew: number;
  numberOfPassengers: number;
  actualDraught: number;
  airDraught: number;
  reportingDpg: boolean;
  reportingCargo: boolean;
  reportingShipStores: boolean;
  reportingCrew: boolean;
  reportingPax: boolean;
  reportingSecurity: boolean;
  cargoBriefDescription: string;
}
