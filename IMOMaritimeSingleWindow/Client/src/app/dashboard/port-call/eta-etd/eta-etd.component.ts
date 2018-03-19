import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { getLocaleDateFormat } from '@angular/common';
import { EtaEtdDateTime } from './eta-etd-date-time.interface';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;


@Component({
  selector: 'app-eta-etd',
  templateUrl: './eta-etd.component.html',
  styleUrls: ['./eta-etd.component.css']
})
export class EtaEtdComponent implements OnInit {

  etaEtdModel: EtaEtdDateTime = {
    eta: { year: null, month: null, day: null, hour: null, minute: null },
    etd: { year: null, month: null, day: null, hour: null, minute: null }
  };

  etaDateModel: NgbDateStruct;
  etdDateModel: NgbDateStruct;

  etaTimeModel: NgbTimeStruct;
  etdTimeModel: NgbTimeStruct;

  validEtaDateFormat: boolean = true;
  validEtdDateFormat: boolean = true;
  dateSequenceError: boolean = false;
  timeSequenceError: boolean = false;

  etaDateChanged($event): void {
    this.validateSequence();
    if ($event != null) {
      if (this.validFormat($event)) {
        this.validEtaDateFormat = true;
        this.etaEtdModel.eta.year = $event.year;
        this.etaEtdModel.eta.month = $event.month;
        this.etaEtdModel.eta.day = $event.day;
        return;
      } else {
        this.validEtaDateFormat = false;
      }
    } else {
      this.validEtaDateFormat = true;
    }
    this.etaEtdModel.eta.year = null;
    this.etaEtdModel.eta.month = null;
    this.etaEtdModel.eta.day = null;
  }

  etdDateChanged($event): void {
    this.validateSequence();
    if ($event != null) {
      if (this.validFormat($event)) {
        this.validEtdDateFormat = true;
        this.etaEtdModel.etd.year = $event.year;
        this.etaEtdModel.etd.month = $event.month;
        this.etaEtdModel.etd.day = $event.day;
        return;
      } else {
        this.validEtdDateFormat = false;
      }
    } else {
      this.validEtdDateFormat = true;
    }
    this.etaEtdModel.etd.year = null;
    this.etaEtdModel.etd.month = null;
    this.etaEtdModel.etd.day = null;
  }

  validFormat(model): boolean {
    return typeof model != "string";
  }

  validateSequence(): void {
    this.dateSequenceError = after(this.etaDateModel, this.etdDateModel);
    if (equals(this.etaDateModel, this.etdDateModel)) {
      if (this.etaTimeModel != null && this.etdTimeModel != null) {
        this.timeSequenceError = (this.etaTimeModel.hour > this.etdTimeModel.hour)
          || ((this.etaTimeModel.hour == this.etdTimeModel.hour) && (this.etaTimeModel.minute >= this.etdTimeModel.minute));
      }
    } else {
      this.timeSequenceError = false;
    }
  }

  etaTimeChanged($event): void {
    this.validateSequence();
    if ($event != null) {
      this.etaEtdModel.eta.hour = $event.hour;
      this.etaEtdModel.eta.minute = $event.minute;
    } else {
      this.etaEtdModel.eta.hour = null;
      this.etaEtdModel.eta.minute = null;
    }
  }

  etdTimeChanged($event): void {
    this.validateSequence();
    if ($event != null) {
      this.etaEtdModel.etd.hour = $event.hour;
      this.etaEtdModel.etd.minute = $event.minute;
    } else {
      this.etaEtdModel.etd.hour = null;
      this.etaEtdModel.etd.minute = null;
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
