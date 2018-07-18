import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationModel } from 'app/shared/models/location-model';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';

@Component({
  selector: 'app-prev-and-next-poc',
  templateUrl: './prev-and-next-poc.component.html',
  styleUrls: ['./prev-and-next-poc.component.css']
})
export class PrevAndNextPocComponent implements OnInit {

  prevLocationModel: LocationModel = null;
  nextLocationModel: LocationModel = null;

  prevLocationFound = false;
  nextLocationFound = false;

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
          this.prevLocationFound = true;
          LocationProperties.setLocationData(this.prevLocationData, this.prevLocationModel);
          const twoCharCode = this.prevLocationModel.country.twoCharCode.toLowerCase() || 'xx';
          const countryFlag = twoCharCode + '.png';
          LocationProperties.setCountry(this.prevLocationData, this.prevLocationModel.country.name, countryFlag);
        }
      }
    );

    this.prevAndNextPocService.nextPortOfCallData$.subscribe(
      data => {
        this.nextLocationModel = data;
        if (data) {
          this.nextLocationFound = true;
          LocationProperties.setLocationData(this.nextLocationData, this.nextLocationModel);
          const twoCharCode = this.nextLocationModel.country.twoCharCode.toLowerCase() || 'xx';
          const countryFlag = twoCharCode + '.png';
          LocationProperties.setCountry(this.nextLocationData, this.nextLocationModel.country.name, countryFlag);
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
          this.etdModel = {
            date: null,
            time: new NgbTime(0, 0, 0)
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
        } else {
          this.etaModel = {
            date: null,
            time: new NgbTime(0, 0, 0)
          };
        }
      }
    );
  }

  onPrevLocationResult(prevLocationResult) {
    if (prevLocationResult) {
      this.prevAndNextPocService.setPrevPortOfCall(prevLocationResult);
    }
  }

  onNextLocationResult(nextLocationResult) {
    if (nextLocationResult) {
      this.prevAndNextPocService.setNextPortOfCall(nextLocationResult);
    }
  }

  deselectPrevLocation() {
    this.prevLocationFound = false;
    this.prevAndNextPocService.setPrevPortOfCall(null);
  }

  deselectNextLocation() {
    this.nextLocationFound = false;
    this.prevAndNextPocService.setNextPortOfCall(null);
  }

  onEtdResult(etdResult) {
    if (etdResult) {
      const dateTime: DateTime = etdResult;
      const date: Date = new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
      this.prevAndNextPocService.setPrevPortOfCallEtd(date);
      this.validateDateTime();
    }
  }

  onEtaResult(etaResult) {
    if (etaResult) {
      const dateTime: DateTime = etaResult;
      const date: Date = new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
      this.prevAndNextPocService.setNextPortOfCallEta(date);
      this.validateDateTime();
    }
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
    if (!this.dateSequenceError && !this.timeSequenceError) {
      if (this.etdModel) {
        const etdDateTime: Date = new Date(this.etdModel.date.year, this.etdModel.date.month - 1, this.etdModel.date.day, this.etdModel.time.hour, this.etdModel.time.minute);
        this.prevAndNextPocService.setPrevPortOfCallEtd(etdDateTime);
      } else {
        const etdDateTime: DateTime = {
          date: null,
          time: new NgbTime(0, 0, 0)
        };
        this.prevAndNextPocService.setPrevPortOfCallEtd(null);
      }
      if (this.etaModel) {
        const etaDateTime: Date = new Date(this.etaModel.date.year, this.etaModel.date.month - 1, this.etaModel.date.day, this.etaModel.time.hour, this.etaModel.time.minute);
        this.prevAndNextPocService.setNextPortOfCallEta(etaDateTime);
      } else {
        const etaDateTime: DateTime = {
          date: null,
          time: new NgbTime(0, 0, 0)
        };
        this.prevAndNextPocService.setNextPortOfCallEta(null);
      }
    }
  }
}
