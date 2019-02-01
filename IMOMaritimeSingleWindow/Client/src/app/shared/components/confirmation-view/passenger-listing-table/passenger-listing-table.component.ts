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
    noDataMessage: 'There are no passengers reported.',
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
      identityDocument: {
        title: 'ID Type and Number',
        valuePrepareFunction: (value) => {
          if (value[0] == null || value[0] === undefined || value.length === 0) {
            return 'N/A';
          }
          let returnVal = '';
          if (value[0].identityDocumentType != null && value[0].identityDocumentType !== undefined) {
            returnVal += value[0].identityDocumentType.description;
          }
          if (value[0].identityDocumentNumber != null && value[0].identityDocumentNumber !== undefined) {
            returnVal += ' : ' + value[0].identityDocumentNumber;
          }
          if (returnVal.trim().length === 0) {
            returnVal = 'N/A';
          }
          return returnVal;
        }
      },
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
