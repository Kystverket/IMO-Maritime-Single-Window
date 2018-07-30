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
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {
  portCallPassengerList: PersonOnBoardModel[] = [];

  portCallPassengerModel: PersonOnBoardModel = new PersonOnBoardModel();

  portCallId: number;

  genderList: Observable<any>;
  selectedGender: GenderModel;
  identityDocTypeList: Observable<any>;
  identityDocumentModel: IdentityDocumentModel = new IdentityDocumentModel();
  // selectedIdentityDocType: IdentityDocumentModel;

  listIsPristine = true;

  @ViewChild(NgForm) form: NgForm;

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
        renderComponent: DeleteButtonComponent,
      },
    }
  };

  passengerListSubscription: Subscription;
  detailsIdentificationDataSubscription: Subscription;

  constructor(
    private passengerListService: PortCallPassengerListService,
    private portCallService: PortCallService
  ) {}


  ngOnInit() {
    // Try to get passenger by id
    this.passengerListService.getPassengerById(1).subscribe(res => {
      console.log(res);
    });
    // Try to get passenger by port call id
    this.passengerListService.getPassengerListByPortCallId(179).subscribe(res => {
      console.log(res);
    });

    // Generate smart table list from existing data
    this.portCallPassengerModel = new PersonOnBoardModel();

    // Subscribe to port call
    this.detailsIdentificationDataSubscription = this.portCallService.detailsIdentificationData$.subscribe(element => {
      if (element) {
        this.portCallPassengerModel.portCallId = element.portCallId;
        this.portCallId = element.portCallId;

        this.passengerListSubscription = this.passengerListService.passengerList$.subscribe(list => {
          if (list) {
            console.log(list);
            this.portCallPassengerList = list;
            this.portCallPassengerModel.portCallId = element.portCallId;

            // Create smart table
        /*     if (list.length === 0) {
              this.smartTableList = [];
              this.passengerListDataSource.load(this.smartTableList);
            } else if (list.length > 0) {
              this.generateSmartTable();
            } */
          }
          // Get gender list
          if (!this.genderList) {
            this.passengerListService.getGenderList().subscribe(results => {
              this.genderList = results;
            });
          }

          // Get identity document types list
          this.passengerListService.getIdentityDocumentTypes().subscribe(results => {
            this.identityDocTypeList = results;
          });

          this.passengerListDataSource.load(this.generateSmartTable());
        });
      }

    });

    this.passengerListService.getPassengerListByPortCallId(this.portCallId).subscribe(list => {
      console.log('List of passengers for port call ' + this.portCallId + ': ' + JSON.stringify(list));
      list.forEach(element => {
        console.log(JSON.stringify(element));
      });

      this.passengerListDataSource = new LocalDataSource();
      this.portCallPassengerList = [];

      if (list) {
        this.passengerListService.setPassengersList(list);
      }
    });
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
    return newList;
  }

  makeSmartTableEntry(passenger) {
    console.log(passenger);
    const modifiedPassenger = new SmartTableModel();
    if (passenger.personOnBoardId) {
      modifiedPassenger.personOnBoardId = passenger.personOnBoardId;
    }
    modifiedPassenger.sequenceNumber = passenger.sequenceNumber;
    modifiedPassenger.givenName = passenger.givenName;
    modifiedPassenger.familyName = passenger.familyName;
    modifiedPassenger.nationality = passenger.nationality;
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
      modifiedPassenger.gender = passenger.gender;
    }
    /*Object.keys(this.booleanModel).forEach(key => {
      if (this.booleanModel[key] === passenger.inTransit) {
        modifiedPassenger.inTransit = key;
      }
    });*/
    return modifiedPassenger;
  }

  addPassenger() {
    console.log(this.portCallPassengerModel);
    this.listIsPristine = false;
    this.passengerListService.setDataIsPristine(false);

    if (this.portCallPassengerList.length > 0) {
      this.portCallPassengerModel.sequenceNumber = this.portCallPassengerList[this.portCallPassengerList.length - 1].sequenceNumber + 1;
    } else {
      this.portCallPassengerModel.sequenceNumber = 1;
    }

    this.portCallPassengerModel.identityDocument = this.identityDocumentModel;
    this.portCallPassengerModel.personOnBoardTypeId = 2;
    this.portCallPassengerList.push(this.portCallPassengerModel);

    this.portCallPassengerModel = new PersonOnBoardModel();
    this.identityDocumentModel = new IdentityDocumentModel();

/*     // Add to smart table list
    this.addToSmartTable(this.portCallPassengerModel); */

    // Update values in service
    // this.passengerListService.setportCallPassengerModel(this.portCallPassengerModel);
    this.passengerListService.setPassengersList(
      this.portCallPassengerList
    );
    console.log(this.portCallPassengerList);

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

  selectTransit($event) {
    this.inTransit = $event;
    Object.keys(this.booleanModel).forEach(key => {
      if (key === $event) {
        this.portCallPassengerModel.inTransit = this.booleanModel[key];
        return;
      }
    });
  }

  // Add one passenger to smart table
/*   addToSmartTable(passenger) {
    this.smartTableList.push(this.makeSmartTableEntry(passenger));
    this.passengerListDataSource.load(this.smartTableList);
  } */


  setSmartTablePersonOnBoardIds() {
  }

  onPortOfEmbarkationResult($event) {
    console.log($event);
    this.portCallPassengerModel.portOfEmbarkationId = $event;
    // this.portCallPassengerModel.portOfEmbarkation = this.makePortModel($event);

  }

  onPortOfDisembarkationResult($event) {
    this.portCallPassengerModel.portOfDisembarkationId = $event;
    // this.portCallPassengerModel.portOfDisembarkation = this.makePortModel($event);
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
    this.portCallPassengerModel.portOfDisembarkationId = null;
  }

  deselectPortOfEmbarkation() {
    this.portCallPassengerModel.portOfEmbarkationId = null;
  }

  setDateOfBirth($event) {
    this.portCallPassengerModel.dateOfBirth = this.getDateFormat($event);
  }

  setIdentityDocIssueDate($event) {
    this.identityDocumentModel.identityDocumentIssueDate = this.getDateFormat($event);
  }

  setIdentityDocExpiryDate($event) {
    this.identityDocumentModel.identityDocumentExpiryDate = this.getDateFormat($event);
  }

  selectGender($event) {
    this.portCallPassengerModel.gender = $event;
  }

  selectIdentityDocumentType($event) {
    this.identityDocumentModel.identityDocumentType = $event;
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
    this.portCallPassengerModel.countryOfBirth = $event.item.name;
    this.portCallPassengerModel.countryOfBirthId = $event.item.countryId;
  }

  unsetCountryOfBirth() {
    this.portCallPassengerModel.countryOfBirth = null;
    this.portCallPassengerModel.countryOfBirthId = null;
  }

  setNationality($event) {
    console.log($event);
    this.portCallPassengerModel.nationality = $event.item.name;
    this.portCallPassengerModel.nationalityId = $event.item.countryId;
  }

  unsetNationality() {
    this.portCallPassengerModel.nationality = null;
    this.portCallPassengerModel.nationalityId = null;
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

  addMockData() {
    const mockportCallPassengerModel = new PersonOnBoardModel();
    console.log(mockportCallPassengerModel);
    const mockIdentityDocumentModel = new IdentityDocumentModel();
    mockportCallPassengerModel.familyName = 'Karlsen';
    mockportCallPassengerModel.givenName = 'Unni';
    mockIdentityDocumentModel.issuingNation = 'Norway';

    const mockGenderModel = new GenderModel();
    mockGenderModel.description = 'Nothing';

    mockportCallPassengerModel.gender = mockGenderModel;

    mockportCallPassengerModel.dateOfBirth = new Date();

    const mockPortOfEmbakrationModel = new PortModel();
    mockPortOfEmbakrationModel.name = 'Porsgrunn';

    const mockPortOfDisembakrationModel = new PortModel();
    mockPortOfDisembakrationModel.name = 'Kiel';

    this.portCallPassengerModel = mockportCallPassengerModel;
    this.identityDocumentModel = mockIdentityDocumentModel;
    this.addPassenger();
  }

    mockFillForm() {
      this.portCallPassengerModel.familyName = 'Dalan';
      this.portCallPassengerModel.givenName = 'Camilla';
      this.portCallPassengerModel.dateOfBirth = new Date();
      this.portCallPassengerModel.placeOfBirth = 'Oslo';
      this.identityDocumentModel.identityDocumentId = 4232;
      this.identityDocumentModel.visaOrResidencePermitNumber = 421;
    }
}
