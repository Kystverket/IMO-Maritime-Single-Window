import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {

  @ViewChild(NgForm) form: NgForm;

  genderList: Observable<any>;
  selectedGender: GenderModel;
  identityDocTypeList: Observable<any>;

  portCallId: number;
  passengerList: any[] = [];
  passengerModel: PersonOnBoardModel = new PersonOnBoardModel();
  identityDocumentModel: IdentityDocumentModel = new IdentityDocumentModel();
  listIsPristine = true;

  booleanList: string[] = ['Yes', 'No'];
  booleanModel = {
    'Yes': true,
    'No': false
  };
  formTransit: boolean = null;

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
      personOnBoardId: {
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
        renderComponent: DeleteButtonComponent,
      },
    }
  };

  constructor( private passengerListService: PortCallPassengerListService ) { }


  ngOnInit() {
    // Generate smart table list from existing data

    this.passengerListService.passengerList$.subscribe(list => {
      if (list) {
        this.passengerList = list;
        // Update passenger Ids
        // this.resetAllPassengerIds(list);

        // Create smart table
        if (list.length === 0) {
          this.smartTableList = [];
          this.passengerListDataSource.load(this.smartTableList);
        } else if (list.length > 0) {
          this.makeSmartTable(list);
        }
      }
    });

    // Get gender list
    if (!this.genderList) {
      this.passengerListService.getGenderList().subscribe(results => {
        this.genderList = results;
      });
    }

    this.passengerListService.getIdentityDocumentTypes().subscribe(results => {
      this.identityDocTypeList = results;
    });
  }

  addPassenger() {
    this.listIsPristine = false;
    this.passengerModel.identityDocument = this.identityDocumentModel;

    // Add to smart table list
    this.addToSmartTable(this.passengerModel);

    // Add this passenger to local model and create new model
    this.passengerList.push(this.passengerModel);
    this.passengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();

    // Update values in service
    // this.passengerListService.setPassengerModel(this.passengerModel);
    this.passengerListService.setPassengersList(
      this.passengerList
    );

    this.unsetIssuingNation();
    this.unsetCountryOfBirth();
    this.unsetNationality();
  }

  isValid(valid: Boolean): Boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.passengerListService.setPassengerListMeta({ valid: this.form.valid });
  }

  selectCountryOfBirth($event) {
    this.passengerModel.countryOfBirth = $event.name;
  }

  selectTransit($event) {
    this.formTransit = $event;
    Object.keys(this.booleanModel).forEach(key => {
      if (key === $event) {
        this.passengerModel.inTransit = this.booleanModel[key];
        return;
      }
    });
  }

  // Add one passenger to smart table
  addToSmartTable(passenger) {
    this.smartTableList.push(this.makeSmartTableEntry(passenger));
    this.passengerListDataSource.load(this.smartTableList);
  }


  makeSmartTableEntry(passenger) {
    const modifiedPassenger = new SmartTableModel();
    modifiedPassenger.personOnBoardId = passenger.personOnBoardId;
    modifiedPassenger.givenName = passenger.givenName;
    modifiedPassenger.familyName = passenger.familyName;
    if (passenger.nationality) {
      modifiedPassenger.nationality = passenger.nationality;
    }
    if (passenger.dateOfBirth) {
      modifiedPassenger.dateOfBirth = passenger.dateOfBirth.toDateString();
    }
    if (passenger.portOfEmbarkation) {
      modifiedPassenger.portOfEmbarkation = passenger.portOfEmbarkation.name;
    }
    if (passenger.portOfDisembarkation) {
      modifiedPassenger.portOfDisembarkation = passenger.portOfDisembarkation.name;
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

  makeSmartTable(list) {
    const newList = [];
    list.forEach(passenger => {
      if (passenger) {
        newList.push(this.makeSmartTableEntry(passenger));
      }
      // missing nature of identity doc
    });
    this.passengerListDataSource.load(newList);
  }

  onPortOfEmbarkationResult($event) {
    this.passengerModel.portOfEmbarkation = this.makePortModel($event);

  }

  onPortOfDisembarkationResult($event) {
    this.passengerModel.portOfDisembarkation = this.makePortModel($event);
  }

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

  deselectPortOfDisembarkation() {
    this.passengerModel.portOfDisembarkation = new PortModel();
  }

  deselectPortOfEmbarkation() {
    this.passengerModel.portOfEmbarkation = new PortModel();
  }

  setDateOfBirth($event) {
    this.passengerModel.dateOfBirth = this.getDateFormat($event);
  }

  setIdentityDocIssueDate($event) {
    this.identityDocumentModel.identityDocumentIssueDate = this.getDateFormat($event);
  }

  setIdentityDocExpiryDate($event) {
    this.identityDocumentModel.identityDocumentExpiryDate = this.getDateFormat($event);
  }

  selectGender($event) {
    this.passengerModel.gender = $event;
  }

  selectIdentityDocumentType($event) {
    this.identityDocumentModel.identityDocumentType = $event;
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

  setIssuingNation($event) {
    console.log($event);
    this.identityDocumentModel.issuingNation = $event.item.name;
    this.identityDocumentModel.issuingNationId = $event.item.countryId;
  }

  unsetIssuingNation() {
    this.identityDocumentModel.issuingNation = null;
    this.identityDocumentModel.issuingNationId = null;
  }

  setCountryOfBirth($event) {
    this.passengerModel.countryOfBirth = $event.item.name;
    this.passengerModel.countryOfBirthId = $event.item.countryId;
  }

  unsetCountryOfBirth() {
    this.passengerModel.countryOfBirth = null;
    this.passengerModel.countryOfBirthId = null;
  }

  setNationality($event) {
    console.log($event);
    this.passengerModel.nationality = $event.item.name;
    this.passengerModel.nationalityId = $event.item.countryId;
  }

  unsetNationality() {
    this.passengerModel.nationality = null;
    this.passengerModel.nationalityId = null;
  }

  addMockData() {
    const mockPassengerModel = new PersonOnBoardModel();
    const mockIdentityDocumentModel = new IdentityDocumentModel();
    mockPassengerModel.familyName = 'Karlsen';
    mockPassengerModel.givenName = 'Unni';
    mockIdentityDocumentModel.issuingNation = 'Norway';

    const mockGenderModel = new GenderModel();
    mockGenderModel.description = 'Nothing';

    mockPassengerModel.gender = mockGenderModel;

    mockPassengerModel.dateOfBirth = new Date();

    const mockPortOfEmbakrationModel = new PortModel();
    mockPortOfEmbakrationModel.name = 'Porsgrunn';

    const mockPortOfDisembakrationModel = new PortModel();
    mockPortOfDisembakrationModel.name = 'Kiel';

    mockPassengerModel.portOfEmbarkation = mockPortOfEmbakrationModel;
    mockPassengerModel.portOfDisembarkation = mockPortOfDisembakrationModel;

    this.passengerModel = mockPassengerModel;
    this.identityDocumentModel = mockIdentityDocumentModel;
    this.addPassenger();
  }

    mockFillForm() {
      this.passengerModel.familyName = 'Dalan';
      this.passengerModel.givenName = 'Camilla';
      this.passengerModel.dateOfBirth = new Date();
      this.passengerModel.placeOfBirth = 'Oslo';
      this.passengerModel.identityDocumentId = 4298384;
    }
}
