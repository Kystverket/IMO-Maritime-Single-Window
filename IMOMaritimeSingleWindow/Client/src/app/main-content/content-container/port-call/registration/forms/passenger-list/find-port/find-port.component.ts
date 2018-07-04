import { Component, OnInit, Input } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { LocationService } from 'app/shared/services/location.service';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { LocationModel } from 'app/shared/models/location-model';

@Component({
  selector: 'app-find-port',
  templateUrl: './find-port.component.html',
  styleUrls: ['./find-port.component.css'],
  providers: [LocationService]
})
export class FindPortComponent implements OnInit {

  @Input() showDropDown = true;
  @Input() label: string;
  @Input() component: string;

  embarkationModel: LocationModel = new LocationModel();
  embarkationFound = false;
  embarkationFlag: string;
  embarkationProperties = LocationProperties.PROPERTIES;
  embarkationInfo: any[];

  disembarkationModel: LocationModel = new LocationModel();
  disembarkationFound = false;
  disembarkationFlag: string;
  disembarkationProperties = LocationProperties.PROPERTIES;
  disembarkationInfo: any[];

  constructor(
    private passengerListService: PortCallPassengerListService
  ) { }

  deselectPortOfEmbarkation() {
    this.embarkationFound = false;
    this.passengerListService.setPortOfEmbarkation(null);
  }

  deselectPortOfDisembarkation() {
    this.disembarkationFound = false;
    this.passengerListService.setPortOfDisembarkation(null);
  }

  ngOnInit() {

    this.passengerListService.embarkationModelData$.subscribe(
      embarkation => {

        if (embarkation) {
          this.embarkationModel = embarkation;
          this.embarkationFlag = (embarkation.country) ? embarkation.country.twoCharCode.toLowerCase() : null;
          this.embarkationFound = true;
        } else {
          this.embarkationFound = false;
        }
        this.embarkationInfo = Object.values(this.embarkationProperties);
      }
    );

    this.passengerListService.disembarkationModelData$.subscribe(
      disembarkation => {

        if (disembarkation) {
          this.disembarkationModel = disembarkation;
          this.disembarkationFlag = (disembarkation.country) ? disembarkation.country.twoCharCode.toLowerCase() : null;
          this.disembarkationFound = true;
        } else {
          this.disembarkationFound = false;
        }
        this.disembarkationInfo = Object.values(this.disembarkationProperties);
      }
    );
  }

}
