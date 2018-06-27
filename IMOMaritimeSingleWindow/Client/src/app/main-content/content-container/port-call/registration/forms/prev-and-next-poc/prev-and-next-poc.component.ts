import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SearchLocationComponent } from 'app/shared/components/search-location/search-location.component';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { LocationModel } from 'app/shared/models/location-model';

@Component({
  selector: 'app-prev-and-next-poc',
  templateUrl: './prev-and-next-poc.component.html',
  styleUrls: ['./prev-and-next-poc.component.css']
})
export class PrevAndNextPocComponent implements OnInit, AfterViewInit {
  @ViewChildren(SearchLocationComponent) searchLocationComponentList: QueryList<SearchLocationComponent>;

  prevPortOfCallComponent: SearchLocationComponent;
  nextPortOfCallComponent: SearchLocationComponent;

  prevLocationModel: LocationModel;
  nextLocationModel: LocationModel;

  prevLocationData = new LocationProperties().getPropertyList();
  nextLocationData = new LocationProperties().getPropertyList();

  constructor() { }

  ngOnInit() {
    this.prevLocationData[0].data = 'test';

    console.log(this.prevLocationData);
    console.log(this.nextLocationData);

  }

  ngAfterViewInit() {

    this.prevPortOfCallComponent = this.searchLocationComponentList.first;
    this.nextPortOfCallComponent = this.searchLocationComponentList.last;

    this.prevPortOfCallComponent.getService().locationData$.subscribe(
      locationResult => {
        if (locationResult) {
          this.prevLocationModel = locationResult;
          const twoCharCode = this.prevLocationModel.country.twoCharCode.toLowerCase() || 'xx';
          const countryFlagUrl = [LocationProperties.FLAGS_FOLDER, twoCharCode].join('/') + '.png';
          this.prevLocationData.find(e => e.description === LocationProperties.COUNTRY).imageUrl = countryFlagUrl;
          this.prevLocationData.find(e => e.description === LocationProperties.COUNTRY).data = this.prevLocationModel.country.name;
          this.prevLocationData.find(e => e.description === LocationProperties.LOCATION_NAME).data = this.prevLocationModel.name;
          this.prevLocationData.find(e => e.description === LocationProperties.LOCATION_CODE).data = this.prevLocationModel.locationCode;
          this.prevLocationData.find(e => e.description === LocationProperties.LOCATION_TYPE).data = this.prevLocationModel.locationType.name;
        }
      }
    );

    this.nextPortOfCallComponent.getService().locationData$.subscribe(
      locationResult => {
        if (locationResult) {
          this.nextLocationModel = locationResult;
          const twoCharCode = this.nextLocationModel.country.twoCharCode.toLowerCase() || 'xx';
          const countryFlagUrl = [LocationProperties.FLAGS_FOLDER, twoCharCode].join('/') + '.png';
          this.nextLocationData.find(e => e.description === LocationProperties.COUNTRY).imageUrl = countryFlagUrl;
          this.nextLocationData.find(e => e.description === LocationProperties.COUNTRY).data = this.nextLocationModel.country.name;
          this.nextLocationData.find(e => e.description === LocationProperties.LOCATION_NAME).data = this.nextLocationModel.name;
          this.nextLocationData.find(e => e.description === LocationProperties.LOCATION_CODE).data = this.nextLocationModel.locationCode;
          this.nextLocationData.find(e => e.description === LocationProperties.LOCATION_TYPE).data = this.nextLocationModel.locationType.name;
        }
      }
    );
  }

  deselectPrevLocation() {
    this.prevLocationModel = null;
    this.prevPortOfCallComponent.deselectLocation();
  }

  deselectNextLocation() {
    this.nextLocationModel = null;
    this.nextPortOfCallComponent.deselectLocation();
  }
}
