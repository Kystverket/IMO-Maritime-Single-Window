import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PortCallFalPersonOnBoardService } from '../../../../../../shared/services/port-call-fal-person-on-board.service';
import { NgForm } from '../../../../../../../../node_modules/@angular/forms';
import { PassengerModalComponent } from '../passenger-list/passenger-modal/passenger-modal.component';
import { IdentityDocumentComponent } from '../shared/identity-document/identity-document.component';
import { PersonOnBoardModel } from '../../../../../../shared/models/person-on-board-model';
import { PersonOnBoardTypeModel } from '../../../../../../shared/models/person-on-board-type-model';
import { IdentityDocumentModel } from '../../../../../../shared/models/identity-document-model';
import { Observable } from 'rxjs/Observable';
import { GenderModel } from '../../../../../../shared/models/gender-model';
import { LocalDataSource } from '../../../../../../../../node_modules/ng2-smart-table';
import { ActionButtonsComponent } from '../shared/action-buttons/action-buttons.component';
import { Subscription } from '../../../../../../../../node_modules/rxjs';
import { IdentityDocumentService } from '../../../../../../shared/services/identtity-document.service';
import { LocationModel } from '../../../../../../shared/models/location-model';
import { SmartTableModel } from '../passenger-list/smartTableModel';
import { NgbModal } from '../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  @Input() portCallId;
  @Input() crewList;

  identityDocumentList: IdentityDocumentModel[] = [];

  portCallCrewModel: PersonOnBoardModel = new PersonOnBoardModel();

  genderList: GenderModel[];
  selectedGender: GenderModel;
  identityDocTypeList: Observable<any>;
  identityDocumentModel: IdentityDocumentModel = new IdentityDocumentModel();
  personOnBoardType: PersonOnBoardTypeModel;
  // selectedIdentityDocType: IdentityDocumentModel;

  modalModel: PersonOnBoardModel = new PersonOnBoardModel();
  listIsPristine: Boolean = true;

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

  crewListDataSource: LocalDataSource = new LocalDataSource();
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
    noDataMessage: 'There are no crew members in this list.',
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

  crewListSubscription: Subscription;
  detailsIdentificationDataSubscription: Subscription;


  constructor(
    private personOnBoardService: PortCallFalPersonOnBoardService,
    private identityDocumentService: IdentityDocumentService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    let personOnBoardList;
    this.personOnBoardService.getPersonOnBoardListByPortCallId(this.portCallId).subscribe((res: PersonOnBoardModel[]) => {
      console.log(res);
      personOnBoardList = res ;
      console.log(personOnBoardList);

      personOnBoardList.forEach(personOnBoard => {
        personOnBoard.dateOfBirth = personOnBoard.dateOfBirth != null ? new Date(personOnBoard.dateOfBirth) : null;
        personOnBoard.identityDocument[0].identityDocumentIssueDate = personOnBoard.identityDocument[0].identityDocumentIssueDate != null ? new Date(personOnBoard.identityDocument[0].identityDocumentIssueDate) : null;
        personOnBoard.identityDocument[0].identityDocumentExpiryDate = personOnBoard.identityDocument[0].identityDocumentExpiryDate != null ? new Date(personOnBoard.identityDocument[0].identityDocumentExpiryDate) : null;
      });

      console.log(this.personOnBoardService.cleanPersonOnBoardList(personOnBoardList));
    });
    this.personOnBoardService.getPersonOnBoardById(45);
    this.personOnBoardService.getCrewListByPortCallId(this.portCallId);
  // Initiate models
  this.portCallCrewModel = new PersonOnBoardModel();
  this.identityDocumentModel = new IdentityDocumentModel();

  this.identityDocumentService.identityDocumentList$.subscribe(list => {
    if (list) {
      this.identityDocumentList = list;
    }
  });

  // Get gender list
  if (!this.genderList) {
    this.personOnBoardService.getGenderList().subscribe(results => {
      this.genderList = results;
    });
  }

  this.personOnBoardService.getPersonOnBoardType(2).subscribe(personOnBoardType => {
    this.personOnBoardType = personOnBoardType;
  });

  if (this.crewList) {
    this.crewList.forEach(crewMember => {
      crewMember.dateOfBirth = crewMember.dateOfBirth != null ? new Date(crewMember.dateOfBirth) : null;
      crewMember.identityDocument.forEach(identityDocument => {
        identityDocument.identityDocumentIssueDate = identityDocument.identityDocumentIssueDate != null ? new Date(identityDocument.identityDocumentIssueDate) : null;
        identityDocument.identityDocumentExpiryDate = identityDocument.identityDocumentExpiryDate != null ? new Date(identityDocument.identityDocumentExpiryDate) : null;
      });
    });
  }

  // Load in crewMember list in smart table

  this.crewListDataSource.load(this.generateSmartTable(this.crewList));
  this.personOnBoardService.setCrewList(this.crewList);
  this.personOnBoardService.setCrewDataIsPristine(true);
}

