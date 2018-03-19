import { Component, OnInit } from '@angular/core';
import { DateTime } from './date-time.interface';
import { NgbDateStruct, NgbCalendar, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { getLocaleDateFormat } from '@angular/common';

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

  etaModel: DateTime = { year: null, month: null, day: null, hour: null, minute: null };
  etdModel: DateTime = { year: null, month: null, day: null, hour: null, minute: null };

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
        this.etaModel.year = $event.year;
        this.etaModel.month = $event.month;
        this.etaModel.day = $event.day;
        return;
      } else {
        this.validEtaDateFormat = false;
      }
    } else {
      this.validEtaDateFormat = true;
    }
    this.etaModel.year = null;
    this.etaModel.month = null;
    this.etaModel.day = null;
  }

  etdDateChanged($event): void {
    this.validateSequence();
    if ($event != null) {
      if (this.validFormat($event)) {
        this.validEtdDateFormat = true;
        this.etdModel.year = $event.year;
        this.etdModel.month = $event.month;
        this.etdModel.day = $event.day;
        return;
      } else {
        this.validEtdDateFormat = false;
      }
    } else {
      this.validEtdDateFormat = true;
    }
    this.etdModel.year = null;
    this.etdModel.month = null;
    this.etdModel.day = null;
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
      this.etaModel.hour = $event.hour;
      this.etaModel.minute = $event.minute;
    } else {
      this.etaModel.hour = null;
      this.etaModel.minute = null;
    }
  }

  etdTimeChanged($event): void {
    this.validateSequence();
    if ($event != null) {
      this.etdModel.hour = $event.hour;
      this.etdModel.minute = $event.minute;
    } else {
      this.etdModel.hour = null;
      this.etdModel.minute = null;
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
