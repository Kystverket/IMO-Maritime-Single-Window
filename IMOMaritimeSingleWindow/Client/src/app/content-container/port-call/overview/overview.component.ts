import { Component, OnInit } from '@angular/core';
import { PortCallOverviewService } from '../../../shared/services/port-call-overview.service';
import { PortCallModel } from '../../../shared/models/port-call-model';
import { PortCallOverviewModel } from '../../../shared/models/port-call-overview-model';
import { LocationModel } from '../../../shared/models/location-model';
import { ShipModel } from '../../../shared/models/ship-model';
import { PortCallService } from '../../../shared/services/port-call.service';
import { ContentService } from '../../../shared/services/content.service';
import { Ng2SmartTableModule, LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { DatePipe } from '@angular/common';
import { HtmlParser } from '@angular/compiler';

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
  overviewModels: PortCallOverviewModel[] = [];

  
  data = [];
  dataSource: LocalDataSource = new LocalDataSource();
  
  dataRow: {
    ship: {
      name: string,
      callSign: string
    },
    portOfCall: {
      locationName: string,
      eta: Date,
      etd: Date
    }
  }
  overviewFound: boolean = false;

  // Smart table

  tableSettings = {
    columns: {
      shipName: {
        title: 'Ship Name'
      },
      callSign: {
        title: 'Call Sign'
      },
      locationName: {
        title: 'Location Name'
      },
      eta: {
        title: 'ETA',
        type: 'html'
      },
      etd: {
        title: 'ETD'
      }
    }
  }
    
      
     
  



constructor(private datePipe: DatePipe, private contentService: ContentService, private portCallService: PortCallService, private overviewService: PortCallOverviewService) {

 }

ngOnInit() {

  this.overviewService.getOverviews().subscribe(
    ovData => {
      this.dataSource.load(ovData.map(ov => {
        return {
          shipName: ov.shipOverview.ship.name,
          callSign: ov.shipOverview.ship.callSign,
          locationName: ov.locationOverview.location.name,
          eta: this.datePipe.transform(ov.portCall.locationEta, 'dd/MM/yyyy - HH:mm'),
          etd: this.datePipe.transform(ov.portCall.locationEtd, 'dd/MM/yyyy - HH:mm'),
        }
      
      }));
      // this.data.push({
      //   ship: {
      //     name: ovData.shipOverview.ship.name,
      //     callSign: ovData.shipOverview.ship.callSign
      //   },
      //   portOfCall: {
      //     locationName: ovData.locationOverview.location.name,
      //     eta: ovData.portCall.locationEta,
      //     etd: ovData.portCall.locationEtd
      //   }
      // });
    }
  )
  this.overviewService.getPortCalls().subscribe(
    pcData => {
      pcData.forEach(pc => {
        this.overviewService.getOverview(pc.portCallId).subscribe(
          ovData => {
            this.overviewModels.push(ovData);
            // this.data.push({
            //   ship: {
            //     name: ovData.shipOverview.ship.name,
            //     callSign: ovData.shipOverview.ship.callSign
            //   },
            //   portOfCall: {
            //     locationName: ovData.locationOverview.location.name,
            //     eta: ovData.portCall.locationEta,
            //     etd: ovData.portCall.locationEtd
            //   }
            // });
          }
        )
      });
      this.overviewFound = true;
    }
  );
}


editPortCall(overviewModel: PortCallOverviewModel) {
  this.portCallService.setPortCall(overviewModel);
  this.contentService.setContent('Register Port Call');
}

dtFormat(dateStr: string) {
  var date = new Date('yyyy-MM-dd HH:mm');
  return date.getFullYear() + "-" + (date.getMonth()-1) + "-" + date.getDate() + " " + date.getHours;
}

}
