import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { LocationService } from 'app/shared/services/location.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-location-info-table',
  templateUrl: './location-info-table.component.html',
  styleUrls: ['./location-info-table.component.css']
})
export class LocationInfoTableComponent implements OnInit, OnDestroy {

  locationFlag: string;
  locationProperties = LocationProperties.PROPERTIES;
  locationInfo: any[] = [];

  locationDataSubscription: Subscription;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationProperties = LocationProperties.PROPERTIES;
    this.locationDataSubscription = this.locationService.locationData$.subscribe(
      locationResult => {
        if (locationResult) {
          this.locationFlag = (locationResult.country) ? locationResult.country.twoCharCode.toLowerCase() : null;
          this.locationProperties.COUNTRY.data = (locationResult.country) ? locationResult.country.name : null;
          this.locationProperties.LOCATION_TYPE.data = locationResult.locationType.name;
          this.locationProperties.LOCATION_NAME.data = locationResult.name;
          this.locationProperties.LOCATION_CODE.data = locationResult.locationCode;
        }
        this.locationInfo = Object.values(this.locationProperties);
      }
    );
  }

  ngOnDestroy() {
    this.locationDataSubscription.unsubscribe();
  }

}