addPassenger() {
  // Modify
  this.portCallCrewModel.portCallId = this.portCallId;
  this.portCallCrewModel.personOnBoardType = this.personOnBoardType;
  this.portCallCrewModel.personOnBoardTypeId = this.personOnBoardType.personOnBoardTypeId;
  this.portCallCrewModel.sequenceNumber = this.crewList[this.crewList.length - 1].sequenceNumber + 1;

  this.portCallCrewModel.identityDocument.push(this.identityDocumentModel);

  // Add
  this.crewList.push(this.portCallCrewModel);

  // Update values in service
  this.personOnBoardService.setCrewList(
    this.crewList
  );

  // Reset
  this.portCallCrewModel = new PersonOnBoardModel();
  this.identityDocumentModel = new IdentityDocumentModel();
  this.resetDateOfBirth();
  this.identityDocumentComponent.resetForm();
  this.crewListDataSource.load(this.generateSmartTable(this.crewList));
  this.listIsPristine = false;
  this.personOnBoardService.setCrewDataIsPristine(false);
}

/*   ngOnDestroy()  {
  this.detailsIdentificationDataSubscription.unsubscribe();
} */


generateSmartTable(crewList): any[] {
  const newList = [];
  if (crewList) {
    crewList.forEach(crewMember => {
      newList.push(this.makeSmartTableEntry(crewMember));
    });
  }
  return newList;
}

