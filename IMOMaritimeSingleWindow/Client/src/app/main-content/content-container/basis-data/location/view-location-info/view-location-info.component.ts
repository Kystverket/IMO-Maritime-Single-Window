import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService } from 'app/shared/services/content.service';
import { LocationService } from 'app/shared/services/location.service';


@Component({
  selector: 'app-view-location-info',
  templateUrl: './view-location-info.component.html',
  styleUrls: ['./view-location-info.component.css']
})
export class ViewLocationInfoComponent implements OnInit {

  locationFound = false;

  deselectLocation() {
    this.locationFound = false;
    this.locationService.setLocationData(null);
  }

  editLocation() {
    this.contentService.setContent(CONTENT_NAMES.REGISTER_LOCATION);
  }

  registerNewLocation() {
    this.locationService.setLocationData(null);
    this.contentService.setContent(CONTENT_NAMES.REGISTER_LOCATION);
  }

  constructor(private locationService: LocationService, private contentService: ContentService) { }

  ngOnInit() {
    this.locationService.setLocationData(null);
    this.locationService.locationData$.subscribe(
      locationResult => {
        if (locationResult) {
          this.locationFound = true;
        } else {
          this.locationFound = false;
        }
      }
    );
  }

}

