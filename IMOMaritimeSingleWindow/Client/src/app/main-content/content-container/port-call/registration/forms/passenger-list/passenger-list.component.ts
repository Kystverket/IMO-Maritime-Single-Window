import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { SmartTableModel } from './smartTableModel';
import { PortModel } from './portModel';
import { Observable } from 'rxjs/Observable';
import { GenderModel } from 'app/shared/models/gender-model';
import { IdentityDocumentModel } from 'app/shared/models/identity-document-model';
import { Subscription } from 'rxjs/Subscription';
import { PortCallService } from 'app/shared/services/port-call.service';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { ActionButtonsComponent } from '../shared/action-buttons/action-buttons.component';
import { NgbModal } from '../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';

declare var $: any;

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  portCallPassengerList: PersonOnBoardModel[] = [];
  identityDocumentList: IdentityDocumentModel[] = [];

  portCallPassengerModel: PersonOnBoardModel = new PersonOnBoardModel();

  portCallId: number;

  genderList: Observable<any>;
  selectedGender: GenderModel;
  identityDocTypeList: Observable<any>;
  identityDocumentModel: IdentityDocumentModel = new IdentityDocumentModel();
  // selectedIdentityDocType: IdentityDocumentModel;

  modalModel: PersonOnBoardModel = new PersonOnBoardModel();
  listIsPristine = true;

  @ViewChild(NgForm) mainForm: NgForm;
  @ViewChild('viewModal') viewModal;
  @ViewChild('editModal') editModal;

  booleanList: string[] = ['Yes', 'No'];
  booleanModel = {
    'Yes': true,
    'No': false
  };
  inTransit: boolean = null;

  formValid = false;

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
            this.viewPassenger(row);
          });
          instance.edit.subscribe(row => {
            this.editPassenger(row);
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
    // Generate smart table list from existing data
    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();

    // Subscribe to port call
    this.detailsIdentificationDataSubscription = this.portCallService.detailsIdentificationData$.subscribe(element => {
      if (element) {
        this.portCallPassengerModel.portCallId = element.portCallId;
        this.portCallId = element.portCallId;

        this.identityDocumentService.identityDocumentList$.subscribe(list => {
          if (list) {
            this.identityDocumentList = list;
          }
        });

        this.passengerListSubscription = this.passengerListService.passengerList$.subscribe(list => {
          if (list) {
            this.portCallPassengerList = list;
            this.portCallPassengerModel.portCallId = element.portCallId;
          }

          // Get gender list
          if (!this.genderList) {
            this.passengerListService.getGenderList().subscribe(results => {
              this.genderList = results;
            });
          }

          this.passengerListDataSource.load(this.generateSmartTable());
        });
      }

    });

    // On start
    this.passengerListService.getPassengerListByPortCallId(this.portCallId).subscribe(list => {

      this.passengerListDataSource = new LocalDataSource();
      this.portCallPassengerList = [];

      if (list) {
        this.passengerListService.setPassengersList(list);
      }
    });
  }

  addPassenger() {
    console.log(this.portCallPassengerModel);
    this.listIsPristine = false;
    this.passengerListService.setDataIsPristine(false);

    console.log(this.identityDocumentModel);
    // Modify
    this.portCallPassengerModel.personOnBoardTypeId = 2;
    this.portCallPassengerModel.identityDocument.push(this.identityDocumentModel);

    // Add
    this.portCallPassengerList.push(this.portCallPassengerModel);
    // this.identityDocumentList.push(this.identityDocumentModel);

    // Update values in service
    this.passengerListService.setPassengersList(
      this.portCallPassengerList
    );
    // this.identityDocumentService.setIdentityDocumentList(this.identityDocumentList);

    // Reset
    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();
    this.deselectIssuingNation();
    this.deselectCountryOfBirth();
    this.deselectNationality();
  }

/*   ngOnDestroy()  {
    this.detailsIdentificationDataSubscription.unsubscribe();
  } */

  generateSmartTable(): any[] {
    const newList = [];
    if (this.portCallPassengerList) {
      this.portCallPassengerList.forEach(passenger => {
        newList.push(this.makeSmartTableEntry(passenger));
      });
    }
    console.log(newList);
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
        modifiedPassenger.dateOfBirth = passenger.dateOfBirth;
      } else {
        modifiedPassenger.dateOfBirth = passenger.dateOfBirth.toUTCString();
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
    this.passengerListService.setPassengerListMeta({ valid: this.mainForm.valid });
  }

  //  one passenger to smart table
/*   ToSmartTable(passenger) {
    this.smartTableList.push(this.makeSmartTableEntry(passenger));
    this.passengerListDataSource.load(this.smartTableList);
  } */

  makePortModel($event) {
    const tempPortModel = new PortModel();
    tempPortModel.locationId = $event.locationId;
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
    this.identityDocumentModel = $event;
    console.log(this.identityDocumentModel);
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
    this.portCallPassengerModel.dateOfBirth = this.getDateFormat($event);
  }

  selectGender($event) {
    this.portCallPassengerModel.gender = $event;
    this.portCallPassengerModel.genderId = $event.genderId;
  }

  setCountryOfBirth($event) {
    this.portCallPassengerModel.countryOfBirth = $event.item.name;
    this.portCallPassengerModel.countryOfBirthId = $event.item.countryId;
  }

  setNationality($event) {
    this.portCallPassengerModel.nationality = $event.item.name;
    this.portCallPassengerModel.nationalityId = $event.item.countryId;
  }

  selectTransit($event) {
    this.inTransit = $event;
    Object.keys(this.booleanModel).forEach(key => {
      if (key === $event) {
        this.portCallPassengerModel.inTransit = this.booleanModel[key];
        return;
      }
    });
  }

  // Deselect Methods
  deselectPortOfDisembarkation() {
    this.portCallPassengerModel.portOfDisembarkation = null;
    this.portCallPassengerModel.portOfDisembarkationId = null;
  }

  deselectPortOfEmbarkation() {
    this.portCallPassengerModel.portOfEmbarkation = null;
    this.portCallPassengerModel.portOfEmbarkationId = null;
  }

  deselectNationality() {
    this.portCallPassengerModel.nationality = null;
    this.portCallPassengerModel.nationalityId = null;
  }

  deselectCountryOfBirth() {
    this.portCallPassengerModel.countryOfBirth = null;
    this.portCallPassengerModel.countryOfBirthId = null;
  }

  deselectIssuingNation() {
    this.identityDocumentModel.issuingNation = null;
    this.identityDocumentModel.issuingNationId = null;
  }

  // Helper methods

  getDateFormat(date) {
    const dateString = date.year + '-' + date.month + '-' + (date.day + 1);
    return new Date(dateString);

  }

  getNgbDateFormat(date) {
    const newDate = new Date(date);
    return {
      year: newDate.getFullYear(),
      month: newDate.getMonth() + 1,
      day: newDate.getDate()
    };
  }

  viewPassenger(row) {
    console.log('View!');
    console.log(row);
    this.getModel(row);
    this.modalService.open(this.viewModal);
  }

  editPassenger(row) {
    console.log('Edit!');
    console.log(row);
    this.getModel(row);
    this.modalService.open(this.editModal);
  }

  deletePassenger(row) {
    this.passengerListService.deletePassengerEntry(row);
  }

  getModel(row) {
    if (row.personOnBoardId) {
      this.passengerListService.getPassengerByPortCallId(this.portCallId, row.personOnBoardId)
      .subscribe(res => {
        console.log(res);
        this.modalModel = res;
      });
    } else  {
      this.portCallPassengerList.forEach(passenger => {
        if (passenger.sequenceNumber === row.sequenceNumber) {
          console.log(passenger);
          this.modalModel = passenger;
          return;
        }
      });
    }
  }

  addMockData() {
    const mockportCallPassengerModel = new PersonOnBoardModel();
    console.log(mockportCallPassengerModel);
    // const mockIdentityDocumentModel = new IdentityDocumentModel();
    mockportCallPassengerModel.familyName = 'Karlsen';
    mockportCallPassengerModel.givenName = 'Unni';
    // mockIdentityDocumentModel.issuingNation = 'Norway';

    mockportCallPassengerModel.genderId = 3;

    mockportCallPassengerModel.dateOfBirth = this.getDateFormat({year: 1994, month: 7, day: 13});

    const mockPortOfEmbakrationModel = new PortModel();
    mockPortOfEmbakrationModel.name = 'Porsgrunn';

    const mockPortOfDisembakrationModel = new PortModel();
    mockPortOfDisembakrationModel.name = 'Kiel';

    this.portCallPassengerModel = mockportCallPassengerModel;
    // this.identityDocumentModel = mockIdentityDocumentModel;
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
}
