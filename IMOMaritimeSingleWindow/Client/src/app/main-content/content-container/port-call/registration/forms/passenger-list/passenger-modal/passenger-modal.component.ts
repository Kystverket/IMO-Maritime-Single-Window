import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { IdentityDocumentTypeModel } from 'app/shared/models/identity-document-type-model';
import { GenderModel } from 'app/shared/models/gender-model';
import { ValidateDateTimeService } from 'app/shared/services/validate-date-time.service';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';

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
  dirtyForm = false;

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

  validDocumentDates = true;
  issueDateAfterExpiryDateError = false;
  expiryDateBeforeExpiryDateError = false;

  constructor(
    private modalService: NgbModal,
    private identityDocumentService: IdentityDocumentService,
    private validateDateTimeService: ValidateDateTimeService,
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) { }

  ngOnInit() {
    this.inputPassengerModel = new PersonOnBoardModel();

    this.identityDocumentService.getIdentityDocumentTypes().subscribe(res => {
      this.identityDocumentTypes = res;
    });

    this.personOnBoardService.getGenderList().subscribe(res => {
      this.genderList = res;
    });
  }

  // Open modals
  openViewModal(passengerModel: PersonOnBoardModel) {
    this.inputPassengerModel = JSON.parse(JSON.stringify(passengerModel));
    this.makeDates(this.inputPassengerModel);
    this.modalService.open(this.viewModal);
  }

  openEditModal(passengerModel: PersonOnBoardModel) {
    // Set model to modify
    this.inputPassengerModel = JSON.parse(JSON.stringify(passengerModel));
    this.makeDates(this.inputPassengerModel);
    // Set model to fall back to
    this.passengerModel = JSON.parse(JSON.stringify(passengerModel));

    this.modalService.open(this.editModal, {
      backdrop: 'static'
    });
  }

  // Output
  editPassenger() {
    this.outputPassengerModel.emit(this.inputPassengerModel);
  }

  setNationality($event) {
    this.dirtyForm = true;
    this.inputPassengerModel.nationality = $event.item;
    this.inputPassengerModel.nationalityId = $event.item.countryId;
  }

  setCountryOfBirth($event) {
    this.dirtyForm = true;
    this.inputPassengerModel.countryOfBirth = $event.item;
    this.inputPassengerModel.countryOfBirthId = $event.item.countryId;
  }

  setIssuingNation($event) {
    this.dirtyForm = true;
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
    this.dirtyForm = true;
    this.inputPassengerModel.portOfEmbarkation = $event;
    this.inputPassengerModel.portOfEmbarkationId = $event.locationId;
  }

  setPortOfDisembarkation($event) {
    this.dirtyForm = true;
    this.inputPassengerModel.portOfDisembarkation = $event;
    this.inputPassengerModel.portOfDisembarkationId = $event.locationId;
  }

  setDateOfBirth($event) {
    this.dirtyForm = true;
    if ($event) {
      const date: Date = new Date($event.year, $event.month - 1, $event.day);
      this.inputPassengerModel.dateOfBirth = date;
    } else {
      this.inputPassengerModel.dateOfBirth = null;
    }
  }

  setIdentityDocumentIssueDate($event) {
    this.dirtyForm = true;
    let date: Date = new Date();
    if ($event) {
      date = new Date($event.year, $event.month - 1, $event.day);
    } else {
      date = null;
    }
    this.inputPassengerModel.identityDocument[0].identityDocumentIssueDate = date;
    const issueDate = this.inputPassengerModel.identityDocument[0].identityDocumentIssueDate;
    const expiryDate = this.inputPassengerModel.identityDocument[0].identityDocumentExpiryDate;
    if (this.validateDateTimeService.checkDocumentDatesError(issueDate, expiryDate)) {
      this.issueDateAfterExpiryDateError = true;
      this.validDocumentDates = false;
    } else {
      this.issueDateAfterExpiryDateError = false;
      this.expiryDateBeforeExpiryDateError = false;
      this.validDocumentDates = true;
    }
  }

  setIdentityDocumentExpiryDate($event) {
    this.dirtyForm = true;
    let date: Date = new Date();
    if ($event) {
      date = new Date($event.year, $event.month - 1, $event.day);
    } else {
      date = null;
    }
    this.inputPassengerModel.identityDocument[0].identityDocumentExpiryDate = date;
    const issueDate = this.inputPassengerModel.identityDocument[0].identityDocumentIssueDate;
    const expiryDate = this.inputPassengerModel.identityDocument[0].identityDocumentExpiryDate;
    if (this.validateDateTimeService.checkDocumentDatesError(issueDate, expiryDate)) {
      this.expiryDateBeforeExpiryDateError = true;
      this.validDocumentDates = false;
    } else {
      this.issueDateAfterExpiryDateError = false;
      this.expiryDateBeforeExpiryDateError = false;
      this.validDocumentDates = true;
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
    this.resetForm();
    this.inputPassengerModel = JSON.parse(JSON.stringify(this.passengerModel));
  }

  resetNationality() {
    this.dirtyForm = true;
    this.inputPassengerModel.nationality = null;
    this.inputPassengerModel.nationalityId = null;
  }

  resetCountryOfBirth() {
    this.dirtyForm = true;
    this.inputPassengerModel.countryOfBirth = null;
    this.inputPassengerModel.countryOfBirthId = null;
  }

  resetIssuingNation() {
    this.dirtyForm = true;
    this.inputPassengerModel.identityDocument[0].issuingNation = null;
    this.inputPassengerModel.identityDocument[0].issuingNationId = null;
  }

  resetIdentityDocumentType() {
    this.inputPassengerModel.identityDocument[0].identityDocumentType = null;
    this.inputPassengerModel.identityDocument[0].identityDocumentTypeId = null;
  }

  resetPortOfEmbarkation() {
    this.dirtyForm = true;
    this.inputPassengerModel.portOfEmbarkation = null;
    this.inputPassengerModel.portOfEmbarkationId = null;
  }

  resetPortOfDisembarkation() {
    this.dirtyForm = true;
    this.inputPassengerModel.portOfDisembarkation = null;
    this.inputPassengerModel.portOfDisembarkationId = null;
  }

  resetForm() {
    this.dirtyForm = false;
  }

  // Helper methods
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

  getDateFormatFromNgbDate(date) {
    if (date) {
      const newDate = new Date(date.year + '-' + date.month + '-' + date.day);
      return newDate;
    }
    return null;
  }

  getDisplayDateFormat(date) {
    if (date) {
      const dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
      return dateString;
    } else {
      return null;
    }
  }

  makeDates(passenger: PersonOnBoardModel) {
    passenger.dateOfBirth = passenger.dateOfBirth != null ? new Date(passenger.dateOfBirth) : null;
        passenger.identityDocument.forEach(identityDocument => {
          identityDocument.identityDocumentIssueDate = identityDocument.identityDocumentIssueDate != null ? new Date(identityDocument.identityDocumentIssueDate) : null;
          identityDocument.identityDocumentExpiryDate = identityDocument.identityDocumentExpiryDate != null ? new Date(identityDocument.identityDocumentExpiryDate) : null;
        });
    return passenger;
  }
}
