import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SearchLocationComponent } from 'app/shared/components/search-location/search-location.component';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { LocationModel } from 'app/shared/models/location-model';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';

@Component({
  selector: 'app-prev-and-next-poc',
  templateUrl: './prev-and-next-poc.component.html',
  styleUrls: ['./prev-and-next-poc.component.css']
})
export class PrevAndNextPocComponent implements OnInit, AfterViewInit {
  @ViewChildren(SearchLocationComponent) searchLocationComponentList: QueryList<SearchLocationComponent>;

  prevPortOfCallComponent: SearchLocationComponent;
  nextPortOfCallComponent: SearchLocationComponent;

  prevLocationModel: LocationModel = null;
  nextLocationModel: LocationModel = null;

  prevLocationData = new LocationProperties().getPropertyList();
  nextLocationData = new LocationProperties().getPropertyList();

  constructor(private prevAndNextPocService: PrevAndNextPocService) { }

  ngOnInit() {
    this.prevAndNextPocService.prevPortOfCallData$.subscribe(
      data => {
        this.prevLocationModel = data;
        if (data) {
          const twoCharCode = this.prevLocationModel.country.twoCharCode.toLowerCase() || 'xx';
          const countryFlag = twoCharCode + '.png';
          LocationProperties.setCountry(this.prevLocationData, this.prevLocationModel.country.name, countryFlag);
          LocationProperties.setLocationName(this.prevLocationData, this.prevLocationModel.name);
          LocationProperties.setLocationCode(this.prevLocationData, this.prevLocationModel.locationCode);
          LocationProperties.setLocationType(this.prevLocationData, this.prevLocationModel.locationType.name);
        }
      }
    );

    this.prevAndNextPocService.nextPortOfCallData$.subscribe(
      data => {
        this.nextLocationModel = data;
        if (data) {
          const twoCharCode = this.nextLocationModel.country.twoCharCode.toLowerCase() || 'xx';
          const countryFlag = twoCharCode + '.png';
          LocationProperties.setCountry(this.nextLocationData, this.nextLocationModel.country.name, countryFlag);
          LocationProperties.setLocationName(this.nextLocationData, this.nextLocationModel.name);
          LocationProperties.setLocationCode(this.nextLocationData, this.nextLocationModel.locationCode);
          LocationProperties.setLocationType(this.nextLocationData, this.nextLocationModel.locationType.name);
        }
      }
    );
  }

  ngAfterViewInit() {
    this.prevPortOfCallComponent = this.searchLocationComponentList.first;
    this.nextPortOfCallComponent = this.searchLocationComponentList.last;

    this.prevPortOfCallComponent.getService().locationData$.subscribe(
      locationResult => {
        if (locationResult) {
          this.prevAndNextPocService.setPrevPortOfCall(locationResult);
        }
      }
    );

    this.nextPortOfCallComponent.getService().locationData$.subscribe(
      locationResult => {
        if (locationResult) {
          this.prevAndNextPocService.setNextPortOfCall(locationResult);
        }
      }
    );

  }

  deselectPrevLocation() {
    this.prevAndNextPocService.setPrevPortOfCall(null);
    this.prevPortOfCallComponent.getService().clearLocationSearch();
  }

  deselectNextLocation() {
    this.prevAndNextPocService.setNextPortOfCall(null);
    this.nextPortOfCallComponent.getService().clearLocationSearch();
  }
}
