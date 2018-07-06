import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { PassengerModel } from 'app/shared/models/port-call-passenger-model';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { FindPortOfDisembarkationComponent } from './find-port-of-disembarkation/find-port-of-disembarkation.component';
import { FindPortOfEmbarkationComponent } from './find-port-of-embarkation/find-port-of-embarkation.component';
import { FindCountryOfBirthComponent } from './find-country-of-birth/find-country-of-birth.component';
import { FindNationalityComponent } from './find-nationality/find-nationality.component';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit {

  @ViewChild(FindPortOfDisembarkationComponent)
  private findPortOfDisembarkationComponent: FindPortOfDisembarkationComponent;
  @ViewChild(FindPortOfEmbarkationComponent)
  private findPortOfEmbarkationComponent: FindPortOfEmbarkationComponent;
  @ViewChild(FindCountryOfBirthComponent)
  private findCountryOfBirthComponent: FindCountryOfBirthComponent;
  @ViewChild(FindNationalityComponent)
  private findNationalityComponent: FindNationalityComponent;

  @ViewChild(NgForm) form: NgForm;

  @Input() showDropdown = true;

  portCallId: number;
  passengerList: any[] = [];
  passengerModel: PassengerModel = new PassengerModel();
  listIsPristine = true;

  booleanList: string[] = ['Yes', 'No'];
  booleanModel = {
    'Yes': true,
    'No': false
  };
  formTransit: boolean = null;

  formValid = false;

  passengerListDataSource: LocalDataSource = new LocalDataSource();

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
        title: 'Passenger ID'
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
      dateOfBirth: {
        title: 'Date of Birth'
      },
      placeOfBirth: {
        title: 'Place of Birth'
      },
      countryOfBirth: {
        title: 'Location Onboard'
      },
      natureOfIdentityDoc: {
        title: 'Nature of Identity Document'
      },
      numberOfIdentityDoc: {
        title: 'Identity Document No.'
      },
      permitNumber: {
        title: 'Permit Number'
      },
      portOfEmbarkation: {
        title: 'Port of Embarkation'
      },
      portOfDisembarkation: {
        title: 'Port of Disembarkation'
      },
      delete: {
        title: 'Delete',
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
    this.passengerListService.passengerList$.subscribe(list => {
      if (list) {
        this.passengerList = list;
        console.log(list);
        this.passengerListDataSource.load(list);
        // this.makeSmartTable(list);
      }
    });

    this.passengerListService.passengerModel$.subscribe(model => {
      if (model) {
        this.passengerModel = model;
      }
      console.log('In subscription of model: ' + JSON.stringify(this.passengerModel));
    });

  }

  addPassenger() {
    this.listIsPristine = false;
    if (this.passengerList.length > 0) {
      this.passengerModel.passengerId = this.passengerList[this.passengerList.length - 1].passengerId + 1;
    } else {
      this.passengerModel.passengerId = 1;
    }

    // Add this passenger to local model and create new model
    this.passengerList.push(this.passengerModel);
    this.passengerModel = new PassengerModel();

    // Update values in service
    this.passengerListService.setPassengerModel(this.passengerModel);
    this.passengerListService.setPassengersList(
      this.passengerList
    );
    this.resetChildren();
  }

  resetChildren() {
    this.findPortOfDisembarkationComponent.deselectPort();
    this.findPortOfEmbarkationComponent.deselectPort();
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
        this.passengerModel.transit = this.booleanModel[key];
        return;
      }
    });
  }

  makeSmartTable(list) {
    list.forEach(passenger => {
      if (passenger) {
        console.log(passenger.nationality);
        if (passenger.nationality) {
          passenger.nationality = passenger.nationality.name;
        }
        passenger.countryOfBirth = passenger.countryOfBirth.name;
        passenger.dateOfBirth = passenger.dateOfBirth.toDateString();
        passenger.portOfEmbarkation = passenger.portOfEmbarkation.name;
        passenger.portOfDisembarkation = passenger.portOfDisembarkation.name;
        Object.keys(this.booleanModel).forEach(key => {
          if (this.booleanModel[key] === passenger.transit) {
            passenger.transit = key;
            console.log(passenger.transit);
          }
        });
      }
      // missing nature of identity doc
      // gender
      this.passengerListDataSource.load(list);
    });
  }

  addMockData() {
    const mockData = {
      familyName: 'Dalan',
      givenName: 'Camilla',
      nationality: 'Norwegian',
      dateOfBirth: new Date(),
      placeOfBirth: 'Oslo',
      countryOfBirth: 'Norway',
      natureOfIdentityDoc: 'Passport',
      numberOfIdentityDoc: 39572824,
      permitNumber: 4252,
      portOfEmbarkation: 'Trondheim',
      portOfDisembarkation: 'Oslo',
      transit: true,
      passengerId: 49292,
      portCallId: 160
    };
    this.passengerModel = mockData;
    this.addPassenger();
  }

    mockFillForm() {
      this.passengerModel.familyName = 'Dalan';
      this.passengerModel.givenName = 'Camilla';
      this.passengerModel.dateOfBirth = new Date();
      this.passengerModel.placeOfBirth = 'Oslo';
      this.passengerModel.numberOfIdentityDoc = 4298384;
      this.passengerModel.permitNumber = 4232;
    }



}
