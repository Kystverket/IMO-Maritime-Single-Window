import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from '../../../../../shared/constants/content-names';
import { ContentService } from '../../../../../shared/services/content.service';
import { LocationService } from '../../../../../shared/services/location.service';


@Component({
  selector: 'app-view-location-info',
  templateUrl: './view-location-info.component.html',
  styleUrls: ['./view-location-info.component.css']
})
export class ViewLocationInfoComponent implements OnInit {

  locationFound: boolean = false;

  deselectLocation() {
    this.locationFound = false;
    this.locationService.setLocationData(null);
  }

  registerNewLocation() {
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
    )
  }

}

