import { Component, OnInit } from '@angular/core';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';
import { LocationTimeProperties } from 'app/shared/constants/location-time-properties';
import { PrevLocationTimeProperties } from 'app/shared/constants/prev-location-time-properties';
import { NextLocationTimeProperties } from 'app/shared/constants/next-location-time-properties';

@Component({
  selector: 'app-prev-and-next-poc-table',
  templateUrl: './prev-and-next-poc-table.component.html',
  styleUrls: ['./prev-and-next-poc-table.component.css']
})
export class PrevAndNextPocTableComponent implements OnInit {

  prevLocationFlag: string;
  nextLocationFlag: string;
  prevLocationTimeProperties = PrevLocationTimeProperties.PROPERTIES;
  nextLocationTimeProperties = NextLocationTimeProperties.PROPERTIES;
  prevLocationTimeInfo: any[] = [];
  nextLocationTimeInfo: any[] = [];

  constructor(private prevAndNextPocService: PrevAndNextPocService) { }
  ngOnInit() {
    this.prevLocationTimeProperties = PrevLocationTimeProperties.PROPERTIES;
    this.nextLocationTimeProperties = NextLocationTimeProperties.PROPERTIES;

    this.prevAndNextPocService.prevPortOfCallData$.subscribe(prevPocResult => {
      if (prevPocResult) {
        this.prevLocationTimeProperties.LOCATION_NAME.data = prevPocResult.name;
        this.prevLocationTimeProperties.LOCATION_CODE.data = prevPocResult.locationCode;
        this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(dateTimeResult => {
          if (dateTimeResult) {
            this.prevLocationTimeProperties.ETD.data = this.dateTimeFormat(dateTimeResult);
          }
        });
      }
      this.prevLocationTimeInfo = Object.values(this.prevLocationTimeProperties);
    });

    this.prevAndNextPocService.nextPortOfCallData$.subscribe(nextPocResult => {
      if (nextPocResult) {
        this.nextLocationTimeProperties.LOCATION_NAME.data = nextPocResult.name;
        this.nextLocationTimeProperties.LOCATION_CODE.data = nextPocResult.locationCode;
        this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(dateTimeResult => {
          if (dateTimeResult) {
            this.nextLocationTimeProperties.ETA.data = this.dateTimeFormat(dateTimeResult);
          }
        });
      }
      this.nextLocationTimeInfo = Object.values(this.nextLocationTimeProperties);
    });
  }

  private dateTimeFormat(time) {
    return (
      time.getFullYear() +
      '-' +
      this.twoDigitFormat(time.getMonth() + 1) +
      '-' +
      this.twoDigitFormat(time.getDate()) +
      ' ' +
      this.twoDigitFormat(time.getHours()) +
      ':' +
      this.twoDigitFormat(time.getMinutes())
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
