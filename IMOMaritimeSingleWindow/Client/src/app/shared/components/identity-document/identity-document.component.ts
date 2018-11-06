import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IdentityDocumentModel } from 'app/shared/models/identity-document-model';
import { IdentityDocumentService, ValidateDateTimeService} from 'app/shared/services/';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-identity-document',
  templateUrl: './identity-document.component.html',
  styleUrls: ['./identity-document.component.css']
})
export class IdentityDocumentComponent implements OnInit {

  @Input() showVisaOrResidenceNumber = true;

  @Output() changeIdentityDocumentModel: EventEmitter<any> = new EventEmitter();

  identityDocumentModel: IdentityDocumentModel;

  identityDocTypeList: Observable<any>;

  @ViewChild(NgForm) form: NgForm;
  @ViewChild('selectIssueDate') selectIssueDateComponent;
  @ViewChild('selectExpiryDate') selectExpiryDateComponent;
  formValid = false;

  issueDateAfterExpiryDateError = false;
  expiryDateBeforeIssueDateError = false;

  issueDateValid = true;
  expiryDateValid = true;

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
    $event ? this.identityDocumentModel.identityDocumentType = $event : this.identityDocumentModel.identityDocumentType = null;
    $event ? this.identityDocumentModel.identityDocumentTypeId = $event.id : this.identityDocumentModel.identityDocumentTypeId = null;
    this.identityDocumentModelChanged();
  }

  setIdentityDocumentIssueDate($event) {
    let date: Date = new Date();
    if ($event) {
      date = new Date($event.year, $event.month - 1, $event.day);
    } else {
      date = null;
    }
    this.identityDocumentModel.identityDocumentIssueDate = date;
    if ($event && this.validateDateTimeService.checkDocumentDatesError(this.identityDocumentModel.identityDocumentIssueDate, this.identityDocumentModel.identityDocumentExpiryDate)) {
      this.issueDateAfterExpiryDateError = true;
    } else {
      this.expiryDateBeforeIssueDateError = false;
      this.issueDateAfterExpiryDateError = false;
    }
    // this.issueDateValid = $event.validDate;
    this.identityDocumentModelChanged();
  }

  setIdentityDocumentExpiryDate($event) {
    let date: Date = new Date();
    if ($event) {
      date = new Date($event.year, $event.month - 1, $event.day);
    } else {
      date = null;
    }
    this.identityDocumentModel.identityDocumentExpiryDate = date;
    if ($event && this.validateDateTimeService.checkDocumentDatesError(this.identityDocumentModel.identityDocumentIssueDate, this.identityDocumentModel.identityDocumentExpiryDate)) {
      this.expiryDateBeforeIssueDateError = true;
    } else {
      this.expiryDateBeforeIssueDateError = false;
      this.issueDateAfterExpiryDateError = false;
    }
    // this.expiryDateValid = $event.validDate;
    this.identityDocumentModelChanged();
  }

  resetIssuingNation() {
    this.identityDocumentModel.issuingNation = null;
    this.identityDocumentModel.issuingNationId = null;
    this.identityDocumentModelChanged();
  }

  resetForm() {
    this.identityDocumentModel = new IdentityDocumentModel();
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

  getNgbDateFormat(date) {
    if (date != null) {
      const newDate = new Date(date);
      return {
        year: newDate.getFullYear(),
        month: newDate.getMonth() + 1,
        day: newDate.getDate()
      };
    } else {
      return null;
    }
  }

}
