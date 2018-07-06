import { Component, OnInit, Input } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { LocationService } from 'app/shared/services/location.service';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';

@Component({
  selector: 'app-find-port-of-embarkation',
  templateUrl: './find-port-of-embarkation.component.html',
  styleUrls: ['./find-port-of-embarkation.component.css'],
  providers: [LocationService]
})
export class FindPortOfEmbarkationComponent implements OnInit {

  @Input() showDropDown = true;

  locationModel: any;

  locationFound = false;
  locationFlag: string;
  locationProperties = LocationProperties.PROPERTIES;
  locationInfo: any[];

  constructor(
    private locationService: LocationService,
    private passengerListService: PortCallPassengerListService
  ) { }

  deselectLocation() {
    this.locationFound = false;
    this.locationService.setLocationData(null);
  }


  ngOnInit() {

    this.locationService.locationData$.subscribe(
      locationResult => {
        console.log(locationResult);

        if (locationResult) {
          console.log(locationResult.name);
          this.locationFlag = (locationResult.country) ? locationResult.country.twoCharCode.toLowerCase() : null;
          this.locationProperties.COUNTRY.data = (locationResult.country) ? locationResult.country.name : null;
          this.locationProperties.LOCATION_TYPE.data = locationResult.locationType.name;
          this.locationProperties.LOCATION_NAME.data = locationResult.name;
          this.locationProperties.LOCATION_CODE.data = locationResult.locationCode;

          this.locationFound = true;
          this.passengerListService.setPortOfEmbarkation(locationResult);
        } else {
          this.locationFound = false;
          this.passengerListService.setPortOfEmbarkation(null);
        }
        this.locationInfo = Object.values(this.locationProperties);
      }
    );
  }

}
