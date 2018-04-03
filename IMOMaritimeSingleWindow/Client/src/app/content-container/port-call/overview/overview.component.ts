import { Component, OnInit } from '@angular/core';
import { PortCallOverviewService } from '../../../shared/services/port-call-overview.service';
import { PortCallModel } from '../../../shared/models/port-call-model';
import { PortCallOverviewModel } from '../../../shared/models/port-call-overview-model';
import { LocationModel } from '../../../shared/models/location-model';
import { ShipModel } from '../../../shared/models/ship-model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [PortCallOverviewService]
})
export class OverviewComponent implements OnInit {

  myLocationId:number = 2328223; // temporary for testing
  portCalls: any;
  ships: ShipModel[];
  locations: LocationModel[];
  overviewModels: PortCallOverviewModel[] = new Array();
  overviewFound:boolean = false;


  constructor(private overviewService: PortCallOverviewService) { }

  ngOnInit() {
    this.overviewService.getPortCalls().subscribe(
      pcData => {
        pcData.forEach(pc => {
          this.overviewService.getOverview(pc.portCallId).subscribe(
            ovData => {
              this.overviewModels.push(ovData);
            }
          )
        });
        this.overviewFound = true;
      }
    );
  }

  dtFormat(dateStr: string) {
    var date = new Date(dateStr);
    return date.getFullYear() + " - " + date.getMonth() + " - " + date.getDate();
  }

}
