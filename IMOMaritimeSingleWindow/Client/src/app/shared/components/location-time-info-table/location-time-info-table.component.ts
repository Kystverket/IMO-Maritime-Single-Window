import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationTimeProperties } from 'app/shared/constants/location-time-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';
import { DateTime } from '../../interfaces/dateTime.interface';

@Component({
  selector: 'app-location-time-info-table',
  templateUrl: './location-time-info-table.component.html',
  styleUrls: ['./location-time-info-table.component.css']
})
export class LocationTimeInfoTableComponent implements OnInit, OnDestroy {
  locationFlag: string;
  locationTimeProperties = new LocationTimeProperties().getPropertyList();

  locationDataSubscription: Subscription;
  etaDataSubscription: Subscription;
  etdDataSubscription: Subscription;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.locationDataSubscription = this.portCallService.locationData$.subscribe(locationResult => {
      if (locationResult) {
        this.locationFlag = locationResult.country
          ? locationResult.country.twoCharCode.toLowerCase()
          : null;
        LocationTimeProperties.setLocationData(this.locationTimeProperties, locationResult);
      }
    });
    this.etaDataSubscription = this.portCallService.etaData$.subscribe(
      etaData => {
        LocationTimeProperties.setEta(this.locationTimeProperties, this.dateTimeFormat(etaData));
      }
    );
    this.etdDataSubscription = this.portCallService.etdData$.subscribe(
      etdData => {
        LocationTimeProperties.setEtd(this.locationTimeProperties, this.dateTimeFormat(etdData));
      }
    );
  }

  ngOnDestroy() {
    this.locationDataSubscription.unsubscribe();
    this.etaDataSubscription.unsubscribe();
    this.etdDataSubscription.unsubscribe();
  }

  private dateTimeFormat(dateTime: DateTime) {
    return (
      dateTime.date.year +
      '-' +
      this.twoDigitFormat(dateTime.date.month) +
      '-' +
      this.twoDigitFormat(dateTime.date.day) +
      ' ' +
      this.twoDigitFormat(dateTime.time.hour) +
      ':' +
      this.twoDigitFormat(dateTime.time.minute)
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
