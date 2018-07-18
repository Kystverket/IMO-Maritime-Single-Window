import { Component, OnInit } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-find-location',
    templateUrl: './find-location.component.html',
    styleUrls: ['./find-location.component.css']
})
export class FindLocationComponent implements OnInit {

    locationFound = false;

    locationFlag: string;
    locationProperties = new LocationProperties().getPropertyList();

    constructor(private portCallService: PortCallService) { }

    ngOnInit() { }

    onLocationResult(locationResult) {
        if (locationResult) {
            this.locationFound = true;
            this.portCallService.setLocationData(locationResult);
            LocationProperties.setLocationData(this.locationProperties, locationResult);
            const twoCharCode = locationResult.country.twoCharCode.toLowerCase() || 'xx';
            const countryFlag = twoCharCode + '.png';
            LocationProperties.setCountry(this.locationProperties, locationResult.country.name, countryFlag);
        } else {
            this.locationFound = false;
            this.portCallService.setLocationData(null);
        }
    }

    deselectLocation() {
        this.locationFound = false;
        this.portCallService.setLocationData(null);
    }
}
