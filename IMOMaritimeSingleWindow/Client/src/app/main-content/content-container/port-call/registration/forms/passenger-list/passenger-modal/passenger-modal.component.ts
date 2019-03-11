import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenderModel, IdentityDocumentModel, IdentityDocumentTypeModel, PersonOnBoardModel } from 'app/shared/models/';
import { CountryService, IdentityDocumentService, PortCallFalPersonOnBoardService, ValidateDateTimeService } from 'app/shared/services/';

@Component({
  selector: 'app-passenger-modal',
  templateUrl: './passenger-modal.component.html',
  styleUrls: ['./passenger-modal.component.css']
})
export class PassengerModalComponent implements OnInit {

  inputPassengerModel: any;
  startInputPassengerModel: PersonOnBoardModel;

  @Output() outputPassengerModel: EventEmitter<PersonOnBoardModel> = new EventEmitter();
  @Input() isImport = false;

  @ViewChild('viewModal') viewModal;
  @ViewChild('editModal') editModal;
  dirtyForm = false;
  identityInfoRequired = false;
  identityDocNoSet = true;
  expiryDateSet = true;

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
  currentErrors: string[];

  constructor(
    private modalService: NgbModal,
    private identityDocumentService: IdentityDocumentService,
    private validateDateTimeService: ValidateDateTimeService,
    private personOnBoardService: PortCallFalPersonOnBoardService,
    private countryService: CountryService
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
  openViewModal(passengerModel: any) {
    this.inputPassengerModel = JSON.parse(JSON.stringify(passengerModel));
    this.makeDates(this.inputPassengerModel);
    this.inputPassengerModel.identityDocument = passengerModel.identityDocument;

    if (this.inputPassengerModel.identityDocument === undefined || this.inputPassengerModel.identityDocument == null
      || this.inputPassengerModel.identityDocument[0] === undefined || this.inputPassengerModel.identityDocument[0] == null
      ) {
      this.inputPassengerModel.identityDocument[0] = new IdentityDocumentModel();
    }

    if (this.inputPassengerModel.nationality === 'N/A') {
      this.inputPassengerModel.nationality = null;
      this.inputPassengerModel.nationalityId = null;
    }

    this.modalService.open(this.viewModal);
  }

  openEditModal(passengerModel: any) {
    // Set model to modify
    this.inputPassengerModel = JSON.parse(JSON.stringify(passengerModel));
    this.makeDates(this.inputPassengerModel);

    if (this.inputPassengerModel.identityDocument === undefined || this.inputPassengerModel.identityDocument == null
      || this.inputPassengerModel.identityDocument[0] === undefined || this.inputPassengerModel.identityDocument[0] == null
      ) {
      this.inputPassengerModel.identityDocument[0] = new IdentityDocumentModel();
    }

    this.checkIdentityValues();
    if (this.isImport) {
      this.currentErrors = this.inputPassengerModel.errorMessages;
      this.addGenderAndNationality();
      return;
    } else {
      this.modalService.open(this.editModal, {
        backdrop: 'static'
      });
    }
    if (this.inputPassengerModel.nationality === 'N/A') {
      this.inputPassengerModel.nationality = null;
      this.inputPassengerModel.nationalityId = null;
    }
  }

  addGenderAndNationality() {
    if (
      (this.inputPassengerModel.nationalityId != null &&
        this.inputPassengerModel.nationalityId !== undefined) ||
      (this.inputPassengerModel.genderId != null &&
        this.inputPassengerModel.genderId !== undefined)
    ) {
      this.countryService
        .getCountryById(this.inputPassengerModel.nationalityId)
        .finally(() => {
          this.personOnBoardService
            .getGenderById(this.inputPassengerModel.genderId)
            .finally(() => {
              this.modalService.open(this.editModal, {
                backdrop: 'static'
              });
            })
            .subscribe(gender => {
              this.inputPassengerModel.gender = gender;
              this.inputPassengerModel.genderId = gender.genderId;
            });
        })
        .subscribe(country => {
          this.inputPassengerModel.nationality = country.name;
          this.inputPassengerModel.nationalityTwoCharCode = country.twoCharCode;
          this.inputPassengerModel.nationalityId = country.countryId;
        });
    } else {
      this.modalService.open(this.editModal, {
        backdrop: 'static'
      });
    }
  }

  checkIdentityValues() {
    const identityDocument = this.inputPassengerModel.identityDocument[0];
    if (identityDocument != null && identityDocument !== undefined) {
      if (identityDocument.identityDocumentNumber) {
        this.identityDocNoSet = true;
      } else {
        this.identityDocNoSet = false;
      }
      if (identityDocument.identityDocumentType != null && identityDocument.identityDocumentType !== undefined) {
        this.identityInfoRequired = true;
      }
    } else {
      this.identityInfoRequired = false;
    }
  }

  // Output
  editPassenger() {
    if (
      this.inputPassengerModel.gender != null &&
      this.inputPassengerModel.gender.description != null &&
      this.inputPassengerModel.gender !== undefined &&
      this.inputPassengerModel.gender.description !== undefined
    ) {
      this.inputPassengerModel.gender = this.inputPassengerModel.gender.description;
    }
    this.outputPassengerModel.emit(this.inputPassengerModel);
  }

  setNationality($event) {
    this.dirtyForm = true;
    this.inputPassengerModel.nationality = $event.item.name;
    this.inputPassengerModel.nationalityTwoCharCode = $event.item.twoCharCode;
    this.inputPassengerModel.nationalityId = $event.item.countryId;
  }

  setCountryOfBirth($event) {
    this.dirtyForm = true;
    this.inputPassengerModel.countryOfBirth = $event.item.name;
    this.inputPassengerModel.countryOfBirthTwoCharCode = $event.item.twoCharCode;
    this.inputPassengerModel.countryOfBirthId = $event.item.countryId;
  }

  setIssuingNation($event) {
    this.dirtyForm = true;
    this.inputPassengerModel.identityDocument[0].issuingNation = $event.item.name;
    this.inputPassengerModel.identityDocument[0].issuingNationTwoCharCode = $event.item.twoCharCode;
    this.inputPassengerModel.identityDocument[0].issuingNationId = $event.item.countryId;
  }

  setIdentityDocumentType($event) {
    if ($event) {
      this.inputPassengerModel.identityDocument[0].identityDocumentType = $event;
      this.inputPassengerModel.identityDocument[0].identityDocumentTypeId = $event.id;
    } else {
      this.resetIdentityDocumentType();
    }
    this.checkIdentityValues();
  }

  setPortOfEmbarkation($event) {
    this.dirtyForm = true;
    this.inputPassengerModel.portOfEmbarkation = $event.name;
    this.inputPassengerModel.portOfEmbarkationTwoCharCode = $event.country.twoCharCode;
    this.inputPassengerModel.portOfEmbarkationId = $event.locationId;
  }

  setPortOfDisembarkation($event) {
    this.dirtyForm = true;
    this.inputPassengerModel.portOfDisembarkation = $event.name;
    this.inputPassengerModel.portOfDisembarkationTwoCharCode = $event.country.twoCharCode;
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
    if (expiryDate != null) {
      this.expiryDateSet = true;
    } else {
      this.expiryDateSet = false;
    }
    if (this.validateDateTimeService.checkDocumentDatesError(issueDate, expiryDate)) {
      this.issueDateAfterExpiryDateError = true;
      this.validDocumentDates = false;
    } else {
      this.issueDateAfterExpiryDateError = false;
      this.expiryDateBeforeExpiryDateError = false;
      this.validDocumentDates = true;
    }
    this.checkIdentityValues();
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
    if (expiryDate != null) {
      this.expiryDateSet = true;
    } else {
      this.expiryDateSet = false;
    }
    if (this.validateDateTimeService.checkDocumentDatesError(issueDate, expiryDate)) {
      this.expiryDateBeforeExpiryDateError = true;
      this.validDocumentDates = false;
    } else {
      this.issueDateAfterExpiryDateError = false;
      this.expiryDateBeforeExpiryDateError = false;
      this.validDocumentDates = true;
    }
    this.checkIdentityValues();
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
    this.checkIdentityValues();
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
      date = new Date(date);
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
