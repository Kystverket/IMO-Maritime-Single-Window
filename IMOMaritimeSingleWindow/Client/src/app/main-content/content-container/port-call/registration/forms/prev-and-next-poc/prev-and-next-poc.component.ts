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

  dateSequenceError = false;
  timeSequenceError = false;

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
        } else {
          this.etdModel = null;
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
        } else {
          this.etaModel = null;
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
          this.validateDateTime();
        }
      }
    );

    this.etaComponent.getService().dateTimeData$.subscribe(
      etaResult => {
        if (etaResult) {
          const dateTime: DateTime = etaResult;
          const date: Date = new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
          this.prevAndNextPocService.setNextPortOfCallEta(date);
          this.validateDateTime();
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

  private validateDateTime() {
    if (this.etaModel && this.etdModel) {
      const etaDate = new NgbDate(this.etaModel.date.year, this.etaModel.date.month, this.etaModel.date.day);
      const etdDate = new NgbDate(this.etdModel.date.year, this.etdModel.date.month, this.etdModel.date.day);

      this.dateSequenceError = etdDate.after(etaDate);

      if (etdDate.equals(etaDate)) {
        this.timeSequenceError = this.etdModel.time.hour > this.etaModel.time.hour
          || (this.etdModel.time.hour === this.etaModel.time.hour
            && this.etdModel.time.minute >= this.etaModel.time.minute);
      } else {
        this.timeSequenceError = false;
      }
    } else {
      this.dateSequenceError = false;
      this.timeSequenceError = false;
    }
    this.persistDateTime();
  }

  private persistDateTime() {
    this.etaComponent.setDateTimeView(this.etaModel);
    this.etdComponent.setDateTimeView(this.etdModel);

    if (!this.dateSequenceError && !this.timeSequenceError && this.etaModel && this.etdModel) {

      const etdDateTime: Date = new Date(this.etdModel.date.year, this.etdModel.date.month - 1, this.etdModel.date.day, this.etdModel.time.hour, this.etdModel.time.minute);
      this.prevAndNextPocService.setPrevPortOfCallEtd(etdDateTime);
      const etaDateTime: Date = new Date(this.etaModel.date.year, this.etaModel.date.month - 1, this.etaModel.date.day, this.etaModel.time.hour, this.etaModel.time.minute);
      this.prevAndNextPocService.setNextPortOfCallEta(etaDateTime);
    } else {
      this.prevAndNextPocService.setPrevPortOfCallEtd(null);
      this.prevAndNextPocService.setNextPortOfCallEta(null);
    }
  }
}
