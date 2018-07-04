import { Component, OnInit, Input } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { LocationService } from 'app/shared/services/location.service';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';

@Component({
  selector: 'app-find-port-of-disembarkation',
  templateUrl: './find-port-of-disembarkation.component.html',
  styleUrls: ['./find-port-of-disembarkation.component.css'],
  providers: [LocationService]
})
export class FindPortOfDisembarkationComponent implements OnInit {

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
        if (locationResult) {
          this.locationFlag = (locationResult.country) ? locationResult.country.twoCharCode.toLowerCase() : null;
          this.locationProperties.COUNTRY.data = (locationResult.country) ? locationResult.country.name : null;
          this.locationProperties.LOCATION_TYPE.data = locationResult.locationType.name;
          this.locationProperties.LOCATION_NAME.data = locationResult.name;
          this.locationProperties.LOCATION_CODE.data = locationResult.locationCode;

          this.locationFound = true;
          this.passengerListService.setPortOfDisembarkation(locationResult);
        } else {
          this.locationFound = false;
          this.passengerListService.setPortOfDisembarkation(null);
        }
        this.locationInfo = Object.values(this.locationProperties);
      }
    );
  }

}
