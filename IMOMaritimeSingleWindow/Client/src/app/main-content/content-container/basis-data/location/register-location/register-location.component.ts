import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService, LocationService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';
import { LocationModel } from '../../../../../shared/models';
const RESULT_SUCCESS = 'Location was successfully saved to the database.';
const RESULT_FAILURE = 'There was a problem when trying to save the location to the database. Please try again later.';

@Component({
  selector: 'app-register-location',
  templateUrl: './register-location.component.html',
  styleUrls: ['./register-location.component.css'],
  providers: [LocationModel]
})
export class RegisterLocationComponent implements OnInit, OnDestroy {

  newLocation: boolean;
  locationHeader: string;
  confirmHeader: string;
  confirmButtonTitle: string;
  locationTypeList: any[];
  locationTypeSelected: boolean;
  selectedLocationType: any;
  locationTypeDropdownString = 'Select location type';
  selectedTwoCharCode: string;

  countryList: any[];
  countrySelected = false;
  selectedCountry: any;
  countrySearchFailed = false;

  locationDataSubscription: Subscription;
  locationTypesSubscription: Subscription;
  countriesSubscription: Subscription;

  constructor(
    public locationModel: LocationModel,
    private contentService: ContentService,
    private locationService: LocationService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.locationDataSubscription = this.locationService.locationData$.subscribe(
      data => {
        if (data) {
          this.newLocation = false;
          this.locationHeader = 'Edit Location';
          this.confirmHeader = 'Confirm Location Changes';
          this.confirmButtonTitle = 'Apply Changes';
          this.locationModel = data;
          this.selectedCountry = this.locationModel.country;
          this.countrySelected = true;
          this.selectedLocationType = this.locationModel.locationType;
          this.locationTypeSelected = true;
          this.locationTypeDropdownString = this.selectedLocationType.name;
        } else {
          this.newLocation = true;
          this.locationHeader = 'Register New Location';
          this.confirmHeader = 'Confirm Location Registration';
          this.confirmButtonTitle = 'Register Location';
        }
      }
    );
    this.locationTypesSubscription = this.locationService.getLocationTypes().subscribe(
      results => {
        this.locationTypeList = results;
      },
      error => {
        console.log(error);
      }
    );
    this.countriesSubscription = this.locationService.getCountries().subscribe(
      results => {
        this.countryList = results;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.locationDataSubscription.unsubscribe();
    this.locationTypesSubscription.unsubscribe();
    this.countriesSubscription.unsubscribe();
  }

  selectCountry($event) {
    this.selectedCountry = $event;
    this.locationModel.countryId = $event.countryId;
    this.selectedTwoCharCode = this.selectedCountry.twoCharCode;
    this.countrySelected = true;
  }

  deselectCountry() {
    this.selectedCountry = null;
    this.selectedTwoCharCode = '';
    this.locationModel.country = null;
    this.locationModel.countryId = null;
    this.selectedCountry = null;
    this.countrySelected = false;
  }

  selectLocationType(locationType: any) {
    this.locationModel.locationTypeId = locationType.locationTypeId;
    this.selectedLocationType = locationType;
    this.locationTypeDropdownString = locationType.name;
    this.locationTypeSelected = true;
  }

  updateAndSaveModel() {
    const newLoCode = this.selectedTwoCharCode + this.locationModel.locationCode;
    this.locationModel.locationCode = newLoCode;
    this.registerLocation();
  }

  registerLocation() {
    if (this.newLocation) {
      this.locationService.registerLocation(this.locationModel).subscribe(
        result => {
          this.openConfirmationModal(ConfirmationModalComponent.TYPE_SUCCESS, RESULT_SUCCESS);
        }, error => {
          console.log(error);
          this.openConfirmationModal(ConfirmationModalComponent.TYPE_FAILURE, RESULT_FAILURE);
        }
      );
    } else {
      this.locationService.updateLocation(this.locationModel).subscribe(
        result => {
          this.openConfirmationModal(ConfirmationModalComponent.TYPE_SUCCESS, RESULT_SUCCESS);
        }, error => {
          console.log(error);
          this.openConfirmationModal(ConfirmationModalComponent.TYPE_FAILURE, RESULT_FAILURE);
        }
      );
    }
  }

  private goBack() {
    this.contentService.setContent(CONTENT_NAMES.LOCATIONS);
  }

  private openConfirmationModal(modalType: string, bodyText: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.componentInstance.modalType = modalType;
    modalRef.componentInstance.bodyText = bodyText;
    modalRef.result.then(
      result => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) { this.goBack(); }
      },
      reason => {
        if (modalType !== ConfirmationModalComponent.TYPE_FAILURE) { this.goBack(); }
      }
    );
  }

}
