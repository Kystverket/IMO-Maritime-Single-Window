import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { LocalDataSource } from 'ng2-smart-table';
import { PersonOnBoardModel } from 'app/shared/models/person-on-board-model';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { FindCountryOfBirthComponent } from './find-country-of-birth/find-country-of-birth.component';
import { FindNationalityComponent } from './find-nationality/find-nationality.component';
import { SmartTableModel } from './smartTableModel';
import { PortModel } from './portModel';
import { Observable } from 'rxjs/Observable';
import { GenderModel } from 'app/shared/models/gender-model';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {

  @ViewChild(FindCountryOfBirthComponent)
  private findCountryOfBirthComponent: FindCountryOfBirthComponent;
  @ViewChild(FindNationalityComponent)
  private findNationalityComponent: FindNationalityComponent;

  @ViewChild(NgForm) form: NgForm;

  @Input() showDropdown = true;

  genderList: Observable<any>;
  selectedGender: GenderModel;

  portCallId: number;
  passengerList: any[] = [];
  passengerModel: PersonOnBoardModel = new PersonOnBoardModel();
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
      passengerId: {
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

  constructor(
    private passengerListService: PortCallPassengerListService
  ) { }


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

    this.passengerListService.passengerModel$.subscribe(model => {
      if (model) {
        this.passengerModel = model;
      }
    });

    // Get gender list
    if (!this.genderList) {
      this.passengerListService.getGenderList().subscribe(results => {
        this.genderList = results;
      });
    }

    this.passengerListService.getIdentityDocumentTypes().subscribe(results => {
      console.log(results);
    });
  }

  addPassenger() {
    this.listIsPristine = false;

    // Add to smart table list
    this.addToSmartTable(this.passengerModel);

    // Add this passenger to local model and create new model
    this.passengerList.push(this.passengerModel);
    this.passengerModel = new PersonOnBoardModel();

    // Update values in service
    this.passengerListService.setPassengerModel(this.passengerModel);
    this.passengerListService.setPassengersList(
      this.passengerList
    );
    this.resetChildren();
  }

  resetChildren() {
    this.findCountryOfBirthComponent.deselectCountry();
    this.findNationalityComponent.deselectCountry();
  }

  isValid(valid: Boolean): Boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.passengerListService.setPassengerListMeta({ valid: this.form.valid });
  }

  selectNationality($event) {
    if ($event) {
      this.passengerModel.nationality = $event.name;
    } else {
      this.passengerModel.nationality = null;
    }
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
    console.log(passenger);
    const modifiedPassenger = new SmartTableModel();
    modifiedPassenger.passengerId = passenger.passengerId;
    modifiedPassenger.givenName = passenger.givenName;
    modifiedPassenger.familyName = passenger.surname; // Change to familyName
    if (passenger.nationality) {
      modifiedPassenger.nationality = passenger.nationality.name;
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

  addMockData() {
    const mockData = {
      personOnBoardId: 49292,
      surname: 'Dalan',
      givenName: 'Camilla',
      dateOfBirth: null,
      placeOfBirth: 'Oslo',
      occupationName: '',
      occupationCode: '',
      roleCode: '',
      inTransit: true,
      rankName: '',
      rankCode: '',
      identityDocIssueDate: null,
      identityDocExpiryDate: null,

      countryOfBirthId: 0,
      nationalityId: 0,
      personOnBoardTypeId: 0,
      genderId: 0,
      portCallId: this.portCallId,
      portOfEmbarkationId: 0,
      portOfDisembarkationId: 0,
      natureOfIdentityDocId: 0,

      countryOfBirth: null,
      nationality: null,
      personOnBoardType: null,
      gender: null,
      portCall: null,
      portOfEmbarkation: 'Trondheim',
      portOfDisembarkation: 'Oslo',
      natureOfIdentityDoc: 'Passport',

      numberOfIdentityDoc: 39572824,
      permitNumber: 4252,
    };
    this.passengerModel = mockData;
    this.addPassenger();
  }

    mockFillForm() {
      this.passengerModel.surname = 'Dalan';
      this.passengerModel.givenName = 'Camilla';
      this.passengerModel.dateOfBirth = new Date();
      this.passengerModel.placeOfBirth = 'Oslo';
      this.passengerModel.numberOfIdentityDoc = 4298384;
      this.passengerModel.permitNumber = 4232;
    }

    onPortOfEmbarkationResult($event) {
      this.passengerModel.portOfEmbarkation = this.setPortData($event);
    }

    onPortOfDisembarkationResult($event) {
      this.passengerModel.portOfDisembarkation = this.setPortData($event);
    }

    setPortData(portdata) {
      const portModel = new PortModel();
      portModel.locationId = portdata.locationId;
      portModel.countryId = portdata.countryId;
      portModel.name = portdata.name;

      return portModel;
    }

    deselectPortOfDisembarkation() {
      this.passengerModel.portOfDisembarkation = null;
    }

    deselectPortOfEmbarkation() {
      this.passengerModel.portOfEmbarkation = null;
    }

    setDateOfBirth($event) {
      this.passengerModel.dateOfBirth = this.getDateFormat($event);
    }

    setIdentityDocIssueDate($event) {
      this.passengerModel.identityDocIssueDate = this.getDateFormat($event);
    }

    setIdentityDocExpiryDate($event) {
      this.passengerModel.identityDocExpiryDate = this.getDateFormat($event);
    }

    selectGender($event) {
      this.passengerModel.gender = $event;
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

    removeTableEntry($event) {
      console.log($event);
    }

    /*resetAllPassengerIds(list) {
      let id = 1;
      list.forEach(passenger => {
        passenger.passengerId = id;
        id++;
      });
    }*/

}
