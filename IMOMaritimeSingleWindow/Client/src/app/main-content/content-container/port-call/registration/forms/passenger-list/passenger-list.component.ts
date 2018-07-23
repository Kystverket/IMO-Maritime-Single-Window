import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { DeleteButtonComponent } from '../shared/delete-button/delete-button.component';
import { PassengerModel } from 'app/shared/models/port-call-passenger-model';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { LocationService } from 'app/shared/services/location.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css']
})
export class PassengerListComponent implements OnInit, OnDestroy {

  @Input() showDropdown = true;

  portCallId: number;
  passengerList: any[] = [];
  listIsPristine = true;

  countryList: string[] = ['Norway', 'Sweeden', 'Australia'];

  countryOfBirth: string;
  passengerModel: PassengerModel = new PassengerModel();

  locationModel: any;

  formValid = false;

  @ViewChild(NgForm) form: NgForm;

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

  countries = ['Norway', 'Sweden'];

  passengerListSubscription: Subscription;
  passengerModelSubscription: Subscription;

  constructor(
    private passengerListService: PortCallPassengerListService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.passengerListSubscription = this.passengerListService.passengerList$.subscribe(list => {
      if (list) {
        this.passengerList = list;
        this.passengerListDataSource.load(list);
      }
    });

    this.passengerModelSubscription = this.passengerListService.passengerModel$.subscribe(model => {
      if (model) {
        this.passengerModel = model;
      }
    });
  }

  ngOnDestroy() {
    this.passengerListSubscription.unsubscribe();
    this.passengerModelSubscription.unsubscribe();
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
  }

  isValid(valid: Boolean): Boolean {
    this.sendMetaData();
    return valid;
  }

  private sendMetaData(): void {
    this.passengerListService.setPassengerListMeta({ valid: this.form.valid });
  }


  selectNationality($event) {
    this.passengerModel.nationality = $event.name;
  }

  selectCountryOfBirth($event) {
    this.passengerModel.countryOfBirth = $event.name;
  }

  addMockData() {
    const mockData = {
      familyName: 'Dalan',
      givenName: 'Camilla',
      nationality: 'Norwegian',
      dateOfBirth: 130794,
      placeOfBirth: 'Oslo',
      countryOfBirth: 'Norway',
      natureOfIdentityDoc: 'Passport',
      numberOfIdentityDoc: 39572824,
      permitNumber: null,
      portOfEmbarkation: 'Trondheim',
      portOfDisembarkation: 'Oslo',
      transit: true,
      passengerId: 49292,
      portCallId: 160
    };

    this.passengerModel = mockData;
    this.addPassenger();
  }

}
