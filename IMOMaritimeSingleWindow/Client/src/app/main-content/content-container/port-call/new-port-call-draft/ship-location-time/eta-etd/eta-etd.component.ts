import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { DateTimePickerComponent } from 'app/shared/components/date-time-picker/date-time-picker.component';
import { PortCallService } from 'app/shared/services/port-call.service';
import { EtaEtdDateTime } from './eta-etd-date-time.interface';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

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
export class EtaEtdComponent implements AfterViewInit {

  @ViewChildren(DateTimePickerComponent) dateTimePickerComponentList: QueryList<DateTimePickerComponent>;

  etaPickerComponent: DateTimePickerComponent;
  etdPickerComponent: DateTimePickerComponent;

  etaEtdModel: EtaEtdDateTime = {
    eta: null,
    etd: null
  };

  etaDateModel: NgbDateStruct;
  etdDateModel: NgbDateStruct;

  etaTimeModel: NgbTimeStruct;
  etdTimeModel: NgbTimeStruct;

  dateSequenceError = false;
  timeSequenceError = false;

  constructor(private portCallService: PortCallService) {}

  ngAfterViewInit() {
    this.etaPickerComponent = this.dateTimePickerComponentList.first;
    this.etdPickerComponent = this.dateTimePickerComponentList.last;

    this.etaPickerComponent.getService().dateTimeData$.subscribe(
      data => {
        this.etaEtdModel.eta = data;
        this.validateData();
      }
    );

    this.etdPickerComponent.getService().dateTimeData$.subscribe(
      data => {
        this.etaEtdModel.etd = data;
        this.validateData();
      }
    );

    this.portCallService.etaEtdData$.subscribe(etaEtdData => {
      if (etaEtdData != null) {
        this.etaEtdModel = etaEtdData;
      }
    });
  }

  private validateData() {
    if (this.etaEtdModel.eta && this.etaEtdModel.etd) {
      const etaDate = new NgbDate(this.etaEtdModel.eta.date.year, this.etaEtdModel.eta.date.month, this.etaEtdModel.eta.date.day);
      const etdDate = new NgbDate(this.etaEtdModel.etd.date.year, this.etaEtdModel.etd.date.month, this.etaEtdModel.etd.date.day);

      this.dateSequenceError = etdDate.before(etaDate);

      if (etdDate.equals(etaDate)) {
        this.timeSequenceError = this.etaEtdModel.eta.time.hour > this.etaEtdModel.etd.time.hour
          || (this.etaEtdModel.eta.time.hour === this.etaEtdModel.etd.time.hour
          && this.etaEtdModel.eta.time.minute >= this.etaEtdModel.etd.time.minute);
      } else {
        this.timeSequenceError = false;
      }
    } else {
      this.dateSequenceError = false;
      this.timeSequenceError = false;
    }
    this.persistData();
  }

  private persistData() {

    if (!this.dateSequenceError && !this.timeSequenceError) {
      this.portCallService.setEtaEtdData(this.etaEtdModel);
    } else {
      this.portCallService.setEtaEtdData(null);
    }
  }
}
