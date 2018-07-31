import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';

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

  ataBeforeTodayError = false;
  atdBeforeTodayError = false;
  dateSequenceError = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    const today = new Date();
    this.currentDate = new NgbDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
  }

  onAtaResult(ataResult) {
    this.ataModel = ataResult;
    console.log(ataResult);
  }

  onAtdResult(atdResult) {
    this.atdModel = atdResult;
    console.log(atdResult);
  }

  validateDateTime() {
    
  }

  save() {
    console.log('Not yet implemented');
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

}
