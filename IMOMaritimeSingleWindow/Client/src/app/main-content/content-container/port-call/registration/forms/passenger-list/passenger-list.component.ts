import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { SmartTableModel } from './smartTableModel';
import { PortModel } from './portModel';
import { Observable } from 'rxjs/Observable';
import { GenderModel } from 'app/shared/models/gender-model';
import { IdentityDocumentModel } from 'app/shared/models/identity-document-model';
import { Subscription } from 'rxjs/Subscription';
import { PortCallService } from 'app/shared/services/port-call.service';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { ActionButtonsComponent } from '../shared/action-buttons/action-buttons.component';
import { PassengerModalComponent } from './passenger-modal/passenger-modal.component';
import { IdentityDocumentComponent } from '../shared/identity-document/identity-document.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectDateComponent } from '../shared/select-date/select-date.component';
import { PersonOnBoardTypeModel } from 'app/shared/models/person-on-board-type-model';

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

  genderList: Observable<any>;
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
    private passengerListService: PortCallPassengerListService,
    private portCallService: PortCallService,
    private identityDocumentService: IdentityDocumentService,
    private modalService: NgbModal
  ) {}


  ngOnInit() {
    this.passengerListDataSource.load(this.generateSmartTable(this.passengerList));
    // Generate smart table list from existing data
    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();

    // Subscribe to port call
    this.detailsIdentificationDataSubscription = this.portCallService.portCallIdData$.subscribe(portCallIdData => {
      if (portCallIdData) {
        this.portCallPassengerModel.portCallId = portCallIdData;
        this.portCallId = portCallIdData;

        this.passengerListService.passengerListMeta$.subscribe(valid => {
          this.formValid = valid;
        });

        this.identityDocumentService.identityDocumentList$.subscribe(list => {
          if (list) {
            this.identityDocumentList = list;
          }
        });

        this.passengerListService.dataIsPristine$.subscribe(isPristine => {
          this.listIsPristine = isPristine;
        });
        // Get gender list
        if (!this.genderList) {
          this.passengerListService.getGenderList().subscribe(results => {
            this.genderList = results;
          });
        }

/*         this.passengerListSubscription = this.passengerListService.passengerList$.subscribe(list => {
          if (list) {
            console.log(list);
            this.passengerList = list;
            this.portCallPassengerModel.portCallId = portCallIdData;
            this.passengerListDataSource.load(this.generateSmartTable(list));
          }
        }); */
      }

    });

    this.passengerListService.getPersonOnBoardType(2).subscribe(personOnBoardType => {
      this.personOnBoardType = personOnBoardType;
      console.log(this.personOnBoardType);
    });
  }

  addPassenger() {
    // Modify
    this.portCallPassengerModel.portCallId = this.portCallId;
    this.portCallPassengerModel.personOnBoardType = this.personOnBoardType;
    this.portCallPassengerModel.personOnBoardTypeId = this.personOnBoardType.personOnBoardTypeId;

    this.portCallPassengerModel.identityDocument.push(this.identityDocumentModel);

    // Add
    this.passengerList.push(this.portCallPassengerModel);
    // this.identityDocumentList.push(this.identityDocumentModel);

    // Update values in service
    this.passengerListService.setPassengersList(
      this.passengerList
    );

    console.log(this.portCallPassengerModel);

    // Reset
    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();
    this.identityDocumentComponent.resetForm();
    // this.dateOfBirthComponent.set
    console.log(this.passengerList);
    this.passengerListDataSource.load(this.generateSmartTable(this.passengerList));
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
      if (typeof passenger.dateOfBirth === 'string') {
        modifiedPassenger.dateOfBirth = passenger.dateOfBirth.split('T')[0];
      } else {
        modifiedPassenger.dateOfBirth = passenger.dateOfBirth.getFullYear() + '-' + passenger.dateOfBirth.getMonth() + '-' + passenger.dateOfBirth.getDate();
      }
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

    /*Object.keys(this.booleanModel).forEach(key => {
      if (this.booleanModel[key] === passenger.inTransit) {
        modifiedPassenger.inTransit = key;
      }
    });*/
    return modifiedPassenger;
  }

  isValid(valid: Boolean): Boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.passengerListService.setPassengerListMeta({ valid: this.form.valid });
  }

  makePortModel($event) {
    const tempPortModel = new PortModel();
    tempPortModel.locationId = $event.locationId;
    tempPortModel.country = $event.country;
    tempPortModel.countryId = $event.countryId;
    tempPortModel.name = $event.name;

    return tempPortModel;
  }

  setPortData(portdata) {
    const portModel = new PortModel();
    portModel.locationId = portdata.locationId;
    portModel.countryId = portdata.countryId;
    portModel.name = portdata.name;

    return portModel;
  }

  // Select Methods
  setIdentityDocumentModel($event) {
    console.log($event);
    this.identityDocumentModel = $event.identityDocumentModel;
    this.validDocumentDates = $event.validDocumentDates;
  }

  setPortOfEmbarkation($event) {
    this.portCallPassengerModel.portOfEmbarkation = this.makePortModel($event);
    this.portCallPassengerModel.portOfEmbarkationId = $event.locationId;
  }

  setPortOfDisembarkation($event) {
    this.portCallPassengerModel.portOfDisembarkation = this.makePortModel($event);
    this.portCallPassengerModel.portOfDisembarkationId = $event.locationId;
  }

  setDateOfBirth($event) {
    if ($event) {
      this.portCallPassengerModel.dateOfBirth = this.getDateFormat($event);
    } else {
      this.resetDateOfBirth();
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

  // Deselect Methods
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
  }

  // Helper methods

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

  openViewPassengerModal(row) {
      this.passengerList.forEach(passenger => {
        if (passenger.sequenceNumber === row.sequenceNumber) {
          this.passengerModalComponent.openViewModal(passenger);
          return;
        }
      });
  }

  openEditPassengerModal(row) {
    console.log(this.passengerList);
    // set editPassengerId?
    this.passengerList.forEach(passenger => {
      if (passenger.sequenceNumber === row.sequenceNumber) {
        this.passengerModalComponent.openEditModal(passenger);
        return;
      }
    });
  }

  editPassenger($event) {
    this.passengerList.forEach((passenger, index) => {
      if (passenger.sequenceNumber === $event.sequenceNumber) {
        this.passengerList[index] = $event;
        this.passengerList[index].identityDocument[0] = $event.identityDocument[0];
        return;
      }
    });
    this.passengerListService.setPassengersList(this.passengerList);
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
    console.log(this.passengerList);
    this.setSequenceNumbers();
    this.passengerListService.setPassengersList(this.passengerList);
    this.passengerListDataSource.load(this.generateSmartTable(this.passengerList));
  }

  setSequenceNumbers() {
    let tempSequenceNumber = 1;
    this.passengerList.forEach(passenger => {
      passenger.sequenceNumber = tempSequenceNumber;
      tempSequenceNumber++;
    });
  }

  deleteAllPassengers() {
    this.passengerListService.setPassengersList([]);
  }

  savePassengers() {
    this.passengerListService.updatePassengerList(this.passengerList, this.portCallId, this.personOnBoardType.personOnBoardTypeId).subscribe(res => console.log(res));
  }




  addMockData() {
    const mockportCallPassengerModel = new PersonOnBoardModel();
    mockportCallPassengerModel.familyName = 'Karlsen';
    mockportCallPassengerModel.givenName = 'Unni';
    mockportCallPassengerModel.dateOfBirth = this.getDateFormat({year: 1994, month: 7, day: 13});
    this.portCallPassengerModel = mockportCallPassengerModel;
    this.addPassenger();
  }

    mockFillForm() {
      this.portCallPassengerModel.familyName = 'Dalan';
      this.portCallPassengerModel.givenName = 'Camilla';
      this.portCallPassengerModel.dateOfBirth = new Date();
      this.portCallPassengerModel.placeOfBirth = 'Oslo';
      this.identityDocumentModel.identityDocumentNumber = 4232;
      this.identityDocumentModel.visaOrResidencePermitNumber = 421;
    }

    openWarningModal(content: any) {
      this.modalService.open(content);
    }
}
