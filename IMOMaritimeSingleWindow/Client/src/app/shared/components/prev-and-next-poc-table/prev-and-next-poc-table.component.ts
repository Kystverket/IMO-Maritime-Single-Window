import { Component, OnDestroy, OnInit } from '@angular/core';
import { NextLocationTimeProperties } from 'app/shared/constants/next-location-time-properties';
import { PrevLocationTimeProperties } from 'app/shared/constants/prev-location-time-properties';
import { Subscription } from 'rxjs/Subscription';
import { PortCallService } from '../../services/port-call.service';

@Component({
  selector: 'app-prev-and-next-poc-table',
  templateUrl: './prev-and-next-poc-table.component.html',
  styleUrls: ['./prev-and-next-poc-table.component.css']
})
export class PrevAndNextPocTableComponent implements OnInit, OnDestroy {

  prevLocationFlag: string;
  nextLocationFlag: string;
  PrevLocationTimeProperties = new PrevLocationTimeProperties();
  NextLocationTimeProperties = new NextLocationTimeProperties();
  prevLocationTimeProperties: any;
  nextLocationTimeProperties: any;
  prevLocationTimeInfo: any[] = [];
  nextLocationTimeInfo: any[] = [];

  prevPortOfCallDataSubscription: Subscription;
  nextPortOfCallDataSubscription: Subscription;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.prevLocationTimeProperties = this.PrevLocationTimeProperties.getProperties();
    this.nextLocationTimeProperties = this.NextLocationTimeProperties.getProperties();

    this.prevPortOfCallDataSubscription = this.portCallService.prevLocationData$.subscribe(prevPocResult => {
      if (prevPocResult) {
        this.prevLocationTimeProperties.LOCATION_NAME.data = prevPocResult.name;
        this.prevLocationTimeProperties.LOCATION_CODE.data = prevPocResult.locationCode;
        this.portCallService.prevEtdData$.subscribe(dateTimeResult => {
          if (dateTimeResult) {
            this.prevLocationTimeProperties.ETD.data = this.dateTimeFormat(dateTimeResult);
          }
        });
      } else {
        this.prevLocationTimeProperties = this.PrevLocationTimeProperties.getProperties();
      }
      this.prevLocationTimeInfo = Object.values(this.prevLocationTimeProperties);
    });

    this.nextPortOfCallDataSubscription = this.portCallService.nextLocationData$.subscribe(nextPocResult => {
      if (nextPocResult) {
        this.nextLocationTimeProperties.LOCATION_NAME.data = nextPocResult.name;
        this.nextLocationTimeProperties.LOCATION_CODE.data = nextPocResult.locationCode;
        this.portCallService.nextEtaData$.subscribe(dateTimeResult => {
          if (dateTimeResult) {
            this.nextLocationTimeProperties.ETA.data = this.dateTimeFormat(dateTimeResult);
          }
        });
      } else {
        this.nextLocationTimeProperties = this.NextLocationTimeProperties.getProperties();
      }
      this.nextLocationTimeInfo = Object.values(this.nextLocationTimeProperties);
    });
  }

  ngOnDestroy() {
    this.prevPortOfCallDataSubscription.unsubscribe();
    this.nextPortOfCallDataSubscription.unsubscribe();
  }

  private dateTimeFormat(dateTime) {
    dateTime = new Date(dateTime);
    return (
      dateTime.getFullYear() +
      '-' +
      this.twoDigitFormat(dateTime.getMonth() + 1) +
      '-' +
      this.twoDigitFormat(dateTime.getDate()) +
      ' ' +
      this.twoDigitFormat(dateTime.getHours()) +
      ':' +
      this.twoDigitFormat(dateTime.getMinutes())
    );
  }

  private twoDigitFormat(number: number) {
    if (number <= 9) {
      return '0' + number;
    } else {
      return number;
    }
  }

}
