import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { LocationModel } from '../../../../shared/models/location-model';
import { PortCallOverviewModel } from '../../../../shared/models/port-call-overview-model';
import { ShipModel } from '../../../../shared/models/ship-model';
import { ContentService } from '../../../../shared/services/content.service';
import { PortCallOverviewService } from '../../../../shared/services/port-call-overview.service';
import { PortCallService } from '../../../../shared/services/port-call.service';
import { ButtonRowComponent } from './button-row/button-row.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [PortCallOverviewService, DatePipe]
})
export class OverviewComponent implements OnInit {

  myLocationId: number = 2328223; // temporary for testing
  portCalls: any;
  ships: ShipModel[];
  locations: LocationModel[];
  overviewModels: any[] = [];

  data = [];
  dataSource: LocalDataSource = new LocalDataSource();

  overviewFound: boolean = false;

  // Smart table
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered',
    },
    noDataMessage: '',

    columns: {
      shipName: {
        title: 'Ship Name',
        type: 'html',
      },
      callSign: {
        title: 'Call Sign',
        type: 'text',
      },
      locationName: {
        title: 'Location Name',
        type: 'html'
      },
      eta: {
        title: 'ETA',
      },
      etd: {
        title: 'ETD'
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ButtonRowComponent
      },
      
    }
  }

  constructor(private datePipe: DatePipe, private contentService: ContentService, private portCallService: PortCallService, private overviewService: PortCallOverviewService) {

  }

  ngOnInit() {

    this.overviewService.getPortCalls().subscribe(
      pcData => {
        pcData.forEach(pc => {
          this.overviewService.getOverview(pc.portCallId).subscribe(
            ov => {
              this.overviewModels.push(ov);
              this.dataSource.add({
                overviewModel: ov,
                shipName: `<div hidden>` + ov.shipOverview.ship.name // ugly fix for alphabetical sorting but it works
                + `</div> <div> <img src='assets/images/Flags/128x128/` + ov.shipOverview.country.twoCharCode.toLowerCase() + `.png' height='20px'/> ` + ov.shipOverview.ship.name + `</div>`,
                callSign: ov.shipOverview.ship.callSign,
                locationName: `<div hidden>` + ov.locationOverview.location.name // same ugly fix as ship name
                + `</div> <div> <img src='assets/images/Flags/128x128/` + ov.locationOverview.country.twoCharCode.toLowerCase() + `.png' height='20px'/> ` + ov.locationOverview.location.name + `</div>`,
                eta: this.datePipe.transform(ov.portCall.locationEta, 'yyyy-MM-dd HH:mm'),
                etd: this.datePipe.transform(ov.portCall.locationEtd, 'yyyy-MM-dd HH:mm'),
                actions: 'btn'
              });
              this.dataSource.refresh();
            }
          )
        });
        this.overviewFound = true;                                
      }
    );
  }
}