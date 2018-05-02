import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../../../../shared/models/location-model';
import { LocationService } from '../../../../../shared/services/location.service';

@Component({
  selector: 'app-register-location',
  templateUrl: './register-location.component.html',
  styleUrls: ['./register-location.component.css'],
  providers: [LocationModel, LocationService]
})
export class RegisterLocationComponent implements OnInit {
  locationTypeList: any[];
  locationTypeSelected: boolean;
  selectedLocationType: any;
  locationTypeDropdownString: string = "Select location type";

  constructor(public locationModel: LocationModel, private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocationTypes().subscribe(
      locationTypesData => {
        this.locationTypeList = locationTypesData;
      }
    );
  }

}
