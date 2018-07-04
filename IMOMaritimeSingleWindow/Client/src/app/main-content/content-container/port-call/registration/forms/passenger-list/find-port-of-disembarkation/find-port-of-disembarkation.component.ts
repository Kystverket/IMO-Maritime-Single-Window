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
  @Input() label: string;

  locationModel: any;

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
    this.passengerListService.setPortOfDisembarkation(null);
  }

  ngOnInit() {

    this.passengerListService.disembarkationModelData$.subscribe(
      disembarkation => {
        if (disembarkation) {
          this.locationModel = disembarkation;
          this.locationFlag = (disembarkation.country) ? disembarkation.country.twoCharCode.toLowerCase() : null;
          this.locationFound = true;
        } else {
          this.locationFound = false;
        }
        this.locationInfo = Object.values(this.locationProperties);
      }
    );
  }

}