makeSmartTableEntry(crewMember) {
  const modifiedPassenger = new SmartTableModel();
  if (crewMember.personOnBoardId) {
    modifiedPassenger.personOnBoardId = crewMember.personOnBoardId;
  }
  modifiedPassenger.sequenceNumber = crewMember.sequenceNumber;
  modifiedPassenger.givenName = crewMember.givenName;
  modifiedPassenger.familyName = crewMember.familyName;
  if (crewMember.dateOfBirth) {
      modifiedPassenger.dateOfBirth = this.getDisplayDateFormat(crewMember.dateOfBirth);
  }
  if (crewMember.portOfEmbarkation) {
    modifiedPassenger.portOfEmbarkation = crewMember.portOfEmbarkation.name;
  }
  if (crewMember.portOfDisembarkation) {
    modifiedPassenger.portOfDisembarkation = crewMember.portOfDisembarkation.name;
  }
  if (crewMember.nationality) {
    modifiedPassenger.nationality = crewMember.nationality.name;
  }
  if (crewMember.gender) {
    modifiedPassenger.gender = crewMember.gender.description;
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
  this.validDocumentDates = $event.validDocumentDates;
}

setPortOfEmbarkation($event) {
  this.portCallCrewModel.portOfEmbarkation = this.makeLocationModel($event);
  this.portCallCrewModel.portOfEmbarkationId = $event.locationId;
}

setPortOfDisembarkation($event) {
  this.portCallCrewModel.portOfDisembarkation = this.makeLocationModel($event);
  this.portCallCrewModel.portOfDisembarkationId = $event.locationId;
}

setDateOfBirth($event) {
  if ($event) {
    const date: Date = new Date($event.year, $event.month -  1, $event.day);
    this.portCallCrewModel.dateOfBirth = date;
  } else {
    this.portCallCrewModel.dateOfBirth = null;
  }
}

setGender($event) {
  this.portCallCrewModel.gender = $event;
  this.portCallCrewModel.genderId = $event.genderId;
}

setCountryOfBirth($event) {
  this.portCallCrewModel.countryOfBirth = $event.item;
  this.portCallCrewModel.countryOfBirthId = $event.item.countryId;
}

setNationality($event) {
  this.portCallCrewModel.nationality = $event.item;
  this.portCallCrewModel.nationalityId = $event.item.countryId;
}

setTransit($event) {
  this.inTransit = $event;
  Object.keys(this.booleanModel).forEach(key => {
    if (key === $event) {
      this.portCallCrewModel.inTransit = this.booleanModel[key];
      return;
    }
  });
}

// Resetters
resetPortOfDisembarkation() {
  this.portCallCrewModel.portOfDisembarkation = null;
  this.portCallCrewModel.portOfDisembarkationId = null;
}

resetPortOfEmbarkation() {
  this.portCallCrewModel.portOfEmbarkation = null;
  this.portCallCrewModel.portOfEmbarkationId = null;
}

resetNationality() {
  this.portCallCrewModel.nationality = null;
  this.portCallCrewModel.nationalityId = null;
}

resetCountryOfBirth() {
  this.portCallCrewModel.countryOfBirth = null;
  this.portCallCrewModel.countryOfBirthId = null;
}

resetIssuingNation() {
  this.identityDocumentModel.issuingNation = null;
  this.identityDocumentModel.issuingNationId = null;
}

resetDateOfBirth() {
  this.portCallCrewModel.dateOfBirth = null;
  this.dateOfBirthComponent.dateChanged(null);
}

openViewPassengerModal(row) {
  this.crewList.forEach(crewMember => {
    if (crewMember.sequenceNumber === row.sequenceNumber) {
      this.passengerModalComponent.openViewModal(crewMember);
      return;
    }
  });
}

openEditPassengerModal(row) {
  this.crewList.forEach(crewMember => {
    if (crewMember.sequenceNumber === row.sequenceNumber) {
      this.passengerModalComponent.openEditModal(crewMember);
      return;
    }
  });
}

editPassenger($event) {
  // It gets updated automatically
  this.personOnBoardService.setCrewList(this.crewList);
  this.crewListDataSource.load(this.generateSmartTable(this.crewList));
  this.listIsPristine = false;
  this.personOnBoardService.setCrewDataIsPristine(false);
}

deletePassenger(row) {
  if (this.crewList.length <= 1) {
    this.crewList = [];
  } else {
    this.crewList.forEach((item, index) => {
      if (item.sequenceNumber === row.sequenceNumber) {
        this.crewList.splice(index, 1);
      }
    });
  }
  this.setSequenceNumbers();
  this.personOnBoardService.setCrewList(this.crewList);
  this.crewListDataSource.load(this.generateSmartTable(this.crewList));
  this.listIsPristine = false;
  this.personOnBoardService.setCrewDataIsPristine(false);
}

deleteAllPassengers() {
  this.crewList = [];
  this.listIsPristine = false;
  this.personOnBoardService.setCrewDataIsPristine(false);
  this.crewListDataSource.load(this.generateSmartTable(this.crewList));
}

savePassengers() {
  this.personOnBoardService.updatePersonOnBoardList(this.portCallId, this.crewList, this.personOnBoardType.personOnBoardTypeId).subscribe(res => {
    this.listIsPristine = true;
    this.personOnBoardService.setCrewDataIsPristine(true);
  });
}


  // Helper methods

  setSequenceNumbers() {
    let tempSequenceNumber = 1;
    this.crewList.forEach(crewMember => {
      crewMember.sequenceNumber = tempSequenceNumber;
      tempSequenceNumber++;
    });
  }

  getDateFormatFromNgb(date) {
    return new Date(date.year, date.month, date.day);
  }

  getDisplayDateFormat(date) {
    if (date) {
      console.log(date);
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
