import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActionButtonsComponent } from 'app/shared/components/action-buttons/action-buttons.component';
import { IdentityDocumentComponent } from 'app/shared/components/identity-document/identity-document.component';
import { PERSON_ON_BOARD_TYPES } from 'app/shared/constants/enumValues';
import { GenderModel, IdentityDocumentModel, LocationModel, PersonOnBoardModel, PersonOnBoardTypeModel } from 'app/shared/models/';
import { FileService, IdentityDocumentService, PortCallFalPersonOnBoardService } from 'app/shared/services/';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { PassengerListErrorModalComponent } from './passenger-list-error-modal/passenger-list-error-modal.component';
import { PassengerModalComponent } from './passenger-modal/passenger-modal.component';
import { SmartTableModel } from './smartTableModel';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit, OnDestroy {
  @Input() portCallId: number;
  @Input() passengerList: any[] = [];

  identityDocumentList: IdentityDocumentModel[] = [];

  portCallPassengerModel: PersonOnBoardModel = new PersonOnBoardModel();

  genderList: GenderModel[];
  selectedGender: GenderModel;
  identityDocTypeList: IdentityDocumentModel[];
  identityDocumentModel: IdentityDocumentModel = new IdentityDocumentModel();
  personOnBoardType: PersonOnBoardTypeModel;

  modalModel: PersonOnBoardModel = new PersonOnBoardModel();
  listIsPristine = true;

  @ViewChild(PassengerModalComponent) passengerModalComponent;
  @ViewChild(IdentityDocumentComponent) identityDocumentComponent;
  @ViewChild('dateOfBirth') dateOfBirthComponent;
  @ViewChild(PassengerListErrorModalComponent) passengerListErrorModalComponent: any;

  @ViewChild(NgForm) form: NgForm;

  booleanList: string[] = ['Yes', 'No'];
  booleanModel = {
    Yes: true,
    No: false
  };
  inTransit: boolean = null;

  formValid = true;
  validDocumentDates = true;
  issueDateRequiredError = false;
  expiryDateRequiredError = false;

  passengerListDataSource: LocalDataSource = new LocalDataSource();
  smartTableList = [];

  tableSettings = {
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    editor: {
      config: {
        completer: {
          descriptionField: 'Search here'
        }
      }
    },
    noDataMessage: 'There are no passengers in this list.',
    columns: {
      sequenceNumber: {
        title: 'ID'
      },
      familyName: {
        title: 'Family Name'
      },
      givenName: {
        title: 'Given Name'
      },
      nationality: {
        title: 'Nationality'
      },
      gender: {
        title: 'Gender'
      },
      dateOfBirth: {
        title: 'Date of Birth',
        valuePrepareFunction: (value) => {
          if (value instanceof Date) {
            return value;
          } else {
            return 'N/A';
          }
        }
      },
      portOfEmbarkation: {
        title: 'Port of Embarkation'
      },
      portOfDisembarkation: {
        title: 'Port of Disembarkation'
      },
      delete: {
        title: 'Actions',
        // deleteButtonContent: 'Delete',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: ActionButtonsComponent,
        onComponentInitFunction: instance => {
          instance.view.subscribe(row => {
            this.openViewPassengerModal(row);
          });
          instance.edit.subscribe(row => {
            this.openEditPassengerModal(row);
          });
          instance.delete.subscribe(row => {
            this.deletePassenger(row);
          });
        }
      }
    }
  };

  genderListSubscription: Subscription;
  personOnBoardTypeSubscription: Subscription;
  pristineSubscription: Subscription;

  constructor(
    private modalService: NgbModal,
    public personOnBoardService: PortCallFalPersonOnBoardService,
  ) { }

  ngOnInit() {
    if (this.passengerList) {
      this.passengerList.forEach(passenger => {
        passenger = this.makeDates(passenger);
      });
      this.updateSequenceNumbers();
    }
    // Load in passenger list in smart table
    this.passengerListDataSource.load(this.generateSmartTable());

    // Initiate models
    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();

    // Get gender list
    if (!this.genderList) {
      this.genderListSubscription = this.personOnBoardService
        .getGenderList()
        .subscribe(results => {
          this.genderList = results;
        });
    }

    // Get passenger person on board type (id 2)
    this.personOnBoardTypeSubscription = this.personOnBoardService
      .getPersonOnBoardTypeByEnum(PERSON_ON_BOARD_TYPES.PAX)
      .subscribe(personOnBoardType => {
        this.personOnBoardType = personOnBoardType;
      });

    this.personOnBoardService.setPassengersList(this.passengerList);

    this.pristineSubscription = this.personOnBoardService.passengerDataIsPristine$.subscribe(
      isPristine => {
        this.listIsPristine = isPristine;
      }
    );
  }

  excelFileSaved(saved) {
    this.personOnBoardService
      .getPassengerListByPortCallId(this.portCallId)
      .finally(() => {
        this.persistData();
        this.listIsPristine = true;
        this.personOnBoardService.setPassengerDataIsPristine(true);
      })
      .subscribe(res => {
        this.passengerList = res;
      });
    if (saved) {
      this.personOnBoardService
        .getCrewListByPortCallId(this.portCallId)
        .subscribe(crew => {
          this.personOnBoardService.setPassengersList(crew);
        });
    }
  }

  ngOnDestroy() {
    this.genderListSubscription.unsubscribe();
    this.personOnBoardTypeSubscription.unsubscribe();
    this.pristineSubscription.unsubscribe();
  }

  uploadError(entriesWithErrors: any[]) {
    this.passengerListErrorModalComponent.openViewModal(entriesWithErrors);
  }

  addPassenger() {
    // Modify
    this.portCallPassengerModel.portCallId = this.portCallId;
    this.portCallPassengerModel.personOnBoardType = this.personOnBoardType;
    this.portCallPassengerModel.personOnBoardTypeId = this.personOnBoardType.personOnBoardTypeId;

    // Add the identityDocumentModel to passengerModel
    this.portCallPassengerModel.identityDocument.push(
      this.identityDocumentModel
    );
    if (
      this.portCallPassengerModel.gender != null &&
      this.portCallPassengerModel.gender.description != null &&
      this.portCallPassengerModel.gender !== undefined &&
      this.portCallPassengerModel.gender.description !== undefined
    ) {
      this.portCallPassengerModel.gender = this.portCallPassengerModel.gender.description;
    }

    this.passengerList.push(this.portCallPassengerModel);
    this.persistData();

    this.clearForm();
  }

  generateSmartTable(): any[] {
    const newList = [];
    if (this.passengerList) {
      this.passengerList.forEach(passenger => {
        const modifiedPassenger = new SmartTableModel();
        if (passenger.personOnBoardId) {
          modifiedPassenger.personOnBoardId = passenger.personOnBoardId;
        }
        modifiedPassenger.sequenceNumber = passenger.sequenceNumber;
        modifiedPassenger.givenName = passenger.givenName;
        modifiedPassenger.familyName = passenger.familyName;
        passenger.dateOfBirth
          ? (modifiedPassenger.dateOfBirth = this.getDisplayDateFormat(
            passenger.dateOfBirth
          ))
          : (modifiedPassenger.dateOfBirth = null);
        passenger.portOfEmbarkation
          ? (modifiedPassenger.portOfEmbarkation = passenger.portOfEmbarkation)
          : (modifiedPassenger.portOfEmbarkation = null);
        passenger.portOfDisembarkation
          ? (modifiedPassenger.portOfDisembarkation =
            passenger.portOfDisembarkation)
          : (modifiedPassenger.portOfDisembarkation = null);
        passenger.nationality
          ? (modifiedPassenger.nationality = passenger.nationality)
          : (modifiedPassenger.nationality = null);
        passenger.gender
          ? (modifiedPassenger.gender = passenger.gender)
          : (modifiedPassenger.gender = null);
        modifiedPassenger.countryOfBirthTwoCharCode =
          passenger.nationalityTwoCharCode;
        modifiedPassenger.nationalityTwoCharCode =
          passenger.nationalityTwoCharCode;

        newList.push(modifiedPassenger);
      });
    }
    return newList;
  }

  persistData() {
    this.updateSequenceNumbers();
    this.personOnBoardService.setPassengersList(this.passengerList);
    this.touchData();
    this.reloadTable();
  }

  touchData() {
    this.listIsPristine = false;
    this.personOnBoardService.setPassengerDataIsPristine(false);
  }

  clearForm() {
    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();
    this.resetDateOfBirth();
    this.identityDocumentComponent.resetForm();
  }

  reloadTable() {
    const rows = this.generateSmartTable();
    this.passengerListDataSource.load(rows);
  }

  makeLocationModel($event) {
    const tempLocationModel = Object.assign(new LocationModel(), $event);
    return tempLocationModel;
  }

  // Setters
  setIdentityDocumentModel($event) {
    this.identityDocumentModel = $event.identityDocumentModel;
    this.validDocumentDates =
      $event.validDocumentDates.issueDateAfterExpiryDateError ||
        $event.validDocumentDates.expiryDateBeforeExpiryDateError
        ? false
        : true;

    this.issueDateRequiredError =
      $event.validDocumentDates.issueDateRequiredError;
    this.expiryDateRequiredError =
      $event.validDocumentDates.expiryDateRequiredError;

    this.validDocumentDates =
      this.validDocumentDates &&
      this.issueDateRequiredError &&
      this.expiryDateRequiredError;
  }

  setPortOfEmbarkation($event) {
    this.portCallPassengerModel.portOfEmbarkation = this.makeLocationModel(
      $event
    );
    this.portCallPassengerModel.portOfEmbarkationId = $event.locationId;
  }

  setPortOfDisembarkation($event) {
    this.portCallPassengerModel.portOfDisembarkation = this.makeLocationModel(
      $event
    );
    this.portCallPassengerModel.portOfDisembarkationId = $event.locationId;
  }

  setDateOfBirth($event) {
    if ($event) {
      const date: Date = new Date($event.year, $event.month - 1, $event.day);
      this.portCallPassengerModel.dateOfBirth = date;
    } else {
      this.portCallPassengerModel.dateOfBirth = null;
    }
  }

  setGender($event) {
    this.portCallPassengerModel.gender = $event;
    this.portCallPassengerModel.genderId = $event.genderId;
  }

  setCountryOfBirth($event) {
    this.portCallPassengerModel.countryOfBirth = $event.item;
    this.portCallPassengerModel.countryOfBirthId = $event.item.countryId;
  }

  setNationality($event) {
    this.portCallPassengerModel.nationality = $event.item;
    this.portCallPassengerModel.nationalityId = $event.item.countryId;
  }

  setTransit($event) {
    this.inTransit = $event;
    Object.keys(this.booleanModel).forEach(key => {
      if (key === $event) {
        this.portCallPassengerModel.inTransit = this.booleanModel[key];
        return;
      }
    });
  }

  // Resetters
  resetPortOfDisembarkation() {
    this.portCallPassengerModel.portOfDisembarkation = null;
    this.portCallPassengerModel.portOfDisembarkationId = null;
  }

  resetPortOfEmbarkation() {
    this.portCallPassengerModel.portOfEmbarkation = null;
    this.portCallPassengerModel.portOfEmbarkationId = null;
  }

  resetNationality() {
    this.portCallPassengerModel.nationality = null;
    this.portCallPassengerModel.nationalityId = null;
  }

  resetCountryOfBirth() {
    this.portCallPassengerModel.countryOfBirth = null;
    this.portCallPassengerModel.countryOfBirthId = null;
  }

  resetIssuingNation() {
    this.identityDocumentModel.issuingNation = null;
    this.identityDocumentModel.issuingNationId = null;
  }

  resetDateOfBirth() {
    this.portCallPassengerModel.dateOfBirth = null;
    this.dateOfBirthComponent.dateChanged(null);
  }

  makeDates(passenger: PersonOnBoardModel) {
    passenger.dateOfBirth =
      passenger.dateOfBirth != null ? new Date(passenger.dateOfBirth) : null;
    passenger.identityDocument.forEach(identityDocument => {
      identityDocument.identityDocumentIssueDate =
        identityDocument.identityDocumentIssueDate != null
          ? new Date(identityDocument.identityDocumentIssueDate)
          : null;
      identityDocument.identityDocumentExpiryDate =
        identityDocument.identityDocumentExpiryDate != null
          ? new Date(identityDocument.identityDocumentExpiryDate)
          : null;
    });
    return passenger;
  }

  openViewPassengerModal(row) {
    this.passengerList.forEach(passenger => {
      if (passenger.sequenceNumber === row.sequenceNumber) {
        this.passengerModalComponent.openViewModal(passenger);
        return;
      }
    });
  }

  openEditPassengerModal(row) {
    this.passengerList.forEach(passenger => {
      if (passenger.sequenceNumber === row.sequenceNumber) {
        this.passengerModalComponent.openEditModal(passenger);
        return;
      }
    });
  }

  editPassenger($event) {
    // Set corresponding passenger to the edited instance
    this.passengerList[
      this.passengerList.findIndex(
        p => p.sequenceNumber === $event.sequenceNumber
      )
    ] = JSON.parse(JSON.stringify($event));
    this.personOnBoardService.setPassengersList(this.passengerList);
    // Make all dates Date objects again
    this.passengerList.forEach(passenger => {
      passenger = this.makeDates(passenger);
    });
    // Load to smart table
    this.reloadTable();
    this.touchData();
  }

  deletePassenger(row) {
    if (this.passengerList.length <= 1) {
      this.passengerList = [];
    } else {
      this.passengerList.forEach((item, index) => {
        if (item.sequenceNumber === row.sequenceNumber) {
          this.passengerList.splice(index, 1);
        }
      });
    }
    this.persistData();
  }

  deleteAllPassengers() {
    this.passengerList = [];
    this.persistData();
  }

  savePassengers() {
    this.personOnBoardService
      .updatePersonOnBoardList(
        this.portCallId,
        this.passengerList,
        this.personOnBoardType.personOnBoardTypeId
      )
      .subscribe(res => {
        this.listIsPristine = true;
        this.personOnBoardService.setPassengerDataIsPristine(true);
      });
  }

  addRectifiedCrewAndPax($event) {
    const paxList = $event.filter((x: { isPax: any; }) => x.isPax);
    let crewList = $event.filter((x: { isPax: any; }) => !x.isPax);
    if ($event != null && $event !== undefined) {
      this.passengerList = this.passengerList.concat(paxList);
      this.persistData();
      this.personOnBoardService.getCrewListByPortCallId(this.portCallId)
        .finally(() => {
          this.personOnBoardService.setCrewList(crewList);
          this.personOnBoardService.setCrewDataIsPristine(false);
        })
        .subscribe(res => {
          crewList = crewList.concat(res);
        });
    }
  }

  importSuccess($event) {
    if ($event) {
      this.passengerListErrorModalComponent.openSuccessModal();
    } else {
      this.passengerListErrorModalComponent.openErrorModal();
    }
  }
  // Helper methods

  private updateSequenceNumbers() {
    this.passengerList.forEach((passenger, index) => {
      passenger.sequenceNumber = index + 1;
    });
  }

  getDisplayDateFormat(date) {
    if (date) {
      date = new Date(date);
      const dateString =
        date.getFullYear() +
        '-' +
        ('0' + (date.getMonth() + 1)).slice(-2) +
        '-' +
        ('0' + date.getDate()).slice(-2);
      return dateString;
    } else {
      return null;
    }
  }

  getNgbDateFormat(date) {
    const newDate = new Date(date);
    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate()
    };
  }

  openWarningModal(content: any) {
    this.modalService.open(content);
  }
}

