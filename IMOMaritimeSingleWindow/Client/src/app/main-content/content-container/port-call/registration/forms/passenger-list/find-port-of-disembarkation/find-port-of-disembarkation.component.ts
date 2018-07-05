import { Component, OnInit, Input } from '@angular/core';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { LocationModel } from 'app/shared/models/location-model';

@Component({
  selector: 'app-find-port-of-disembarkation',
  templateUrl: './find-port-of-disembarkation.component.html',
  styleUrls: ['./find-port-of-disembarkation.component.css']
})
export class FindPortOfDisembarkationComponent implements OnInit {

  @Input() showDropDown = true;
  @Input() label: string;
  disembarkationModel: LocationModel = new LocationModel();
  disembarkationFound = false;
  disembarkationFlag: string;
  disembarkationProperties = LocationProperties.PROPERTIES;
  disembarkationInfo: any[];

  constructor(
    private passengerService: PortCallPassengerListService
  ) { }

  deselectPort() {
    this.disembarkationFound = false;
    this.passengerService.setPortOfDisembarkation(null);
  }

  setPort($event) {
    this.passengerService.setPortOfDisembarkation($event.item);
  }

  ngOnInit() {

    this.passengerService.disembarkationModelData$.subscribe(
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
