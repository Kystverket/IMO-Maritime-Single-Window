import { AfterViewInit, Component, OnInit, QueryList, ViewChildren, AfterViewChecked } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { DateTimePickerComponent } from 'app/shared/components/date-time-picker/date-time-picker.component';
import { SearchLocationComponent } from 'app/shared/components/search-location/search-location.component';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationModel } from 'app/shared/models/location-model';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';

@Component({
  selector: 'app-prev-and-next-poc',
  templateUrl: './prev-and-next-poc.component.html',
  styleUrls: ['./prev-and-next-poc.component.css']
})
export class PrevAndNextPocComponent implements OnInit, AfterViewInit {
  @ViewChildren(SearchLocationComponent) searchLocationComponentList: QueryList<SearchLocationComponent>;
  @ViewChildren(DateTimePickerComponent) dateTimePickerComponentList: QueryList<DateTimePickerComponent>;

  prevPortOfCallComponent: SearchLocationComponent;
  nextPortOfCallComponent: SearchLocationComponent;

  etdComponent: DateTimePickerComponent;
  etaComponent: DateTimePickerComponent;

  prevLocationModel: LocationModel = null;
  nextLocationModel: LocationModel = null;

  etdModel: DateTime;
  etaModel: DateTime;

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

    this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(
      data => {
        if (data) {
          this.etdModel = {
            date: new NgbDate(data.getFullYear(), data.getMonth() + 1, data.getDate()),
            time: new NgbTime(data.getHours(), data.getMinutes(), 0)
          };
        }
      }
    );

    this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(
      data => {
        if (data) {
          this.etaModel = {
            date: new NgbDate(data.getFullYear(), data.getMonth() + 1, data.getDate()),
            time: new NgbTime(data.getHours(), data.getMinutes(), 0)
          };
        }
      }
    );
  }

  ngAfterViewInit() {
    this.prevPortOfCallComponent = this.searchLocationComponentList.first;
    this.nextPortOfCallComponent = this.searchLocationComponentList.last;

    this.etdComponent = this.dateTimePickerComponentList.first;
    this.etaComponent = this.dateTimePickerComponentList.last;

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

    this.etdComponent.getService().dateTimeData$.subscribe(
      etdResult => {
        if (etdResult) {
          const dateTime: DateTime = etdResult;
          const date: Date = new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
          this.prevAndNextPocService.setPrevPortOfCallEtd(date);
        }
      }
    );

    this.etaComponent.getService().dateTimeData$.subscribe(
      etaResult => {
        if (etaResult) {
          const dateTime: DateTime = etaResult;
          const date: Date = new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
          this.prevAndNextPocService.setNextPortOfCallEta(date);
        }
      }
    );

    setTimeout(() => {
      if (this.etdModel) {
        this.etdComponent.setDateTimeView(this.etdModel);
      }
    });

    setTimeout(() => {
      if (this.etaModel) {
        this.etaComponent.setDateTimeView(this.etaModel);
      }
    });
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
