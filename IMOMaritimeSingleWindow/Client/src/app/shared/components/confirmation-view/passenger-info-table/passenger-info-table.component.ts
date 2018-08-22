import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';

@Component({
  selector: 'app-passenger-info-table',
  templateUrl: './passenger-info-table.component.html',
  styleUrls: ['./passenger-info-table.component.css']
})
export class PassengerInfoTableComponent implements OnInit {
  @Input() iconPath: string;
  passengerDataSubscription: Subscription;
  numberOfPassengers = 0;
  passengersInTransit = 0;

  constructor(
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) { }

  ngOnInit() {
    this.passengerDataSubscription = this.personOnBoardService.passengerList$.subscribe(
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
