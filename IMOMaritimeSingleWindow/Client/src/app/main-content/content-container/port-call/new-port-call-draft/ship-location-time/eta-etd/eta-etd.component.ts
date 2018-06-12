import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { PortCallService } from 'app/shared/services/port-call.service';
import { EtaEtdDateTime } from './eta-etd-date-time.interface';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one &&
  two &&
  two.year === one.year &&
  two.month === one.month &&
  two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day
          ? false
          : one.day < two.day
        : one.month < two.month
      : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two
    ? false
    : one.year === two.year
      ? one.month === two.month
        ? one.day === two.day
          ? false
          : one.day > two.day
        : one.month > two.month
      : one.year > two.year;

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

  validEtaDateFormat = true;
  validEtdDateFormat = true;
  dateSequenceError = false;
  timeSequenceError = false;

  constructor(private portCallService: PortCallService) {}

  etaDateChanged($event): void {
    this.updateDateModel(this.etaEtdModel.eta, $event, 'eta');
  }

  etdDateChanged($event): void {
    this.updateDateModel(this.etaEtdModel.etd, $event, 'etd');
  }

  private updateDateModel(model, $event, dateType: string): void {
    if ($event != null) {
      if (this.hasValidDateFormat($event)) {
        this.updateValidDate(dateType, true);
        model.year = $event.year;
        model.month = $event.month;
        model.day = $event.day;
        this.validateData();
        return;
      } else {
        this.updateValidDate(dateType, false);
      }
    } else {
      this.updateValidDate(dateType, true);
    }
    model.year = null;
    model.month = null;
    model.day = null;
    this.validateData();
  }

  private updateValidDate(dateType: string, valid: boolean) {
    if (dateType === 'eta') {
      this.validEtaDateFormat = valid;
    } else if (dateType === 'etd') {
      this.validEtdDateFormat = valid;
    }
  }

  private hasValidDateFormat(model): boolean {
    return typeof model !== 'string';
  }

  private validateData(): void {
    if (
      this.etaDateModel != null &&
      this.etaDateModel.year != null &&
      (this.etdDateModel != null && this.etdDateModel.year != null)
    ) {
      this.dateSequenceError = after(this.etaDateModel, this.etdDateModel);
      if (equals(this.etaDateModel, this.etdDateModel)) {
        if (
          this.etaTimeModel != null &&
          this.etaTimeModel.hour != null &&
          (this.etdTimeModel != null && this.etdTimeModel.hour != null)
        ) {
          this.timeSequenceError =
            this.etaTimeModel.hour > this.etdTimeModel.hour ||
            (this.etaTimeModel.hour === this.etdTimeModel.hour &&
              this.etaTimeModel.minute >= this.etdTimeModel.minute);
        } else {
          this.timeSequenceError = false;
        }
      } else {
        this.timeSequenceError = false;
      }
    } else {
      this.dateSequenceError = false;
      this.timeSequenceError = false;
    }

    if (
      !this.dateSequenceError &&
      !this.timeSequenceError &&
      this.hasRequiredData(this.etaEtdModel)
    ) {
      this.portCallService.setEtaEtdData(this.etaEtdModel);
    } else {
      this.portCallService.setEtaEtdData(null);
    }
  }

  private hasRequiredData(model: EtaEtdDateTime): boolean {
    return (
      model.eta.year != null &&
      model.eta.hour != null &&
      model.etd.year != null &&
      model.etd.hour != null
    );
  }

  etaTimeChanged($event): void {
    this.updateTimeModel(this.etaEtdModel.eta, $event);
  }

  etdTimeChanged($event): void {
    this.updateTimeModel(this.etaEtdModel.etd, $event);
  }

  private updateTimeModel(model, $event): void {
    if ($event != null) {
      model.hour = $event.hour;
      model.minute = $event.minute;
    } else {
      model.hour = null;
      model.minute = null;
    }
    this.validateData();
  }

  ngOnInit() {
    this.portCallService.etaEtdData$.subscribe(etaEtdData => {
      if (etaEtdData != null) {
        this.etaEtdModel = etaEtdData;
      }
    });

    if (this.etaEtdModel != null) {
      this.etaDateModel = {
        year: this.etaEtdModel.eta.year,
        month: this.etaEtdModel.eta.month,
        day: this.etaEtdModel.eta.day
      };
      this.etaTimeModel = {
        hour: this.etaEtdModel.eta.hour,
        minute: this.etaEtdModel.eta.minute,
        second: 0
      };

      this.etdDateModel = {
        year: this.etaEtdModel.etd.year,
        month: this.etaEtdModel.etd.month,
        day: this.etaEtdModel.etd.day
      };
      this.etdTimeModel = {
        hour: this.etaEtdModel.etd.hour,
        minute: this.etaEtdModel.etd.minute,
        second: 0
      };
    }
  }
}
