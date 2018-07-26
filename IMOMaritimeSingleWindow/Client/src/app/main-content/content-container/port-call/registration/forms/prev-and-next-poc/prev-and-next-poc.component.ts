import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { LocationProperties } from 'app/shared/constants/location-properties';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { LocationModel } from 'app/shared/models/location-model';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';
import { Subscription } from 'rxjs/Subscription';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-prev-and-next-poc',
  templateUrl: './prev-and-next-poc.component.html',
  styleUrls: ['./prev-and-next-poc.component.css']
})
export class PrevAndNextPocComponent implements OnInit, OnDestroy {

  prevLocationModel: LocationModel = null;
  nextLocationModel: LocationModel = null;

  prevLocationFound = false;
  nextLocationFound = false;

  prevEtdModel: DateTime;
  nextEtaModel: DateTime;

  currentEtaModel: DateTime;
  currentEtdModel: DateTime;

  prevEtdIsAfterCurrentEtaError = false;
  nextEtaIsBeforeCurrentEtdError = false;

  prevLocationData = new LocationProperties().getPropertyList();
  nextLocationData = new LocationProperties().getPropertyList();

  prevPortOfCallDataSubscription: Subscription;
  nextPortOfCallDataSubscription: Subscription;
  prevPortOfCallEtdDataSubscription: Subscription;
  nextPortOfCallEtaDataSubscription: Subscription;
  currentPortOfCallEtaEtdSubscription: Subscription;

  constructor(private prevAndNextPocService: PrevAndNextPocService, private portCallService: PortCallService) { }

