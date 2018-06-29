import { Component, OnInit } from '@angular/core';
import { LocationModel } from 'app/shared/models/location-model';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

const INITIAL_DATA_IS_PRISTINE_TEXT = 'There are no unsaved changes in this page.';
const UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';

@Component({
  selector: 'app-save-prev-and-next-poc',
  templateUrl: './save-prev-and-next-poc.component.html',
  styleUrls: ['./save-prev-and-next-poc.component.css']
})
export class SavePrevAndNextPocComponent implements OnInit {
  prevLocationModel: LocationModel = null;
  nextLocationModel: LocationModel = null;

  etdModel: DateTime = null;
  etaModel: DateTime = null;

  portCallId: number;

  dataIsPristine = true;
  dataIsPristineText: string;

  constructor(
    private portCallService: PortCallService,
    private prevAndNextPocService: PrevAndNextPocService
  ) {
    this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
  }

  ngOnInit() {
    this.prevAndNextPocService.dataIsPristine$.subscribe(
      pristineData => {
        this.dataIsPristine = pristineData;
      }
    );

    this.prevAndNextPocService.prevPortOfCallData$.subscribe(
      prevLocationData => {
        this.prevLocationModel = prevLocationData;
      }
    );

    this.prevAndNextPocService.nextPortOfCallData$.subscribe(
      nextLocationData => {
        this.nextLocationModel = nextLocationData;
      }
    );

    this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(
      etdData => {
        if (etdData) {
          this.etdModel = {
            date: new NgbDate(etdData.getFullYear(), etdData.getMonth() + 1, etdData.getDate()),
            time: new NgbTime(etdData.getHours(), etdData.getMinutes(), 0)
          };
        }
      }
    );

    this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(
      etaData => {
        if (etaData) {
          this.etaModel = {
            date: new NgbDate(etaData.getFullYear(), etaData.getMonth() + 1, etaData.getDate()),
            time: new NgbTime(etaData.getHours(), etaData.getMinutes(), 0)
          };
        }
      }
    );

    this.portCallService.detailsIdentificationData$.subscribe(
      portCallIdData => {
        if (portCallIdData) {
          this.portCallId = portCallIdData.portCallId;
        }
      }
    );
  }

  savePrevAndNextPoc() {
    this.dataIsPristineText = UPDATED_DATA_IS_PRISTINE_TEXT;
    this.portCallService.savePrevAndNextPortCall();
  }
}
