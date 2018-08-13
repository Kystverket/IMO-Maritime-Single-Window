import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { IdentityDocumentTypeModel } from 'app/shared/models/identity-document-type-model';
import { GenderModel } from 'app/shared/models/gender-model';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { ValidateDateTimeService } from '../../../../../../../shared/services/validate-date-time.service';

@Component({
  selector: 'app-passenger-modal',
  templateUrl: './passenger-modal.component.html',
  styleUrls: ['./passenger-modal.component.css']
})
export class PassengerModalComponent implements OnInit {

  inputPassengerModel: PersonOnBoardModel;
  startInputPassengerModel: PersonOnBoardModel;

  passengerModel: PersonOnBoardModel = new PersonOnBoardModel();
  @Output() outputPassengerModel: EventEmitter<PersonOnBoardModel> = new EventEmitter();

  @ViewChild('viewModal') viewModal;
  @ViewChild('editModal') editModal;

  identityDocumentTypes: IdentityDocumentTypeModel[] = [];
  genderList: GenderModel[] = [];

  booleanList: string[] = ['Yes', 'No'];
  booleanModel = {
    'Yes': true,
    'No': false
  };
  formBooleanModel = {
    'true': 'Yes',
    'false': 'No'
  };

  validDocumentDates: Boolean = true;
  issueDateAfterExpiryDateError: Boolean = false;
  expiryDateBeforeExpiryDateError: Boolean = false;

  constructor(
    private modalService: NgbModal,
    private identityDocumentService: IdentityDocumentService,
    private passengerService: PortCallPassengerListService,
    private validateDateTimeService: ValidateDateTimeService
  ) { }

  ngOnInit() {
    this.inputPassengerModel = new PersonOnBoardModel();

    this.identityDocumentService.getIdentityDocumentTypes().subscribe(res => {
      this.identityDocumentTypes = res;
    });

    this.passengerService.getGenderList().subscribe(res => {
      this.genderList = res;
    });
  }

  // Open modals
  openViewModal(passengerModel: PersonOnBoardModel) {
    this.setInputPassengerModel(passengerModel);
    this.modalService.open(this.viewModal);
  }

  openEditModal(passengerModel: PersonOnBoardModel) {
    this.setInputPassengerModel(passengerModel);
    this.modalService.open(this.editModal);
  }

  // Output
  editPassenger() {
    this.passengerModel = Object.assign({}, this.inputPassengerModel);
    this.passengerModel.identityDocument[0] = Object.assign({}, this.inputPassengerModel.identityDocument[0]);
    this.outputPassengerModel.emit(this.passengerModel);
  }

  // Setters
  setInputPassengerModel(passengerModel: PersonOnBoardModel) {
    this.inputPassengerModel = passengerModel;
    this.inputPassengerModel.identityDocument[0] = passengerModel.identityDocument[0];
    this.passengerModel = Object.assign({}, passengerModel);
    this.passengerModel.identityDocument[0] = Object.assign({}, passengerModel.identityDocument[0]);
  }

  setNationality($event) {
    this.inputPassengerModel.nationality = $event.item;
    this.inputPassengerModel.nationalityId = $event.item.countryId;
  }

  setCountryOfBirth($event) {
    this.inputPassengerModel.countryOfBirth = $event.item;
    this.inputPassengerModel.countryOfBirthId = $event.item.countryId;
  }

  setIssuingNation($event) {
    this.inputPassengerModel.identityDocument[0].issuingNation = $event.item;
    this.inputPassengerModel.identityDocument[0].issuingNationId = $event.item.countryId;
  }

  setIdentityDocumentType($event) {
    if ($event) {
      this.inputPassengerModel.identityDocument[0].identityDocumentType = $event;
      this.inputPassengerModel.identityDocument[0].identityDocumentTypeId = $event.id;
    } else {
      this.resetIdentityDocumentType();
    }
  }

  setPortOfEmbarkation($event) {
    this.inputPassengerModel.portOfEmbarkation = $event;
    this.inputPassengerModel.portOfEmbarkationId = $event.locationId;
  }

  setPortOfDisembarkation($event) {
    this.inputPassengerModel.portOfDisembarkation = $event;
    this.inputPassengerModel.portOfDisembarkationId = $event.locationId;
  }