  ngOnInit() {
    this.prevPortOfCallDataSubscription = this.prevAndNextPocService.prevPortOfCallData$.subscribe(
      data => {
        this.prevLocationModel = data;
        if (data) {
          console.log(data);
          this.prevLocationFound = true;
          LocationProperties.setLocationData(this.prevLocationData, this.prevLocationModel);
          if (this.prevLocationModel.country != null) {
            const twoCharCode = this.prevLocationModel.country.twoCharCode.toLowerCase() || 'xx';
            const countryFlag = twoCharCode + '.png';
            LocationProperties.setCountry(this.prevLocationData, this.prevLocationModel.country.name, countryFlag);
          }
        }
      }
    );

    this.nextPortOfCallDataSubscription = this.prevAndNextPocService.nextPortOfCallData$.subscribe(
      data => {
        this.nextLocationModel = data;
        if (data) {
          this.nextLocationFound = true;
          LocationProperties.setLocationData(this.nextLocationData, this.nextLocationModel);
          if (this.nextLocationModel.country != null) {
            const twoCharCode = this.nextLocationModel.country.twoCharCode.toLowerCase() || 'xx';
            const countryFlag = twoCharCode + '.png';
            LocationProperties.setCountry(this.nextLocationData, this.nextLocationModel.country.name, countryFlag);
          }
        }
      }
    );

    this.prevPortOfCallEtdDataSubscription = this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(
      data => {
        if (data) {
          const dateTime = new Date(data);
          this.prevEtdModel = {
            date: new NgbDate(dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
            time: new NgbTime(dateTime.getHours(), dateTime.getMinutes(), 0)
          };
        } else {
          this.prevEtdModel = {
            date: null,
            time: new NgbTime(0, 0, 0)
          };
        }
      }
    );

    this.nextPortOfCallEtaDataSubscription = this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(
      data => {
        if (data) {
          const dateTime = new Date(data);
          this.nextEtaModel = {
            date: new NgbDate(dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
            time: new NgbTime(dateTime.getHours(), dateTime.getMinutes(), 0)
          };
        } else {
          this.nextEtaModel = {
            date: null,
            time: new NgbTime(0, 0, 0)
          };
        }
      }
    );

    this.currentPortOfCallEtaEtdSubscription = this.portCallService.etaEtdData$.subscribe(
      etaEtdData => {
        if (etaEtdData) {
          this.currentEtaModel = {
            date: new NgbDate(etaEtdData.eta.year, etaEtdData.eta.month, etaEtdData.eta.day),
            time: new NgbTime(etaEtdData.eta.hour, etaEtdData.eta.minute, 0)
          };
          this.currentEtdModel = {
            date: new NgbDate(etaEtdData.etd.year, etaEtdData.etd.month, etaEtdData.etd.day),
            time: new NgbTime(etaEtdData.etd.hour, etaEtdData.etd.minute, 0)
          };
        }
      }
    );
  }

  ngOnDestroy() {
    this.prevPortOfCallDataSubscription.unsubscribe();
    this.nextPortOfCallDataSubscription.unsubscribe();
    this.prevPortOfCallEtdDataSubscription.unsubscribe();
    this.nextPortOfCallEtaDataSubscription.unsubscribe();
    this.currentPortOfCallEtaEtdSubscription.unsubscribe();
  }

  onPrevLocationResult(prevLocationResult) {
    this.prevAndNextPocService.setPrevPortOfCall(prevLocationResult);
  }

  onNextLocationResult(nextLocationResult) {
    this.prevAndNextPocService.setNextPortOfCall(nextLocationResult);
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
    } else {
      this.prevAndNextPocService.setPrevPortOfCallEtd(null);
    }
    this.validateDateTime();
  }

  onEtaResult(etaResult) {
    if (etaResult) {
      const dateTime: DateTime = etaResult;
      const date: Date = new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
      this.prevAndNextPocService.setNextPortOfCallEta(date);
    } else {
      this.prevAndNextPocService.setNextPortOfCallEta(null);
    }
    this.validateDateTime();
  }

  private validateDateTime() {
    const prevEtdDate = this.prevEtdModel.date != null ? new NgbDate(this.prevEtdModel.date.year, this.prevEtdModel.date.month, this.prevEtdModel.date.day) : null;
    const nextEtaDate = this.nextEtaModel.date != null ? new NgbDate(this.nextEtaModel.date.year, this.nextEtaModel.date.month, this.nextEtaModel.date.day) : null;

    // Checking for sequence errors between prev and current port of call
    if (prevEtdDate && this.currentEtaModel) {
      this.prevEtdIsAfterCurrentEtaError = prevEtdDate.after(this.currentEtaModel.date);
      if (prevEtdDate.equals(this.currentEtaModel.date)) {
        this.prevEtdIsAfterCurrentEtaError = this.prevEtdModel.time.hour > this.currentEtaModel.time.hour
          || (this.prevEtdModel.time.hour === this.currentEtaModel.time.hour
            && this.prevEtdModel.time.minute >= this.currentEtaModel.time.minute);
      }
    } else {
      this.prevEtdIsAfterCurrentEtaError = false;
    }

    // Checking for sequence errors between next and current port of call
    if (nextEtaDate && this.currentEtdModel) {
      this.nextEtaIsBeforeCurrentEtdError = nextEtaDate.before(this.currentEtdModel.date);
      if (nextEtaDate.equals(this.currentEtdModel.date)) {
        this.nextEtaIsBeforeCurrentEtdError = this.nextEtaModel.time.hour < this.currentEtdModel.time.hour
          || (this.nextEtaModel.time.hour === this.currentEtdModel.time.hour
            && this.nextEtaModel.time.minute <= this.currentEtdModel.time.minute);
      }
    } else {
      this.nextEtaIsBeforeCurrentEtdError = false;
    }
    this.prevAndNextPocService.setPrevAndNextPortOfCallMeta({valid: !(this.prevEtdIsAfterCurrentEtaError || this.nextEtaIsBeforeCurrentEtdError)});
    this.persistDateTime();
  }

  private persistDateTime() {
    if (!this.prevEtdIsAfterCurrentEtaError && !this.nextEtaIsBeforeCurrentEtdError) {
      if (this.prevEtdModel.date) {
        const etdDateTime: Date = new Date(this.prevEtdModel.date.year, this.prevEtdModel.date.month - 1, this.prevEtdModel.date.day, this.prevEtdModel.time.hour, this.prevEtdModel.time.minute);
        this.prevAndNextPocService.setPrevPortOfCallEtd(etdDateTime);
      } else {
        const etdDateTime: DateTime = {
          date: null,
          time: new NgbTime(0, 0, 0)
        };
        this.prevAndNextPocService.setPrevPortOfCallEtd(null);
      }
      if (this.nextEtaModel.date) {
        const etaDateTime: Date = new Date(this.nextEtaModel.date.year, this.nextEtaModel.date.month - 1, this.nextEtaModel.date.day, this.nextEtaModel.time.hour, this.nextEtaModel.time.minute);
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
