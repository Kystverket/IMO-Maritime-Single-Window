import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrganizationTypes } from 'app/shared/constants/organization-types';
import { PortCallClaims } from 'app/shared/constants/port-call-claims';
import { PortCallStatusTypes } from 'app/shared/constants/port-call-status-types';
import { AccountService, ContentService, OrganizationService, PortCallOverviewService, PortCallService } from 'app/shared/services/';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { ButtonRowComponent } from './button-row/button-row.component';
import { ClearanceRowComponent } from './clearance-row/clearance-row.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [OrganizationService, DatePipe]
})
export class OverviewComponent implements OnInit, OnDestroy {
  permissions = PortCallClaims.portCallPermissions;
  overviewList = [];
  draftOverviewList = [];
  cancelledOverviewList = [];
  completedOverviewList = [];
  clearedByUserAgencyOverviewList = [];
  userOrganization: any;
  userIsGovernmentAgency = false;
  overviewSource: LocalDataSource = new LocalDataSource();
  draftOverviewSource: LocalDataSource = new LocalDataSource();
  clearedByUserAgencyOverviewSource: LocalDataSource = new LocalDataSource();

  showCancelledPortCalls = false;
  showCompletedPortCalls = false;

  // Smart table
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There are no port calls in this list.',

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
        title: 'ETA',
        type: 'html'
      },
      etd: {
        title: 'ETD',
        type: 'html'
      },
      status: {
        title: 'Status',
        type: 'html'
      },
      clearances: {
        title: 'Clearances',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ClearanceRowComponent
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ButtonRowComponent,
        onComponentInitFunction: (instance) => {
          instance.portCallCancelled.subscribe(portCallId => {
            this.onPortCallCancelled(portCallId);
          });
          instance.portCallCompleted.subscribe(portCallId => {
            this.onPortCallCompleted(portCallId);
          });
          instance.portCallUncompleted.subscribe(portCallId => {
            this.onPortCallUncompleted(portCallId);
          });
        }
      }
    }
  };

  draftTableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There are no port calls in this list.',

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
        title: 'ETA',
        type: 'html'
      },
      etd: {
        title: 'ETD',
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

  userClaimsDataSubscription: Subscription;
  getOrganizationForUserSubscription: Subscription;

  constructor(
    private datePipe: DatePipe,
    private accountService: AccountService,
    private organizationService: OrganizationService,
    private contentService: ContentService,
    private portCallService: PortCallService,
    private overviewService: PortCallOverviewService
  ) { }

  ngOnInit() {
    this.userClaimsDataSubscription = this.accountService.userClaimsData$.subscribe(userClaims => {
      if (userClaims) {
        const userClaimsTypePortCall = userClaims.filter(claim => claim.type === PortCallClaims.TYPE);
        // Find user claims where claim type is Port Call
        const keys = Object.keys(this.permissions);
        keys.forEach(key => {
          this.permissions[key] = userClaimsTypePortCall.some(
            claim => claim.value.toUpperCase() === key.toString().toUpperCase()
          );
        });
      }
    });
    this.getOrganizationForUserSubscription = this.organizationService.getOrganizationForUser()
    .finally(() => this.loadOverview())
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
    });
  }

  ngOnDestroy() {
    this.userClaimsDataSubscription.unsubscribe();
    this.getOrganizationForUserSubscription.unsubscribe();
  }

  overviewRow(ov) {
    const row = {
      overviewModel: ov,
      portCallId: ov.portCallId,
      shipName:
        `<div class="no-wrap"><div hidden>` +
        ov.shipName + // ugly fix for alphabetical sorting but it works
        `</div> <div> <img src='assets/images/flags/128x128/` +
        ov.shipTwoCharCode.toLowerCase() +
        `.png' height='20px'/> ` +
        ov.shipName +
        `</div></div>`,
      callSign:
        ov.callSign ||
        `<span class="font-italic no-wrap">Not provided.</span>`,
      locationName:
        `<div hidden>` +
        ov.locationName + // same ugly fix as ship name
        `</div> <div> <img src='assets/images/flags/128x128/` +
        ov.locationTwoCharCode.toLowerCase() +
        `.png' height='20px'/> ` +
        ov.locationName +
        `</div>`,
      eta:
        `<span class="no-wrap">` +
        this.datePipe.transform(ov.eta, 'yyyy-MM-dd') +
        `</span> <span class="no-wrap">` +
        this.datePipe.transform(ov.eta, 'HH:mm') +
        `</span>`,
      etd:
        `<span class="no-wrap">` +
        this.datePipe.transform(ov.etd, 'yyyy-MM-dd') +
        `</span> <span class="no-wrap">` +
        this.datePipe.transform(ov.etd, 'HH:mm') +
        `</span>`,
      status:
        ov.status === PortCallStatusTypes.CANCELLED
          ? `<div class="text-danger">` + ov.status + `</div>`
          : `<div class="no-wrap">` + ov.status + `</div>`,
      clearances:
        'clearances',
      actions: 'btn'
    };
    return row;
  }

  loadOverview() {

    this.overviewService.showCancelledPortCalls$.subscribe(showCancelledPortCalls => {
      this.showCancelledPortCalls = showCancelledPortCalls;
      this.rerenderList();
    });
    this.overviewService.showCompletedPortCalls$.subscribe(showCompletedPortCalls => {
      this.showCompletedPortCalls = showCompletedPortCalls;
      this.rerenderList();
    });
    this.overviewService.overviewData$.subscribe(results => {
      if (results) {
        this.overviewSource.load(results);
      }
    });
    if (!this.userIsGovernmentAgency) {
      this.overviewService.draftOverviewData$.subscribe(results => {
        if (results) {
          this.draftOverviewSource.load(results);
        }
      });
    } else {
      this.overviewService.clearedByUserAgencyOverviewData$.subscribe(results => {
        if (results) {
          this.clearedByUserAgencyOverviewSource.load(results);
        }
      });
    }

    this.overviewService.getOverviewsByUser()
      .finally(() => {
        this.sortOverView();
      })
      .subscribe(
        ovs => {
          if (ovs) {
            ovs.forEach(ov => {
              const row = this.overviewRow(ov);
              // Case: port call is incomplete (status: draft)
              if (ov.status === PortCallStatusTypes.DRAFT) {
                this.draftOverviewList.push(row);
              } else if (
                this.userIsGovernmentAgency &&
                ov.clearanceList &&
                ov.clearanceList.some(
                  clearance => clearance.organizationId === this.userOrganization.organizationId && clearance.cleared != null
                )
              ) {
                this.clearedByUserAgencyOverviewList.push(row);
              } else if (ov.status === PortCallStatusTypes.CANCELLED) {
                this.cancelledOverviewList.push(row);
              } else if (ov.status === PortCallStatusTypes.COMPLETED) {
                this.completedOverviewList.push(row);
              } else {
                this.overviewList.push(row);
              }

            });
          }
        },
        error => console.log(error),
        () => {
        }
      );

  }

  private sortOverView() {

    this.overviewService.setOverviewData(this.overviewList.sort(
      (row1, row2) => (row2 && row1) ? row2.portCallId - row1.portCallId : null
    ));
    this.overviewService.setDraftData(this.draftOverviewList.sort(
      (row1, row2) => (row2 && row1) ? row2.portCallId - row1.portCallId : null
    ));
    this.overviewService.setClearedData(this.clearedByUserAgencyOverviewList.sort(
      (row1, row2) => (row2 && row1) ? row2.portCallId - row1.portCallId : null
    ));
    this.rerenderList();
  }

  private rerenderList() {
    let portCallList = this.overviewList;
    if (this.showCancelledPortCalls) {
      portCallList = portCallList.concat(this.cancelledOverviewList);
    }
    if (this.showCompletedPortCalls) {
      portCallList = portCallList.concat(this.completedOverviewList);
    }
    this.overviewService.setOverviewData(portCallList.sort(
      (row1, row2) => (row2.overviewModel.portCall && row1.overviewModel.portCall) ?  row2.overviewModel.portCall.portCallId - row1.overviewModel.portCall.portCallId : null
    ));
  }

  onPortCallCancelled(portCallId) {
    this.movePortCallToList(portCallId, this.overviewList, this.cancelledOverviewList);
  }

  onPortCallCompleted(portCallId) {
    this.movePortCallToList(portCallId, this.overviewList, this.completedOverviewList);
  }

  onPortCallUncompleted(portCallId) {
    this.movePortCallToList(portCallId, this.completedOverviewList, this.overviewList);
  }

  private movePortCallToList(portCallId: number, fromList: any[], toList: any[]) {
    const portCallIndex = fromList.findIndex(row => row.overviewModel.portCall.portCallId === portCallId);
    if (portCallIndex >= 0) {
      toList.push(fromList[portCallIndex]);
      fromList.splice(portCallIndex, 1);
      this.rerenderList();
    }
  }

  toggleCancelledPortCalls(showCancelled) {
    this.overviewService.setShowCancelledPortCalls(showCancelled);
  }

  toggleCompletedPortCalls(showCompleted) {
    this.overviewService.setShowCompletedPortCalls(showCompleted);
  }
}
