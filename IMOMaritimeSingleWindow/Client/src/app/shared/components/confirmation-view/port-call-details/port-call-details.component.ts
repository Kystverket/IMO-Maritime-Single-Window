import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
import { Subscription } from 'rxjs/Subscription';

const NO_OF_CREW = 'No. of Crew';
const NO_OF_PASSENGERS = 'No. of Passengers';
const ACTUAL_DRAUGHT = 'Actual Draught';
const AIR_DRAUGHT = 'Air Draught';

@Component({
  selector: 'app-port-call-details',
  templateUrl: './port-call-details.component.html',
  styleUrls: ['./port-call-details.component.css']
})
export class PortCallDetailsComponent implements OnInit, OnDestroy {
  portCallDetailsInfo: any[] = [
    { description: NO_OF_CREW, data: null },
    { description: NO_OF_PASSENGERS, data: null },
    { description: ACTUAL_DRAUGHT, data: null },
    { description: AIR_DRAUGHT, data: null }
  ];

  portCallId: number;

  crewPassengersAndDimensionsDataSubscription: Subscription;

  constructor(private portCallDetailsService: PortCallDetailsService) {}

  ngOnInit() {
    this.crewPassengersAndDimensionsDataSubscription = this.portCallDetailsService.crewPassengersAndDimensionsData$.subscribe(data => {
      if (data != null) {
        this.portCallDetailsInfo.find(p => p.description === NO_OF_CREW).data =
          data.numberOfCrew;
        this.portCallDetailsInfo.find(
          p => p.description === NO_OF_PASSENGERS
        ).data =
          data.numberOfPassengers;
        this.portCallDetailsInfo.find(
          p => p.description === ACTUAL_DRAUGHT
        ).data =
          data.actualDraught;
        this.portCallDetailsInfo.find(p => p.description === AIR_DRAUGHT).data =
          data.airDraught;
      }
    });

    // get reporting data to gather portCallId of selected port call.
    this.portCallDetailsService.reportingForThisPortCallData$.subscribe(reportingData => {

      if (reportingData != null)
        this.portCallId = reportingData.portCallId;
    });
  }

  ngOnDestroy() {
    this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
  }
}
