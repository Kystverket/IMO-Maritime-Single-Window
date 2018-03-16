import { Component, OnInit } from '@angular/core';
import { DateTime } from './date-time.interface';
import {NgbDateStruct, NgbCalendar, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
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

  etaModel: DateTime;
  etdModel: DateTime;

  etaDateModel: NgbDateStruct;
  etdDateModel: NgbDateStruct;

  etaTimeModel: NgbTimeStruct;
  etdTimeModel: NgbTimeStruct;

  dateSequenceError: boolean = false;

  dateChanged($event) {
    this.dateSequenceError = after(this.etaDateModel, this.etdDateModel);

    console.log('---');
    console.log('equal ' + equals(this.etaDateModel, this.etdDateModel));
    console.log('eta before ' + before(this.etaDateModel, this.etdDateModel));
    console.log('eta after ' + after(this.etaDateModel, this.etdDateModel));

  }

  validFormat(model) {
    return typeof model != "string";
  }
  

  constructor() { }

  ngOnInit() {
  }



}
