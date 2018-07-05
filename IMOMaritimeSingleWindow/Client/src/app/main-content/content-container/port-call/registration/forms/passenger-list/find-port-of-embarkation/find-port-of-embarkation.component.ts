import { Component, OnInit, Input } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { LocationModel } from 'app/shared/models/location-model';

@Component({
  selector: 'app-find-port-of-embarkation',
  templateUrl: './find-port-of-embarkation.component.html',
  styleUrls: ['./find-port-of-embarkation.component.css']
})
export class FindPortOfEmbarkationComponent implements OnInit {

  @Input() showDropDown = true;
  @Input() label: string;

  embarkationModel: LocationModel = new LocationModel();
  embarkationFound = false;
  embarkationFlag: string;
  embarkationProperties = LocationProperties.PROPERTIES;
  embarkationInfo: any[];

  constructor(
    private passengerService: PortCallPassengerListService
  ) { }

  deselectPort() {
    this.embarkationFound = false;
    this.passengerService.setPortOfEmbarkation(null);
  }

  setPort($event) {
    console.log($event);
    this.passengerService.setPortOfEmbarkation($event.item);
  }

  ngOnInit() {

    this.passengerService.embarkationModelData$.subscribe(
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
  }

}
