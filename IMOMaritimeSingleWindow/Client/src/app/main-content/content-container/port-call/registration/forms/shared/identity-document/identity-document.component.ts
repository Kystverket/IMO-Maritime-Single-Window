import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IdentityDocumentModel } from 'app/shared/models/identity-document-model';
import { Observable } from 'rxjs/Observable';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { NgForm } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import { ValidateDateTimeService } from 'app/shared/services/validate-date-time.service';
import { SelectDateComponent } from '../select-date/select-date.component';

@Component({
  selector: 'app-identity-document',
  templateUrl: './identity-document.component.html',
  styleUrls: ['./identity-document.component.css']
})
export class IdentityDocumentComponent implements OnInit {

  @Output() changeIdentityDocumentModel: EventEmitter<any> = new EventEmitter();

  identityDocumentModel: IdentityDocumentModel;

  identityDocTypeList: Observable<any>;

  @ViewChild(NgForm) form: NgForm;
  @ViewChild('selectIssueDate') selectIssueDateComponent;
  @ViewChild('selectExpiryDate') selectExpiryDateComponent;
  formValid = false;

  issueDateAfterExpiryDateError: Boolean = false;
  expiryDateBeforeIssueDateError: Boolean = false;

  constructor(
    private identityDocumentService: IdentityDocumentService,
    private validateDateTimeService: ValidateDateTimeService
  ) { }

  ngOnInit() {
    this.identityDocumentModel = new IdentityDocumentModel();

    // Get identity document types list
    this.identityDocumentService.getIdentityDocumentTypes().subscribe(results => {
      this.identityDocTypeList = results;
    });
  }

  identityDocumentModelChanged() {
    this.changeIdentityDocumentModel.emit(
      {
        identityDocumentModel: this.identityDocumentModel,
        validDocumentDates: {
          issueDateAfterExpiryDateError: this.issueDateAfterExpiryDateError,
          expiryDateBeforeExpiryDateError: this.expiryDateBeforeIssueDateError
        }
      });
  }

  setNumberOfIdentityDoc($event) {
    this.identityDocumentModel.identityDocumentNumber = $event;
    this.identityDocumentModelChanged();
  }

  setVisaOrPermitNumber($event) {
    this.identityDocumentModel.visaOrResidencePermitNumber = $event;
    this.identityDocumentModelChanged();
  }

  setIssuingNation($event) {
    this.identityDocumentModel.issuingNationId = $event.item.countryId;
    this.identityDocumentModel.issuingNation = $event.item;
    this.identityDocumentModelChanged();
  }

  setIdentityDocumentType($event) {
    this.identityDocumentModel.identityDocumentType = $event;
    this.identityDocumentModel.identityDocumentTypeId = $event.id;
    this.identityDocumentModelChanged();
  }

  setIdentityDocumentIssueDate($event) {
    let date: Date = new Date();
    console.log(date);
    if ($event) {
      console.log($event);
      date = new Date($event.year, $event.month - 1, $event.day);
     /* this.identityDocumentModel.identityDocumentIssueDate = this.getDateFormat($event); */
    } else {
      date = null;
    }
    this.identityDocumentModel.identityDocumentIssueDate = date;
    this.identityDocumentModelChanged();
    if ($event && this.validateDateTimeService.checkDocumentDates(this.identityDocumentModel.identityDocumentIssueDate, this.identityDocumentModel.identityDocumentExpiryDate)) {
      this.issueDateAfterExpiryDateError = true;
    } else {
      this.expiryDateBeforeIssueDateError = false;
      this.issueDateAfterExpiryDateError = false;
    }
  }

  setIdentityDocumentExpiryDate($event) {
    let date: Date = new Date();
    if ($event) {
      console.log($event);
      date = new Date($event.year, $event.month - 1, $event.day);
      /* this.identityDocumentModel.identityDocumentExpiryDate = this.getDateFormat($event); */
    } else {
      date = null;
    }
    console.log(date);
    this.identityDocumentModel.identityDocumentExpiryDate = date;
    this.identityDocumentModelChanged();
    if ($event && this.validateDateTimeService.checkDocumentDates(this.identityDocumentModel.identityDocumentIssueDate, this.identityDocumentModel.identityDocumentExpiryDate)) {
      this.expiryDateBeforeIssueDateError = true;
    } else {
      this.expiryDateBeforeIssueDateError = false;
      this.issueDateAfterExpiryDateError = false;
    }
  }

  resetIssuingNation() {
    this.identityDocumentModel.issuingNation = null;
    this.identityDocumentModel.issuingNationId = null;
    this.identityDocumentModelChanged();
  }

  resetForm() {
    console.log('Identity doc component resetting form!');
    this.identityDocumentModel = new IdentityDocumentModel();
    console.log(this.identityDocumentModel);
    this.resetIdentityDocumentIssueDate();
    this.resetIdentityDocumentExpiryDate();
  }

  resetIdentityDocumentIssueDate() {
    this.identityDocumentModel.identityDocumentIssueDate = null;
    this.selectIssueDateComponent.dateChanged(null);
  }

  resetIdentityDocumentExpiryDate() {
    this.identityDocumentModel.identityDocumentExpiryDate = null;
    this.selectExpiryDateComponent.dateChanged(null);
  }

  getDateFormat(date) {
    if (date.year && date.month && date.day) {
      const dateString = date.year + '-' + ('0' + date.month).slice(-2) + '-' + ('0' + date.day).slice(-2) + 'T00:00:00';
      return dateString;
    } else {
      return null;
    }
  }

  getDisplayDateFormat(date) {
    return date.split('T')[0];
  }

}
