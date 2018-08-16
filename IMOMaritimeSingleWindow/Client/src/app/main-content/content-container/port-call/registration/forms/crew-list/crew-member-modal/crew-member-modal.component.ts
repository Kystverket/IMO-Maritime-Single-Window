import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { IdentityDocumentTypeModel } from 'app/shared/models/identity-document-type-model';
import { GenderModel } from 'app/shared/models/gender-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { ValidateDateTimeService } from 'app/shared/services/validate-date-time.service';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';

@Component({
  selector: 'app-crew-member-modal',
  templateUrl: './crew-member-modal.component.html',
  styleUrls: ['./crew-member-modal.component.css']
})
export class CrewMemberModalComponent implements OnInit {

  inputCrewModel: PersonOnBoardModel;
  startInputCrewModel: PersonOnBoardModel;

  crewModel: PersonOnBoardModel = new PersonOnBoardModel();
  @Output() outputCrewModel: EventEmitter<PersonOnBoardModel> = new EventEmitter();

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
    private personOnBoardService: PortCallFalPersonOnBoardService,
    private validateDateTimeService: ValidateDateTimeService
  ) { }

  ngOnInit() {
    this.inputCrewModel = new PersonOnBoardModel();

    this.identityDocumentService.getIdentityDocumentTypes().subscribe(res => {
      this.identityDocumentTypes = res;
    });

    this.personOnBoardService.getGenderList().subscribe(res => {
      this.genderList = res;
    });
  }

  // Open modals
  openViewModal(crewModel: PersonOnBoardModel) {
    this.setInputCrewModel(crewModel);
    this.modalService.open(this.viewModal);
  }

  openEditModal(crewModel: PersonOnBoardModel) {
    this.setInputCrewModel(crewModel);
    this.modalService.open(this.editModal);
  }

  // Output
  editCrewMember() {
    this.crewModel = Object.assign({}, this.inputCrewModel);
    this.crewModel.identityDocument[0] = Object.assign({}, this.inputCrewModel.identityDocument[0]);
    this.outputCrewModel.emit(this.crewModel);
  }

  // Setters
  setInputCrewModel(crewModel: PersonOnBoardModel) {
    this.inputCrewModel = crewModel;
    this.inputCrewModel.identityDocument[0] = crewModel.identityDocument[0];
    this.crewModel = Object.assign({}, crewModel);
    this.crewModel.identityDocument[0] = Object.assign({}, crewModel.identityDocument[0]);
  }

  setNationality($event) {
    this.inputCrewModel.nationality = $event.item;
    this.inputCrewModel.nationalityId = $event.item.countryId;
  }

  setCountryOfBirth($event) {
    this.inputCrewModel.countryOfBirth = $event.item;
    this.inputCrewModel.countryOfBirthId = $event.item.countryId;
  }

  setIssuingNation($event) {
    this.inputCrewModel.identityDocument[0].issuingNation = $event.item;
    this.inputCrewModel.identityDocument[0].issuingNationId = $event.item.countryId;
  }

  setIdentityDocumentType($event) {
    if ($event) {
      this.inputCrewModel.identityDocument[0].identityDocumentType = $event;
      this.inputCrewModel.identityDocument[0].identityDocumentTypeId = $event.id;
    } else {
      this.resetIdentityDocumentType();
    }
  }

  setPortOfEmbarkation($event) {
    this.inputCrewModel.portOfEmbarkation = $event;
    this.inputCrewModel.portOfEmbarkationId = $event.locationId;
  }

  setPortOfDisembarkation($event) {
    this.inputCrewModel.portOfDisembarkation = $event;
    this.inputCrewModel.portOfDisembarkationId = $event.locationId;
  }

  setDateOfBirth($event) {
    if ($event) {
      this.inputCrewModel.dateOfBirth = this.getDateFormatFromNgbDate($event);
    } else {
      this.inputCrewModel.dateOfBirth = this.getDateFormatFromNgbDate(null);
    }
  }

  setIdentityDocumentIssueDate($event) {
    let date: Date = new Date();
    if ($event) {
      date = new Date($event.year, $event.month - 1, $event.day);
    } else {
      date = null;
    }
    this.inputCrewModel.identityDocument[0].identityDocumentIssueDate = date;
    const issueDate = this.inputCrewModel.identityDocument[0].identityDocumentIssueDate;
    const expiryDate = this.inputCrewModel.identityDocument[0].identityDocumentExpiryDate;
    if (this.validateDateTimeService.checkDocumentDates(issueDate, expiryDate)) {
      this.issueDateAfterExpiryDateError = true;
    } else {
      this.issueDateAfterExpiryDateError = false;
      this.expiryDateBeforeExpiryDateError = false;
    }
  }

  setIdentityDocumentExpiryDate($event) {
    let date: Date = new Date();
    if ($event) {
      date = new Date($event.year, $event.month - 1, $event.day);
    } else {
      date = null;
    }
    this.inputCrewModel.identityDocument[0].identityDocumentExpiryDate = date;
    const issueDate = this.inputCrewModel.identityDocument[0].identityDocumentIssueDate;
    const expiryDate = this.inputCrewModel.identityDocument[0].identityDocumentExpiryDate;
    if (this.validateDateTimeService.checkDocumentDates(issueDate, expiryDate)) {
      this.expiryDateBeforeExpiryDateError = true;
    } else {
      this.issueDateAfterExpiryDateError = false;
      this.expiryDateBeforeExpiryDateError = false;
    }

  }

  setTransit($event) {
    this.inputCrewModel.inTransit = this.booleanModel[$event];
  }

  setGender($event) {
    if ($event) {
      this.inputCrewModel.gender = $event;
      this.inputCrewModel.genderId = $event.genderId;
    } else {
      this.inputCrewModel.gender = null;
      this.inputCrewModel.genderId = null;
    }
  }

  // Resetters
  resetInputCrewModel($event: any) {
    this.inputCrewModel = Object.assign(this.inputCrewModel, this.crewModel);
    this.inputCrewModel.identityDocument[0] = Object.assign(this.inputCrewModel.identityDocument[0], this.crewModel.identityDocument[0]);
  }

  resetNationality() {
    this.inputCrewModel.nationality = null;
    this.inputCrewModel.nationalityId = null;
  }

  resetCountryOfBirth() {
    this.inputCrewModel.countryOfBirth = null;
    this.inputCrewModel.countryOfBirthId = null;
  }

  resetIssuingNation() {
    this.inputCrewModel.identityDocument[0].issuingNation = null;
    this.inputCrewModel.identityDocument[0].issuingNationId = null;
  }

  resetIdentityDocumentType() {
    this.inputCrewModel.identityDocument[0].identityDocumentType = null;
    this.inputCrewModel.identityDocument[0].identityDocumentTypeId = null;
  }

  resetPortOfEmbarkation() {
    this.inputCrewModel.portOfEmbarkation = null;
    this.inputCrewModel.portOfEmbarkationId = null;
  }

  resetPortOfDisembarkation() {
    this.inputCrewModel.portOfDisembarkation = null;
    this.inputCrewModel.portOfDisembarkationId = null;
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

}