  setDateOfBirth($event) {
    if ($event) {
      this.inputPassengerModel.dateOfBirth = this.getDateFormat($event);
    } else {
      this.inputPassengerModel.dateOfBirth = this.getDateFormat(null);
    }
  }

  setIdentityDocumentIssueDate($event) {
    let date: Date = new Date();
    console.log(date);
    if ($event) {
      date = new Date($event.year, $event.month - 1, $event.day);
    } else {
      date = null;
    }
    this.inputPassengerModel.identityDocument[0].identityDocumentIssueDate = date;
    const issueDate = this.inputPassengerModel.identityDocument[0].identityDocumentIssueDate;
    const expiryDate = this.inputPassengerModel.identityDocument[0].identityDocumentExpiryDate;
    if (this.validateDateTimeService.checkDocumentDates(issueDate, expiryDate)) {
      this.issueDateAfterExpiryDateError = true;
    } else {
      this.issueDateAfterExpiryDateError = false;
      this.expiryDateBeforeExpiryDateError = false;
    }
  }

  setIdentityDocumentExpiryDate($event) {
    let date: Date = new Date();
    console.log(date);
    if ($event) {
      date = new Date($event.year, $event.month - 1, $event.day);
    } else {
      date = null;
    }
    this.inputPassengerModel.identityDocument[0].identityDocumentExpiryDate = date;
    const issueDate = this.inputPassengerModel.identityDocument[0].identityDocumentIssueDate;
    const expiryDate = this.inputPassengerModel.identityDocument[0].identityDocumentExpiryDate;
    if (this.validateDateTimeService.checkDocumentDates(issueDate, expiryDate)) {
      this.expiryDateBeforeExpiryDateError = true;
    } else {
      this.issueDateAfterExpiryDateError = false;
      this.expiryDateBeforeExpiryDateError = false;
    }

  }

  setTransit($event) {
    this.inputPassengerModel.inTransit = this.booleanModel[$event];
  }

  setGender($event) {
    if ($event) {
      this.inputPassengerModel.gender = $event;
      this.inputPassengerModel.genderId = $event.genderId;
    } else {
      this.inputPassengerModel.gender = null;
      this.inputPassengerModel.genderId = null;
    }
  }

  // Resetters
  resetInputPassengerModel($event: any) {
    this.inputPassengerModel = Object.assign(this.inputPassengerModel, this.passengerModel);
    this.inputPassengerModel.identityDocument[0] = Object.assign(this.inputPassengerModel.identityDocument[0], this.passengerModel.identityDocument[0]);
  }

  resetNationality() {
    this.inputPassengerModel.nationality = null;
    this.inputPassengerModel.nationalityId = null;
  }

  resetCountryOfBirth() {
    this.inputPassengerModel.countryOfBirth = null;
    this.inputPassengerModel.countryOfBirthId = null;
  }

  resetIssuingNation() {
    this.inputPassengerModel.identityDocument[0].issuingNation = null;
    this.inputPassengerModel.identityDocument[0].issuingNationId = null;
  }

  resetIdentityDocumentType() {
    this.inputPassengerModel.identityDocument[0].identityDocumentType = null;
    this.inputPassengerModel.identityDocument[0].identityDocumentTypeId = null;
  }

  resetPortOfEmbarkation() {
    this.inputPassengerModel.portOfEmbarkation = null;
    this.inputPassengerModel.portOfEmbarkationId = null;
  }

  resetPortOfDisembarkation() {
    this.inputPassengerModel.portOfDisembarkation = null;
    this.inputPassengerModel.portOfDisembarkationId = null;
  }

  // Helper methods
  getNgbDateFormat(date) {
    const newDate = new Date(date);
    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate()
    };
  }

  getDateFormat(date) {
    if (date) {
      if (date.year && date.month && date.day) {
        const dateString = date.year + '-' + ('0' + date.month).slice(-2) + '-' + ('0' + date.day).slice(-2) + 'T00:00:00';
        return dateString;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  getDisplayDateFormat(date) {
    return date.split('T')[0];
  }

  checkDocumentDates(issueDate, expiryDate) {
    // The dates are in the format {year: number, month: number, day: number}
    // If any of the dates are null, return true
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
