import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { OrganizationTypes } from 'app/shared/constants/organization-types';
import { PortCallClaims } from 'app/shared/constants/port-call-claims';
import { PortCallStatusTypes } from 'app/shared/constants/port-call-status-types';
import { AccountService } from 'app/shared/services/account.service';
import { ContentService } from 'app/shared/services/content.service';
import { OrganizationService } from 'app/shared/services/organization.service';
import { PortCallOverviewService } from 'app/shared/services/port-call-overview.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ButtonRowComponent } from './button-row/button-row.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [PortCallOverviewService, OrganizationService, DatePipe]
})
export class OverviewComponent implements OnInit {
  permissions = PortCallClaims.portCallPermissions;
  overviewList = [];
  draftOverviewList = [];
  clearedByUserAgencyOverviewList = [];
  userOrganization: any;
  userIsGovernmentAgency = false;
  overviewSource: LocalDataSource = new LocalDataSource();
  draftOverviewSource: LocalDataSource = new LocalDataSource();
  clearedByUserAgencyOverviewSource: LocalDataSource = new LocalDataSource();

  overviewFound = false;

  // Smart table
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: '',

    columns: {
      shipName: {
        title: 'Ship Name',
        type: 'html'
      },
      callSign: {
        title: 'Call Sign',
        type: 'html'
      },
      locationName: {
        title: 'Location Name',
        type: 'html'
      },
      eta: {
        title: 'ETA'
      },
      etd: {
        title: 'ETD'
      },
      status: {
        title: 'Status',
        type: 'html'
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ButtonRowComponent
      }
    }
  };

  overviewRow(ov, isCancelled: boolean) {
    const row = {
      overviewModel: ov,
      shipName:
        `<div hidden>` +
        ov.ship.name + // ugly fix for alphabetical sorting but it works
        `</div> <div> <img src='assets/images/Flags/128x128/` +
        ov.ship.shipFlagCode.country.twoCharCode.toLowerCase() +
        `.png' height='20px'/> ` +
        ov.ship.name +
        `</div>`,
      callSign:
        ov.ship.callSign || `<div class="font-italic">Not provided.</div>`,
      locationName:
        `<div hidden>` +
        ov.location.name + // same ugly fix as ship name
        `</div> <div> <img src='assets/images/Flags/128x128/` +
        ov.location.country.twoCharCode.toLowerCase() +
        `.png' height='20px'/> ` +
        ov.location.name +
        `</div>`,
      eta: this.datePipe.transform(ov.portCall.locationEta, 'yyyy-MM-dd HH:mm'),
      etd: this.datePipe.transform(ov.portCall.locationEtd, 'yyyy-MM-dd HH:mm'),
      status: isCancelled
        ? `<div class="text-danger">` + ov.status + `</div>`
        : ov.status,
      actions: 'btn'
    };
    return row;
  }

  loadOverview() {
    this.overviewService.overviewData$.subscribe(results => {
      if (results) {
        this.overviewSource.load(results);
      }
    });
    this.overviewService.draftOverviewData$.subscribe(results => {
      if (results) {
        this.draftOverviewSource.load(results);
      }
    });
    this.overviewService.clearedByUserAgencyOverviewData$.subscribe(results => {
      if (results) {
        this.clearedByUserAgencyOverviewSource.load(results);
      }
    });
    this.overviewService.getPortCalls().subscribe(
      pcData => {
        if (pcData) {
          if (pcData.length === 0) {
            this.overviewFound = true;
          } else {
            let index = 0;
            const finalIndex = pcData.length - 1;
            pcData.forEach(pc => {
              this.overviewService.getOverview(pc.portCallId).subscribe(
                ov => {
                  if (ov) {
                    const row = this.overviewRow(
                      ov,
                      ov.status === PortCallStatusTypes.CANCELLED
                    );
                    // Case: port call is incomplete (status: draft)
                    if (ov.status === PortCallStatusTypes.DRAFT) {
                      this.draftOverviewList.push(row);
                    } else if (
                      this.userIsGovernmentAgency &&
                      ov.clearanceList &&
                      ov.clearanceList.some(
                        clearance =>
                          clearance.organizationId ===
                            this.userOrganization.organizationId &&
                          clearance.cleared != null
                      )
                    ) {
                      this.clearedByUserAgencyOverviewList.push(row);
                    } else {
                      this.overviewList.push(row);
                    }
                    this.overviewService.setOverviewData(this.overviewList);
                    this.overviewService.setDraftData(this.draftOverviewList);
                    this.overviewService.setClearedData(
                      this.clearedByUserAgencyOverviewList
                    );
                  }
                },
                undefined,
                () => {
                  if (index++ >= finalIndex) {
                    this.overviewFound = true;
                  }
                }
              );
            });
          }
        }
      },
      error => console.log(error)
    );
  }

  constructor(
    private datePipe: DatePipe,
    private accountService: AccountService,
    private organizationService: OrganizationService,
    private contentService: ContentService,
    private portCallService: PortCallService,
    private overviewService: PortCallOverviewService
  ) {}

  ngOnInit() {
    this.accountService.userClaimsData$.subscribe(userClaims => {
      if (userClaims) {
        const userClaimsTypePortCall = userClaims.filter(
          claim => claim.type === PortCallClaims.TYPE
        ); // Find user claims where claim type is Port Call
        const keys = Object.keys(this.permissions);
        keys.forEach(key => {
          this.permissions[key] = userClaimsTypePortCall.some(
            claim => claim.value.toUpperCase() === key.toString().toUpperCase()
          );
        });
      }
    });
    this.organizationService
      .getOrganizationForUser()
      .subscribe(organizationResult => {
        if (organizationResult) {
          this.userIsGovernmentAgency =
            organizationResult.organizationType &&
            organizationResult.organizationType.name ===
              OrganizationTypes.GOVERNMENT_AGENCY_STRING;
          if (this.userIsGovernmentAgency) {
            this.portCallService.setClearance(organizationResult);
          }
        }
        this.userOrganization = organizationResult;
        this.loadOverview();
      });
  }
}
