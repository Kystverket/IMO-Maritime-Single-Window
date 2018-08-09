import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IdentityDocumentModel } from 'app/shared/models/identity-document-model';
import { Observable } from 'rxjs/Observable';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { NgForm } from '@angular/forms';

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
  formValid = false;

  validDocumentDates: Boolean = true;

  constructor(
    private identityDocumentService: IdentityDocumentService
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
        validDocumentDates: this.validDocumentDates
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
    if ($event) {
      this.validDocumentDates = this.checkDocumentDates($event, this.getNgbDateFormat(this.identityDocumentModel.identityDocumentExpiryDate));
      this.identityDocumentModel.identityDocumentIssueDate = this.getDateFormat($event);
    } else {
      this.validDocumentDates = true;
      this.identityDocumentModel.identityDocumentIssueDate = '';
    }
    this.identityDocumentModelChanged();
  }

  setIdentityDocumentExpiryDate($event) {
    if ($event) {
      this.validDocumentDates = this.checkDocumentDates(this.getNgbDateFormat(this.identityDocumentModel.identityDocumentIssueDate), $event);
      this.identityDocumentModel.identityDocumentExpiryDate = this.getDateFormat($event);
    } else {
      this.validDocumentDates = true;
      this.identityDocumentModel.identityDocumentExpiryDate = '';
    }
    this.identityDocumentModelChanged();
  }

  resetIssuingNation() {
    this.identityDocumentModel.issuingNation = null;
    this.identityDocumentModel.issuingNationId = null;
    this.identityDocumentModelChanged();
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
    const newDate = new Date(date);
    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate()
    };
  }

  checkDocumentDates(issueDate, expiryDate) {
    // The dates are in the format {year: number, month: number, day: number}

    // If any of the dates are null og Nan, return true
    if (!issueDate || !expiryDate || isNaN(issueDate.year) || isNaN(expiryDate.year)) {
      return true;
    }

    // Will check if issueDate is before (smaller than) expiryDate
    if (issueDate.year < expiryDate.year) {
      return true;
    } else if (issueDate.year === expiryDate.year) {
      if (issueDate.month < expiryDate.month) {
        return true;
      } else if (issueDate.month === expiryDate.month) {
        if (issueDate.day < expiryDate.day) {
          return true;
        }
      }
    }
    return false;
  }

}
