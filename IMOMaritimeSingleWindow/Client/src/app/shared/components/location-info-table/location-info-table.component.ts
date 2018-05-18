import { Component, OnInit } from '@angular/core';
import { LocationProperties } from '../../constants/location-properties';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-info-table',
  templateUrl: './location-info-table.component.html',
  styleUrls: ['./location-info-table.component.css']
})
export class LocationInfoTableComponent implements OnInit {

  locationFlag: string;
  locationProperties = LocationProperties.PROPERTIES;
  locationInfo: any[] = [];

  constructor(private locationService: LocationService) { }
  ngOnInit() {
    this.locationProperties = LocationProperties.PROPERTIES;
    this.locationService.locationData$.subscribe(
      locationResult => {
        if (locationResult) {
          this.locationFlag = (locationResult.country) ? locationResult.country.twoCharCode.toLowerCase() : null;
          this.locationProperties.COUNTRY.data = (locationResult.country) ? locationResult.country.name : null;
          this.locationProperties.LOCATION_TYPE.data = locationResult.location.locationType.name;
          this.locationProperties.LOCATION_NAME.data = locationResult.location.name;
          this.locationProperties.LOCATION_CODE.data = locationResult.location.locationCode;
          this.locationProperties.POST_CODE.data = locationResult.location.postCode;
        }
        this.locationInfo = Object.values(this.locationProperties);
      }
    );


  }

}
