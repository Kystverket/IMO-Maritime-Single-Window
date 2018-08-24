import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { PortCallModel } from 'app/shared/models/port-call-model';
import { PortCallService } from 'app/shared/services/port-call.service';

@Component({
  selector: 'app-set-actual-time',
  templateUrl: './set-actual-time.component.html',
  styleUrls: ['./set-actual-time.component.css']
})
export class SetActualTimeComponent implements OnInit {

  @Input() portCallModel: PortCallModel;

  @Output() portCallModelChange = new EventEmitter<PortCallModel>();

  @Output() portCallCompleted = new EventEmitter<number>();
  @Output() portCallCleared = new EventEmitter<number>();

  modalRef: NgbModalRef;

  portCallAta: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };
  portCallAtd: DateTime = {
    date: null,
    time: new NgbTime(0, 0, 0)
  };

  currentDate: NgbDate;
  ataModel: DateTime;
  atdModel: DateTime;

  ataAfterTodayError = false;
  atdAfterTodayError = false;
  dateSequenceError = false;
  ataDateFormatError = false;
  atdDateFormatError = false;

  saving = false;
  saved = false;
  saveError = false;

  constructor(private portCallService: PortCallService, private modalService: NgbModal) { }

  ngOnInit() {
    if (this.portCallModel.locationAta != null) {
      const ata = new Date(this.portCallModel.locationAta);
      this.portCallAta = {
        date: new NgbDate(ata.getFullYear(), ata.getMonth() + 1, ata.getDate()),
        time: new NgbTime(ata.getHours(), ata.getMinutes(), 0)
      };
      this.ataModel = this.portCallAta;
    }

    if (this.portCallModel.locationAtd != null) {
      const atd = new Date(this.portCallModel.locationAtd);
      this.portCallAtd = {
        date: new NgbDate(atd.getFullYear(), atd.getMonth() + 1, atd.getDate()),
        time: new NgbTime(atd.getHours(), atd.getMinutes(), 0)
      };
      this.atdModel = this.portCallAtd;
    }

    const today = new Date();
    this.currentDate = new NgbDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
    this.validateDateTime();
  }

  onAtaResult(ataResult: DateTime) {
    this.ataModel = ataResult;
    this.validateDateTime();
  }

  onAtdResult(atdResult) {
    this.atdModel = atdResult;
    this.validateDateTime();
  }

  onAtaDateFormatError(ataDateFormatErrorResult) {
    this.ataDateFormatError = ataDateFormatErrorResult;
  }

  onAtdDateFormatError(atdDateFormatErrorResult) {
    this.atdDateFormatError = atdDateFormatErrorResult;
  }

  validateDateTime() {
    let arrival: DateTime = null;
    let departure: DateTime = null;

    if (this.ataModel && this.ataModel.date) {
      arrival = {
        date: new NgbDate(this.ataModel.date.year, this.ataModel.date.month, this.ataModel.date.day),
        time: new NgbTime(this.ataModel.time.hour, this.ataModel.time.minute, 0)
      };
      this.portCallModel.locationAta = new Date(arrival.date.year, arrival.date.month - 1, arrival.date.day,
        arrival.time.hour, arrival.time.minute, 0);
    } else {
      this.portCallModel.locationAta = null;
    }

    if (this.atdModel && this.atdModel.date) {
      departure = {
        date: new NgbDate(this.atdModel.date.year, this.atdModel.date.month, this.atdModel.date.day),
        time: new NgbTime(this.atdModel.time.hour, this.atdModel.time.minute, 0)
      };
      this.portCallModel.locationAtd = new Date(departure.date.year, departure.date.month - 1, departure.date.day,
        departure.time.hour, departure.time.minute, 0);
    } else {
      this.portCallModel.locationAtd = null;
    }

    this.ataAfterTodayError = arrival != null ? this.currentDate.before(arrival.date) : false;
    this.atdAfterTodayError = departure != null ? this.currentDate.before(departure.date) : false;

    if (arrival != null && departure != null) {
      this.dateSequenceError = arrival.date.after(departure.date);
      if (arrival.date.equals(departure.date)) {
        this.dateSequenceError = arrival.time.hour > departure.time.hour
          || (arrival.time.hour === departure.time.hour && arrival.time.minute >= departure.time.minute);
      }
    } else {
      this.dateSequenceError = false;
    }
  }

  save() {
    this.saving = true;
    this.saved = false;
    this.saveError = false;

    this.portCallService.updatePortCall(this.portCallModel).subscribe(
      result => {
        this.saved = true;
        console.log(result);
        if (null != result.locationAtd) {
          this.portCallService.updatePortCallStatusCompleted(result.portCallId).subscribe(
            res => {
              this.portCallModel = res;
              this.portCallCompleted.emit(result.portCallId);
              this.modalRef.close();
              console.log('Status set to completed.');

            },
            err => console.log(err)
          );
        } else {
          this.portCallService.updatePortCallStatusCleared(result.portCallId).subscribe(
            res => {
              this.portCallModel = res;
              this.portCallCleared.emit(result.portCallId);
              this.modalRef.close();
              console.log('Status set to cleared.');
            },
            err => console.log(err)
          );
        }
      },
      error => {
        this.saveError = true;
        console.log(error);
      },
      () => {
        this.saving = false;
      }
    );
  }

  openModal(content) {
    this.saving = false;
    this.saved = false;
    this.saveError = false;
    this.modalRef = this.modalService.open(content, {size: 'lg'});
    this.modalRef.result.then(
      (result) => {
        this.modalClosed();
      },
      (reason) => {
        this.modalClosed();
      });
  }

  modalClosed() {
    console.log('modal closed');
  }

}
