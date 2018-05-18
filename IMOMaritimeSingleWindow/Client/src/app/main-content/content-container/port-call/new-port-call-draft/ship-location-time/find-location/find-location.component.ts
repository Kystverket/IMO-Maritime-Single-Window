import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { LocationProperties } from '../../../../../../shared/constants/location-properties';
import { LocationService } from '../../../../../../shared/services/location.service';
import { PortCallService } from '../../../../../../shared/services/port-call.service';



@Component({
    selector: 'app-find-location',
    templateUrl: './find-location.component.html',
    styleUrls: ['./find-location.component.css'],
    providers: [LocationService]
})
export class FindLocationComponent implements OnInit {

    locationFound: boolean = false;

    locationFlag: string;
    locationProperties = LocationProperties.PROPERTIES;
    locationInfo: any[];
    constructor(private portCallService: PortCallService, private locationService: LocationService) { }

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
                    this.locationProperties.LOCATION_TYPE.data = locationResult.location.locationType.name;
                    this.locationProperties.LOCATION_NAME.data = locationResult.location.name;
                    this.locationProperties.LOCATION_CODE.data = locationResult.location.locationCode;

                    this.locationFound = true;
                    this.portCallService.setLocationData(locationResult);
                } else {
                    this.locationFound = false;
                    this.portCallService.setLocationData(null);
                }
                this.locationInfo = Object.values(this.locationProperties);
            }
        );
    }
}
