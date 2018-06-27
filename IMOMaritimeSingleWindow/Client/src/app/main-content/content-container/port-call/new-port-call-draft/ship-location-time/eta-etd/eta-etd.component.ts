import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { DateTimePickerComponent } from 'app/shared/components/date-time-picker/date-time-picker.component';
import { PortCallService } from 'app/shared/services/port-call.service';
import { EtaEtdDateTime } from '../../../../../../shared/interfaces/eta-etd-date-time.interface';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

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
        this.etaEtdModel = {
          eta: {
            date: new NgbDate(etaEtdData.eta.year, etaEtdData.eta.month, etaEtdData.eta.day),
            time: new NgbTime(etaEtdData.eta.hour, etaEtdData.eta.minute, 0)
          },
          etd: {
            date: new NgbDate(etaEtdData.etd.year, etaEtdData.etd.month, etaEtdData.etd.day),
            time: new NgbTime(etaEtdData.etd.hour, etaEtdData.etd.minute, 0)
          }
        };
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

    if (!this.dateSequenceError && !this.timeSequenceError && this.etaEtdModel && this.etaEtdModel.eta && this.etaEtdModel.etd) {
      const etaEtdData = {
        eta: Object.assign(this.etaEtdModel.eta.date, this.etaEtdModel.eta.time),
        etd: Object.assign(this.etaEtdModel.etd.date, this.etaEtdModel.etd.time)
      };

      // const formattedDate = this.portCallService.etaEtdDataFormat()
      this.portCallService.setEtaEtdData(etaEtdData);
    } else {
      this.portCallService.setEtaEtdData(null);
    }
  }
}
