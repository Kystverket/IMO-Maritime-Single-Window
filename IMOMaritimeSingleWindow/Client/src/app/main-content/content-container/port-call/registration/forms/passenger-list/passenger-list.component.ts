import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { SmartTableModel } from './smartTableModel';
import { GenderModel } from 'app/shared/models/gender-model';
import { IdentityDocumentModel } from 'app/shared/models/identity-document-model';
import { Subscription } from 'rxjs/Subscription';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { ActionButtonsComponent } from '../shared/action-buttons/action-buttons.component';
import { PassengerModalComponent } from './passenger-modal/passenger-modal.component';
import { IdentityDocumentComponent } from '../shared/identity-document/identity-document.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonOnBoardTypeModel } from 'app/shared/models/person-on-board-type-model';
import { LocationModel } from 'app/shared/models/location-model';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  @Input() portCallId: number;
  @Input() passengerList: PersonOnBoardModel[] = [];

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

  @ViewChild(NgForm) form: NgForm;

  booleanList: string[] = ['Yes', 'No'];
  booleanModel = {
    'Yes': true,
    'No': false
  };
  inTransit: boolean = null;

  formValid = true;
  validDocumentDates = true;

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
        title: 'Family Name',
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
        title: 'Date of Birth'
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
        onComponentInitFunction: (instance) => {
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
      },
    }
  };

  passengerListSubscription: Subscription;
  detailsIdentificationDataSubscription: Subscription;

  constructor(
    private identityDocumentService: IdentityDocumentService,
    private modalService: NgbModal,
    private personOnBoardService: PortCallFalPersonOnBoardService
  ) {}


  ngOnInit() {

    if (this.passengerList) {
      this.passengerList.forEach(passenger => {
        passenger = this.makeDates(passenger);
      });
    }
    // Load in passenger list in smart table
    this.passengerListDataSource.load(this.generateSmartTable(this.passengerList));

    // Initiate models
    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();

    // Get gender list
    if (!this.genderList) {
      this.personOnBoardService.getGenderList().subscribe(results => {
        this.genderList = results;
      });
    }

    // Get passenger person on board type (id 2)
    this.personOnBoardService.getPersonOnBoardType(2).subscribe(personOnBoardType => {
      this.personOnBoardType = personOnBoardType;
    });

    this.personOnBoardService.setPassengersList(this.passengerList);
    this.personOnBoardService.setPassengerDataIsPristine(true);

    this.personOnBoardService.passengerDataIsPristine$.subscribe(isPristine => {
      this.listIsPristine = isPristine;
    });
  }

  addPassenger() {
    // Modify
    this.portCallPassengerModel.portCallId = this.portCallId;
    this.portCallPassengerModel.personOnBoardType = this.personOnBoardType;
    this.portCallPassengerModel.personOnBoardTypeId = this.personOnBoardType.personOnBoardTypeId;
    // If there are any passengers in the list, set sequence number to one more than max value of sequence number in the passenger list.
    if (this.passengerList.length > 0) {
      this.portCallPassengerModel.sequenceNumber = Math.max.apply(Math, this.passengerList.map(crewMember => {
        return crewMember.sequenceNumber + 1;
      }));
    } else {
      this.portCallPassengerModel.sequenceNumber = 1;
    }
// Add the identityDocumentModel to passengerModel
    this.portCallPassengerModel.identityDocument.push(this.identityDocumentModel);

    // Add
    this.passengerList.push(this.portCallPassengerModel);

    // Update values in service
    this.personOnBoardService.setPassengersList(
      this.passengerList
    );

    // Reset
    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();
    this.resetDateOfBirth();
    this.identityDocumentComponent.resetForm();
    this.passengerListDataSource.load(this.generateSmartTable(this.passengerList));
    this.listIsPristine = false;
    this.personOnBoardService.setPassengerDataIsPristine(false);
  }

