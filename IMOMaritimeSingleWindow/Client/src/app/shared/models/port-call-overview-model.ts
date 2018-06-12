import { ShipModel } from './ship-model';
import { LocationModel } from './location-model';
import { PortCallModel } from './port-call-model';
import { ShipOverviewModel } from './ship-overview-model';
import { LocationOverviewModel } from './location-overview-model';
export class PortCallOverviewModel {
  portCall: PortCallModel;
  shipOverview: ShipOverviewModel;
  locationOverview: LocationOverviewModel;
  nextLocationOverview: LocationOverviewModel;
  previousLocationOverview: LocationOverviewModel;
  clearanceList: any;
  status: any;
}
