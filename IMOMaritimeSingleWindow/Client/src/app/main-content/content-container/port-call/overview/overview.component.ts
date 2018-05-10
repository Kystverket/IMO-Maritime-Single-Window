import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { OrganizationTypes } from '../../../../shared/constants/organization-types';
import { PortCallClaims } from '../../../../shared/constants/port-call-claims';
import { AccountService } from '../../../../shared/services/account.service';
import { ContentService } from '../../../../shared/services/content.service';
import { OrganizationService } from '../../../../shared/services/organization.service';
import { PortCallOverviewService } from '../../../../shared/services/port-call-overview.service';
import { PortCallService } from '../../../../shared/services/port-call.service';
import { ButtonRowComponent } from './button-row/button-row.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [PortCallOverviewService, OrganizationService, DatePipe]
})
export class OverviewComponent implements OnInit {

  STATUS_DRAFT = "Incomplete";
  permissions = PortCallClaims.portCallPermissions;
  overviewList = [];
  draftOverviewList = [];
  clearedByUserAgencyOverviewList = [];
  userOrganization: any;
  overviewSource: LocalDataSource = new LocalDataSource();
  draftOverviewSource: LocalDataSource = new LocalDataSource();
  clearedByUserAgencyOverviewSource: LocalDataSource = new LocalDataSource();

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

  overviewRow(ov) {
    let row = {
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
    }
    return row;
  }

  loadOverview() {
    this.overviewService.overviewData$.subscribe(
      results => {
        if (results) {
          this.overviewSource.load(results);
        }
      }
    );
    this.overviewService.draftOverviewData$.subscribe(
      results => {
        if (results) {
          this.draftOverviewSource.load(results);
        }
      }
    );
    this.overviewService.clearedByUserAgencyOverviewData$.subscribe(
      results => {
        if (results) {
          this.clearedByUserAgencyOverviewSource.load(results);
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
                  if (ov) {
                    let row = this.overviewRow(ov);
                    // Case: port call is incomplete (status: draft)
                    if (ov.status == this.STATUS_DRAFT) {
                      this.draftOverviewList.push(row);
                    }
                    // Case: user is a government clearance agency and the port call has already been cleared by the agency
                    else if (this.userOrganization
                      && this.userOrganization.organizationType.name == OrganizationTypes.GOVERNMENT_AGENCY_STRING
                      && ov.clearanceList
                      && ov.clearanceList.some(clearance => clearance.organizationId == this.userOrganization.organizationId && clearance.cleared)) {
                      this.clearedByUserAgencyOverviewList.push(row);
                    }
                    // Case: default
                    else {
                      this.overviewList.push(row);
                    }
                    this.overviewService.setOverviewData(this.overviewList);
                    this.overviewService.setDraftData(this.draftOverviewList);
                    this.overviewService.setClearedData(this.clearedByUserAgencyOverviewList);
                  }
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

  constructor(
    private datePipe: DatePipe,
    private accountService: AccountService,
    private organizationService: OrganizationService,
    private contentService: ContentService,
    private portCallService: PortCallService,
    private overviewService: PortCallOverviewService) { }

  ngOnInit() {
    this.accountService.userClaimsData$.subscribe(
      userClaims => {
        if (userClaims) {
          let userClaimsTypePortCall = userClaims.filter(claim => claim.type == PortCallClaims.TYPE); // Find user claims where claim type is Port Call
          var keys = Object.keys(this.permissions);
          keys.forEach(key => {
            this.permissions[key] = (userClaimsTypePortCall.some(claim => claim.value.toUpperCase() == key.toString().toUpperCase()));
          });
        }
      }
    )
    this.organizationService.getOrganizationForUser().subscribe(
      organizationResult => {
        if (organizationResult)
          console.log(organizationResult);
        this.userOrganization = organizationResult;
        this.loadOverview();
      }
    );
  }
}