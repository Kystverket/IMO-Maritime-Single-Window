import { Component, OnInit, Input } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { LocationService } from 'app/shared/services/location.service';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { LocationModel } from 'app/shared/models/location-model';

@Component({
  selector: 'app-find-port-of-embarkation',
  templateUrl: './find-port-of-embarkation.component.html',
  styleUrls: ['./find-port-of-embarkation.component.css'],
  providers: [LocationService]
})
export class FindPortOfEmbarkationComponent implements OnInit {

  @Input() showDropDown = true;
  @Input() label: string;

  locationModel: LocationModel = new LocationModel();

  locationFound = false;
  locationFlag: string;
  locationProperties = LocationProperties.PROPERTIES;
  locationInfo: any[];

  locationName: string;
  locationCode: any;

  constructor(
    private passengerListService: PortCallPassengerListService
  ) { }

  deselectLocation() {
    this.locationFound = false;
    this.passengerListService.setPortOfEmbarkation(null);
  }


  ngOnInit() {

    this.passengerListService.embarkationModelData$.subscribe(
      embarkation => {

        if (embarkation) {
          this.locationModel = embarkation;
          this.locationFlag = (embarkation.country) ? embarkation.country.twoCharCode.toLowerCase() : null;
          this.locationFound = true;
        } else {
          this.locationFound = false;
        }
        this.locationInfo = Object.values(this.locationProperties);
      }
    );
  }

}
