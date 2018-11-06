import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-passenger-info-table',
  templateUrl: './passenger-info-table.component.html',
  styleUrls: ['./passenger-info-table.component.css']
})
export class PassengerInfoTableComponent implements OnInit, OnDestroy {
  @Input() iconPath: string;
  @Input() portCallId: number;

  passengerDataSubscription: Subscription;
  numberOfPassengers = 0;
  passengersInTransit = 0;

  constructor(
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) { }

  ngOnInit() {
    if (this.portCallId) {
      this.passengerDataSubscription = this.personOnBoardService.getPassengerListByPortCallId(this.portCallId).subscribe(
        passengerList => {
          if (passengerList) {
            this.numberOfPassengers = passengerList.length;
            passengerList.forEach(passenger => {
              if (passenger.inTransit === true) {
                this.passengersInTransit += 1;
              }
            });
          }
        }
      );
    }
  }

  ngOnDestroy() {
    this.passengerDataSubscription.unsubscribe();
  }

}
