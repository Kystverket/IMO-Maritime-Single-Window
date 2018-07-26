import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LocationModel } from 'app/shared/models/location-model';
import { DateTime } from 'app/shared/interfaces/dateTime.interface';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { Subscription } from 'rxjs/Subscription';

const INITIAL_DATA_IS_PRISTINE_TEXT = 'There are no unsaved changes in this page.';
const UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';

@Component({
  selector: 'app-save-prev-and-next-poc',
  templateUrl: './save-prev-and-next-poc.component.html',
  styleUrls: ['./save-prev-and-next-poc.component.css']
})
export class SavePrevAndNextPocComponent implements OnInit, OnDestroy {

  dateSequenceError = false;

  prevLocationModel: LocationModel = null;
  nextLocationModel: LocationModel = null;

  etdModel: DateTime = null;
  etaModel: DateTime = null;

  portCallId: number;

  dataIsPristine = true;
  dataIsPristineText: string;

  prevLocationFound: boolean;
  nextLocationFound: boolean;
  prevEtdFound: boolean;
  nextEtaFound: boolean;

  dataIsPristineSubscription: Subscription;
  prevPortOfCallDataSubscription: Subscription;
  nextPortOfCallDataSubscription: Subscription;
  prevPortOfCallEtdDataSubscription: Subscription;
  nextPortOfCallEtaDataSubscription: Subscription;
  detailsIdentificationDataSubscription: Subscription;
  prevAndNextPortOfCallMetaSubscription: Subscription;

  constructor(
    private portCallService: PortCallService,
    private prevAndNextPocService: PrevAndNextPocService
  ) {
    this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
  }

  ngOnInit() {
    this.dataIsPristineSubscription = this.prevAndNextPocService.dataIsPristine$.subscribe(
      pristineData => {
        this.dataIsPristine = pristineData;
      }
    );

    this.prevPortOfCallDataSubscription = this.prevAndNextPocService.prevPortOfCallData$.subscribe(
      prevLocationData => {
        this.prevLocationFound = (prevLocationData != null);
        this.prevLocationModel = prevLocationData;
      }
    );

    this.nextPortOfCallDataSubscription = this.prevAndNextPocService.nextPortOfCallData$.subscribe(
      nextLocationData => {
        this.nextLocationFound = (nextLocationData != null);
        this.nextLocationModel = nextLocationData;
      }
    );

    this.prevPortOfCallEtdDataSubscription = this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(
      etdData => {
        if (etdData) {
          this.prevEtdFound = true;
          const dateTime = new Date(etdData);
          this.etdModel = {
            date: new NgbDate(dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
            time: new NgbTime(dateTime.getHours(), dateTime.getMinutes(), 0)
          };
        } else {
          this.prevEtdFound = false;
          this.etdModel = null;
        }
      }
    );

    this.nextPortOfCallEtaDataSubscription = this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(
      etaData => {
        if (etaData) {
          this.nextEtaFound = true;
          const dateTime = new Date(etaData);
          this.etaModel = {
            date: new NgbDate(dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
            time: new NgbTime(dateTime.getHours(), dateTime.getMinutes(), 0)
          };
        } else {
          this.nextEtaFound = false;
          this.etaModel = null;
        }
      }
    );

    this.detailsIdentificationDataSubscription = this.portCallService.detailsIdentificationData$.subscribe(
      portCallIdData => {
        if (portCallIdData) {
          this.portCallId = portCallIdData.portCallId;
        }
      }
    );

    this.prevAndNextPortOfCallMetaSubscription = this.prevAndNextPocService.prevAndNextPortOfCallMeta$.subscribe(
      metaData => {
        if (metaData) {
          this.dateSequenceError = !metaData.valid;
        }
      }
    );
  }

  ngOnDestroy() {
    this.dataIsPristineSubscription.unsubscribe();
    this.prevPortOfCallDataSubscription.unsubscribe();
    this.nextPortOfCallDataSubscription.unsubscribe();
    this.prevPortOfCallEtdDataSubscription.unsubscribe();
    this.nextPortOfCallEtaDataSubscription.unsubscribe();
    this.detailsIdentificationDataSubscription.unsubscribe();
  }

  savePrevAndNextPoc() {
    const prevDate = this.etdModel != null ? new Date(this.etdModel.date.year, this.etdModel.date.month - 1, this.etdModel.date.day, this.etdModel.time.hour, this.etdModel.time.minute) : null;
    const nextDate = this.etaModel != null ? new Date(this.etaModel.date.year, this.etaModel.date.month - 1, this.etaModel.date.day, this.etaModel.time.hour, this.etaModel.time.minute) : null;
    this.portCallService.savePrevAndNextPortCall(this.portCallId, this.prevLocationModel, this.nextLocationModel, prevDate, nextDate);
    this.dataIsPristineText = UPDATED_DATA_IS_PRISTINE_TEXT;
  }
}
