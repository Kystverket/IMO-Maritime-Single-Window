import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../../../../shared/models/location-model';
import { LocationService } from '../../../../../shared/services/location.service';
import { ContentService } from '../../../../../shared/services/content.service';
import { Observable } from 'rxjs/Observable';

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

  countryList: any[]
  countrySelected: boolean = false;
  selectedCountry: any;
  countrySearchFailed: boolean = false;



  constructor(public locationModel: LocationModel, private locationService: LocationService, private contentService: ContentService) { }

  ngOnInit() {
    this.locationService.getLocationTypes().subscribe(
      results => {
        this.locationTypeList = results;
      },
      error => {
        console.log(error);
      }
    );
    this.locationService.getCountries().subscribe(
      results => {
        this.countryList = results;
      },
      error => {
        console.log(error);
      }
    )
  }

  countrySearch = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .do(() => {
        this.countrySearchFailed = false;
      })
      .map(term => term.length < 2 ? []
        : this.countryList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
      .do((text$) => {
        if (text$.length == 0) {
          this.countrySearchFailed = true;
        }
      });
    formatter = (x: {name: string}) => x.name;

  selectCountry($event) {
    this.selectedCountry = $event.item;
    this.locationModel.countryId = $event.item.countryId;
    this.countrySelected = true;
  }
  deselectCountry() {
    this.selectedCountry = null;
    this.locationModel.countryId = null;
    this.selectedCountry = null;
    this.countrySelected = false;
  }

  selectLocationType(locationType: any) {
    this.locationModel.locationTypeId = locationType.locationTypeId;
    this.selectedLocationType = locationType;
    this.locationTypeDropdownString = locationType.name;
    this.locationTypeSelected = true;
  }

  registerLocation() {
    this.locationService.registerLocation(this.locationModel);
    this.contentService.setContent("Port Call");
  }

}
