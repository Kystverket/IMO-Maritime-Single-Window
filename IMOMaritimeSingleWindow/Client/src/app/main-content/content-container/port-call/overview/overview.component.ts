import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
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

  STATUS_DRAFT = "Incomplete";
  overviewList = [];
  draftOverviewList = [];
  overviewSource: LocalDataSource = new LocalDataSource();
  draftOverviewSource: LocalDataSource = new LocalDataSource();

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
      status: {
        title: 'Status'
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
    this.overviewService.overviewData$.subscribe(
      results => {
        if (results) {
          this.overviewSource.load(results);
        }
      }
    )
    this.overviewService.draftOverviewData$.subscribe(
      results => {
        if (results) {
          this.draftOverviewSource.load(results);
        }
      }
    )
    this.overviewService.getPortCalls().subscribe(
      pcData => {
        if (pcData) {
          if (pcData.length === 0) {
            this.overviewFound = true;
          } else {
            let index = 0;
            let finalIndex = pcData.length - 1;
            pcData.forEach((pc) => {
              this.overviewService.getOverview(pc.portCallId).subscribe(
                ov => {
                  if (ov.status != this.STATUS_DRAFT) {
                    this.overviewList.push({
                      overviewModel: ov,
                      shipName: `<div hidden>` + ov.shipOverview.ship.name // ugly fix for alphabetical sorting but it works
                        + `</div> <div> <img src='assets/images/Flags/128x128/` + ov.shipOverview.country.twoCharCode.toLowerCase() + `.png' height='20px'/> ` + ov.shipOverview.ship.name + `</div>`,
                      callSign: ov.shipOverview.ship.callSign || "",
                      locationName: `<div hidden>` + ov.locationOverview.location.name // same ugly fix as ship name
                        + `</div> <div> <img src='assets/images/Flags/128x128/` + ov.locationOverview.country.twoCharCode.toLowerCase() + `.png' height='20px'/> ` + ov.locationOverview.location.name + `</div>`,
                      eta: this.datePipe.transform(ov.portCall.locationEta, 'yyyy-MM-dd HH:mm'),
                      etd: this.datePipe.transform(ov.portCall.locationEtd, 'yyyy-MM-dd HH:mm'),
                      status: ov.status,
                      actions: 'btn'
                    });
                  } else {
                    this.draftOverviewList.push({
                      overviewModel: ov,
                      shipName: `<div hidden>` + ov.shipOverview.ship.name // ugly fix for alphabetical sorting but it works
                        + `</div> <div> <img src='assets/images/Flags/128x128/` + ov.shipOverview.country.twoCharCode.toLowerCase() + `.png' height='20px'/> ` + ov.shipOverview.ship.name + `</div>`,
                      callSign: ov.shipOverview.ship.callSign || "",
                      locationName: `<div hidden>` + ov.locationOverview.location.name // same ugly fix as ship name
                        + `</div> <div> <img src='assets/images/Flags/128x128/` + ov.locationOverview.country.twoCharCode.toLowerCase() + `.png' height='20px'/> ` + ov.locationOverview.location.name + `</div>`,
                      eta: this.datePipe.transform(ov.portCall.locationEta, 'yyyy-MM-dd HH:mm'),
                      etd: this.datePipe.transform(ov.portCall.locationEtd, 'yyyy-MM-dd HH:mm'),
                      status: ov.status,
                      actions: 'btn'
                    });
                  }
                  this.overviewService.setOverviewData(this.overviewList);
                  this.overviewService.setDraftData(this.draftOverviewList);
                }, undefined, () => {
                  if (index++ >= finalIndex) this.overviewFound = true;
                }
              )
            });
          }
        }
      }
    );

  }
}