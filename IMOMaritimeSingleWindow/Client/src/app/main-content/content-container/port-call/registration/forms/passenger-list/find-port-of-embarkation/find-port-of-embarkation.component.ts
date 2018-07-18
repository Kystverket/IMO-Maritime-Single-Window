import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { LocationService } from 'app/shared/services/location.service';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-find-port-of-embarkation',
  templateUrl: './find-port-of-embarkation.component.html',
  styleUrls: ['./find-port-of-embarkation.component.css'],
  providers: [LocationService]
})
export class FindPortOfEmbarkationComponent implements OnInit, OnDestroy {

  @Input() showDropDown = true;

  locationModel: any;

  locationFound = false;
  locationFlag: string;
  locationProperties = LocationProperties.PROPERTIES;
  locationInfo: any[];

  locationDataSubscription: Subscription;

  constructor(
    private locationService: LocationService,
    private passengerListService: PortCallPassengerListService
  ) { }

  ngOnInit() {
    this.locationDataSubscription = this.locationService.locationData$.subscribe(
      locationResult => {
        if (locationResult) {
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

  ngOnDestroy() {
    this.locationDataSubscription.unsubscribe();
  }

  deselectLocation() {
    this.locationFound = false;
    this.locationService.setLocationData(null);
  }
}
