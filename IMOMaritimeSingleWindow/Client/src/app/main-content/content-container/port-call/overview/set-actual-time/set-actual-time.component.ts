import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Component({
  selector: 'app-set-actual-time',
  templateUrl: './set-actual-time.component.html',
  styleUrls: ['./set-actual-time.component.css']
})
export class SetActualTimeComponent implements OnInit {

  @Input() portCallId;

  currentDate: NgbDate;
  ataModel: DateTime;
  atdModel: DateTime;

  ataAfterTodayError = false;
  atdAfterTodayError = false;
  dateSequenceError = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    const today = new Date();
    this.currentDate = new NgbDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
  }

  onAtaResult(ataResult: DateTime) {
    this.ataModel = ataResult;
    console.log(ataResult);
    this.validateDateTime();
  }

  onAtdResult(atdResult) {
    this.atdModel = atdResult;
    console.log(atdResult);
    this.validateDateTime();
  }

  validateDateTime() {
    let arrival: DateTime = null;
    let departure: DateTime = null;

    if (this.ataModel && this.ataModel.date) {
      arrival = {
        date: new NgbDate(this.ataModel.date.year, this.ataModel.date.month, this.ataModel.date.day),
        time: new NgbTime(this.ataModel.time.hour, this.ataModel.time.minute, 0)
      };
    }

    if (this.atdModel && this.atdModel.date) {
      departure = {
        date: new NgbDate(this.atdModel.date.year, this.atdModel.date.month, this.atdModel.date.day),
        time: new NgbTime(this.atdModel.time.hour, this.atdModel.time.minute, 0)
      };
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
    console.log('Not yet implemented');
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

}
