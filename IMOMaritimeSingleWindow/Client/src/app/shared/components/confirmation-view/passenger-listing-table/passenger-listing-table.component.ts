import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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

  // Smart table
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    columns: {
      familyName: {
        title: 'Family Name'
      },
      givenName: {
        title: 'Given Name'
      },
      nationality: {
        title: 'Nationality',
        valuePrepareFunction: (value) => (value) ? value.name : ''
      },
      dateOfBirth: {
        title: 'Date of Birth',
        valuePrepareFunction: (value) => (value) ? new Date(value).toDateString() : ''
      },
      placeOfBirth: {
        title: 'Place of Birth'
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
      this.passengerDataSubscription = this.personOnBoardService.getPassengerListByPortCallId(this.portCallId).subscribe(
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