/*   ngOnDestroy()  {
    this.detailsIdentificationDataSubscription.unsubscribe();
  } */


  generateSmartTable(passengerList): any[] {
    const newList = [];
    if (passengerList) {
      passengerList.forEach(passenger => {
        newList.push(this.makeSmartTableEntry(passenger));
      });
    }
    return newList;
  }

  makeSmartTableEntry(passenger) {
    const modifiedPassenger = new SmartTableModel();
    if (passenger.personOnBoardId) {
      modifiedPassenger.personOnBoardId = passenger.personOnBoardId;
    }
    modifiedPassenger.sequenceNumber = passenger.sequenceNumber;
    modifiedPassenger.givenName = passenger.givenName;
    modifiedPassenger.familyName = passenger.familyName;
    if (passenger.dateOfBirth) {
        modifiedPassenger.dateOfBirth = this.getDisplayDateFormat(passenger.dateOfBirth);
    }
    if (passenger.portOfEmbarkation) {
      modifiedPassenger.portOfEmbarkation = passenger.portOfEmbarkation.name;
    }
    if (passenger.portOfDisembarkation) {
      modifiedPassenger.portOfDisembarkation = passenger.portOfDisembarkation.name;
    }
    if (passenger.nationality) {
      modifiedPassenger.nationality = passenger.nationality.name;
    }
    if (passenger.gender) {
      modifiedPassenger.gender = passenger.gender.description;
    }

    return modifiedPassenger;
  }

  makeLocationModel($event) {
    const tempLocationModel = Object.assign(new LocationModel(), $event);
    return tempLocationModel;
  }

  // Setters
  setIdentityDocumentModel($event) {
    this.identityDocumentModel = $event.identityDocumentModel;
    this.validDocumentDates = $event.validDocumentDates.issueDateAfterExpiryDateError || $event.validDocumentDates.expiryDateBeforeExpiryDateError ? false : true;
  }

  setPortOfEmbarkation($event) {
    this.portCallPassengerModel.portOfEmbarkation = this.makeLocationModel($event);
    this.portCallPassengerModel.portOfEmbarkationId = $event.locationId;
  }

  setPortOfDisembarkation($event) {
    this.portCallPassengerModel.portOfDisembarkation = this.makeLocationModel($event);
    this.portCallPassengerModel.portOfDisembarkationId = $event.locationId;
  }

  setDateOfBirth($event) {
    if ($event) {
      const date: Date = new Date($event.year, $event.month -  1, $event.day);
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
    passenger.dateOfBirth = passenger.dateOfBirth != null ? new Date(passenger.dateOfBirth) : null;
    passenger.identityDocument.forEach(identityDocument => {
          identityDocument.identityDocumentIssueDate = identityDocument.identityDocumentIssueDate != null ? new Date(identityDocument.identityDocumentIssueDate) : null;
          identityDocument.identityDocumentExpiryDate = identityDocument.identityDocumentExpiryDate != null ? new Date(identityDocument.identityDocumentExpiryDate) : null;
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
    // Set corresponding crewMember to the edited instance
    this.passengerList[this.passengerList.findIndex(p => p.sequenceNumber === $event.sequenceNumber)] = JSON.parse(JSON.stringify($event));
    this.personOnBoardService.setCrewList(this.passengerList);
    // Make all dates Date objects again
    this.passengerList.forEach(passenger => { passenger = this.makeDates(passenger); });
    // Load to smart table
    this.passengerListDataSource.load(this.generateSmartTable(this.passengerList));
    this.listIsPristine = false;
    this.personOnBoardService.setCrewDataIsPristine(false);
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
    this.setSequenceNumbers();
    this.personOnBoardService.setPassengersList(this.passengerList);
    this.passengerListDataSource.load(this.generateSmartTable(this.passengerList));
    this.listIsPristine = false;
    this.personOnBoardService.setPassengerDataIsPristine(false);
  }

  deleteAllPassengers() {
    this.passengerList = [];
    this.listIsPristine = false;
    this.personOnBoardService.setPassengerDataIsPristine(false);
    this.passengerListDataSource.load(this.generateSmartTable(this.passengerList));
  }

  savePassengers() {
    this.personOnBoardService.updatePersonOnBoardList(this.portCallId, this.passengerList, this.personOnBoardType.personOnBoardTypeId).subscribe(res => {
        this.listIsPristine = true;
        this.personOnBoardService.setPassengerDataIsPristine(true);
        console.log('Saved passengers.');
    });
  }


    // Helper methods

    setSequenceNumbers() {
      let tempSequenceNumber = 1;
      this.passengerList.forEach(passenger => {
        passenger.sequenceNumber = tempSequenceNumber;
        tempSequenceNumber++;
      });
    }

    getDateFormatFromNgb(date) {
      return new Date(date.year, date.month, date.day);
    }

    getDisplayDateFormat(date) {
      if (date) {
        const dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
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

