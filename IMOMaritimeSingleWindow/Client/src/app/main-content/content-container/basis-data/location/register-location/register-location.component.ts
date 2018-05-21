import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { ConfirmationModalComponent } from '../../../../../shared/components/confirmation-modal/confirmation-modal.component';
import { CONTENT_NAMES } from '../../../../../shared/constants/content-names';
import { LocationModel } from '../../../../../shared/models/location-model';
import { ContentService } from '../../../../../shared/services/content.service';
import { LocationService } from '../../../../../shared/services/location.service';

const RESULT_SUCCES: string = "Location was successfully saved to the database.";
const RESULT_FAILURE: string = "There was a problem when trying to save the location to the database. Please try again later.";

@Component({
  selector: 'app-register-location',
  templateUrl: './register-location.component.html',
  styleUrls: ['./register-location.component.css'],
  providers: [LocationModel, LocationService]
})
export class RegisterLocationComponent implements OnInit {
  locationTypeList: any[];
  locationTypeSelected: boolean;
  selectedLocationType: any;
  locationTypeDropdownString: string = "Select location type";

  countryList: any[]
  countrySelected: boolean = false;
  selectedCountry: any;
  countrySearchFailed: boolean = false;


  constructor(public locationModel: LocationModel, private locationService: LocationService,
    private contentService: ContentService, private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.locationService.getLocationTypes().subscribe(
      results => {
        this.locationTypeList = results;
      },
      error => {
        console.log(error);
      }
    );
    this.locationService.getCountries().subscribe(
      results => {
        this.countryList = results;
      },
      error => {
        console.log(error);
      }
    )
  }

  countrySearch = (text$: Observable<string>) =>
    text$
      .debounceTime(30)
      .distinctUntilChanged()
      .do(() => {
        this.countrySearchFailed = false;
      })
      .map(term => term.length < 1 ? []
        : this.countryList.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
      .do((text$) => {
        if (text$.length == 0) {
          this.countrySearchFailed = true;
        }
      });
  formatter = (x: { name: string }) => x.name;

  selectCountry($event) {
    this.selectedCountry = $event.item;
    this.locationModel.countryId = $event.item.countryId;
    this.countrySelected = true;
  }
  deselectCountry() {
    this.selectedCountry = null;
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

  registerLocation() {
    this.locationService.registerLocation(this.locationModel).subscribe(
      result => {
        console.log(result);
        this.openConfirmationModal(ConfirmationModalComponent.TYPE_SUCCESS, RESULT_SUCCES);
      }, error => {
        console.log(error);
        this.openConfirmationModal(ConfirmationModalComponent.TYPE_FAILURE, RESULT_FAILURE);
      }
    );
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
        if (modalType != ConfirmationModalComponent.TYPE_FAILURE) this.goBack();
      },
      reason => {
        if (modalType != ConfirmationModalComponent.TYPE_FAILURE) this.goBack();
      }
    );
  }

}
