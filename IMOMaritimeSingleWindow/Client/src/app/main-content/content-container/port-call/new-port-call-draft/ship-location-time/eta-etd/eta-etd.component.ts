import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { EtaEtdDateTime } from 'app/shared/interfaces/eta-etd-date-time.interface';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-eta-etd',
  templateUrl: './eta-etd.component.html',
  styleUrls: ['./eta-etd.component.css']
})
export class EtaEtdComponent implements OnInit {

  etaEtdModel: EtaEtdDateTime = {
    eta: null,
    etd: null
  };

  dateSequenceError = false;
  timeSequenceError = false;

  constructor(private portCallService: PortCallService) {}

  ngOnInit() {
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

  onEtaResult(etaResult) {
    this.etaEtdModel.eta = etaResult;
    this.validateData();
  }

  onEtdResult(etdResult) {
    this.etaEtdModel.etd = etdResult;
    this.validateData();
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
