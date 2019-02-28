import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PERSON_ON_BOARD_TYPES } from 'app/shared/constants/enumValues';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-passenger-listing-table',
  templateUrl: './passenger-listing-table.component.html',
  styleUrls: ['./passenger-listing-table.component.css']
})
export class PassengerListingTableComponent implements OnInit, OnDestroy {

  @Input() iconPath: string;
  @Input() portCallId: number;

  passengerDataSubscription: Subscription;

  public passengers: any = [];
  public headerText: string;

  // Smart table
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'No passengers found.',
    columns: {
      familyName: {
        title: 'Family Name'
      },
      givenName: {
        title: 'Given Name'
      },
      nationality: {
        title: 'Nationality',
        valuePrepareFunction: (value) => {
          if (value != null) {
            return value;
          } else {
            return 'N/A';
          }
        }
      },
      dateOfBirth: {
        title: 'Date of Birth',
        valuePrepareFunction: (value) => {
          if (value != null) {
            return new Date(value).toDateString();
          } else {
            return 'N/A';
          }
        }
      },
      placeOfBirth: {
        title: 'Place of Birth',
        valuePrepareFunction: (value) => {
          if (value != null) {
            return value;
          } else {
            return 'N/A';
          }
        }
      },
      identityDocumentListingModel: {
        title: 'Identity Document (Type)',
    },
      issuingNation: {
        title: 'Issuing Nation',
        valuePrepareFunction: (value) => {
          return value ? value : 'N/A';

        }
      },
      expiryDate: {
        title: 'Expiry Date',
        valuePrepareFunction: (value) => {
          return value ? value : 'N/A';
        }
      },
      inTransit: {
        title: 'Transit Pax',
        valuePrepareFunction: (value) => {
          return value ? 'Yes' : 'No';
        }
      }
    }
  };

  constructor(private personOnBoardService: PortCallFalPersonOnBoardService) { }

  ngOnInit() {

    if (this.portCallId) {
      this.passengerDataSubscription = this.personOnBoardService.getPassengerListByPortCallId(this.portCallId)
        .finally(() => {
          this.passengerDataSubscription = this.personOnBoardService.getOverviewByPortCall(this.portCallId, PERSON_ON_BOARD_TYPES.PAX)
            .subscribe(summary => {
              this.headerText = 'Passenger Info - No. of Passengers: ' + summary.numberOfPobs + ' - No. of Passengers in Transit : ' + summary.numberInTransit;
            }, error => {
              this.headerText = 'Passenger Info';
            });
        })
        .subscribe(
          passengerList => {
            if (passengerList) {
              this.passengers = passengerList;
            }
          }
        );
    }
  }

  ngOnDestroy() {
    this.passengerDataSubscription.unsubscribe();
  }

}
