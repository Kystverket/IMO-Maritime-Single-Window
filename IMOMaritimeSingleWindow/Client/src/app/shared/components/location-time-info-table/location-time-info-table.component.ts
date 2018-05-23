import { Component, OnInit } from '@angular/core';
import { LocationTimeProperties } from '../../constants/location-time-properties';
import { PortCallService } from '../../services/port-call.service';

@Component({
  selector: 'app-location-time-info-table',
  templateUrl: './location-time-info-table.component.html',
  styleUrls: ['./location-time-info-table.component.css']
})
export class LocationTimeInfoTableComponent implements OnInit {

  locationFlag: string;
  locationTimeProperties = LocationTimeProperties.PROPERTIES;
  locationTimeInfo: any[] = [];

  constructor(private portCallService: PortCallService) { }
  ngOnInit() {
    this.locationTimeProperties = LocationTimeProperties.PROPERTIES;
    this.portCallService.locationData$.subscribe(
      locationResult => {
        if (locationResult) {
          this.locationFlag = (locationResult.country) ? locationResult.country.twoCharCode.toLowerCase() : null;
          this.locationTimeProperties.LOCATION_TYPE.data = locationResult.locationType.name;
          this.locationTimeProperties.LOCATION_NAME.data = locationResult.name;
          this.locationTimeProperties.LOCATION_CODE.data = locationResult.locationCode;

          this.portCallService.etaEtdData$.subscribe(
            timeResult => {
              if (timeResult) {
                this.locationTimeProperties.ETA.data = this.dateTimeFormat(timeResult.eta);
                this.locationTimeProperties.ETD.data = this.dateTimeFormat(timeResult.etd);
              }
            }
          );
        }
        this.locationTimeInfo = Object.values(this.locationTimeProperties);
      }
    );


  }

  private dateTimeFormat(time) {
    return time.year + "-" + this.twoDigitFormat(time.month) + "-" + this.twoDigitFormat(time.day)
      + " " + this.twoDigitFormat(time.hour) + ":" + this.twoDigitFormat(time.minute);
  }

  private twoDigitFormat(number: number) {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  }

}
