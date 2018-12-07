import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { CargoInfoTableComponent } from './components/confirmation-view/cargo-info-table/cargo-info-table.component';
import { CargoListingTableComponent } from './components/confirmation-view/cargo-listing-table/cargo-listing-table.component';
import { ClearancesComponent } from './components/confirmation-view/clearances/clearances.component';
import { ConfirmationViewComponent } from './components/confirmation-view/confirmation-view.component';
import { CrewInfoTableComponent } from './components/confirmation-view/crew-info-table/crew-info-table.component';
import { CrewListingTableComponent } from './components/confirmation-view/crew-listing-table/crew-listing-table.component';
import { DpgConfirmationViewComponent } from './components/confirmation-view/dpg-confirmation-view/dpg-confirmation-view.component';
import { PassengerInfoTableComponent } from './components/confirmation-view/passenger-info-table/passenger-info-table.component';
import { PassengerListingTableComponent } from './components/confirmation-view/passenger-listing-table/passenger-listing-table.component';
import { PortCallDetailsComponent } from './components/confirmation-view/port-call-details/port-call-details.component';
import { SelectedPurposesComponent } from './components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component';
import { ShipStoresInfoTableComponent } from './components/confirmation-view/ship-stores-info-table/ship-stores-info-table.component';
import { ShipStoresListingTableComponent } from './components/confirmation-view/ship-stores-listing-table/ship-stores-listing-table.component';
import { UserInfoTableComponent } from './components/confirmation-view/user-info-table/user-info-table.component';
import { ContactSelectComponent } from './components/contact-select/contact-select.component';
import { CountrySelectComponent } from './components/country-select/country-select.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { IsscComponent } from './components/issc/issc.component';
import { RsoSelectComponent } from './components/issc/rso-select/rso-select.component';
import { LocationInfoTableComponent } from './components/location-info-table/location-info-table.component';
import { LocationTimeInfoTableComponent } from './components/location-time-info-table/location-time-info-table.component';
import { OrganizationInfoTableComponent } from './components/organization-info-table/organization-info-table.component';
import { OrganizationButtonRowComponent } from './components/organization-smart-table/organization-button-row/organization-button-row.component';
import { OrganizationSmartTableComponent } from './components/organization-smart-table/organization-smart-table.component';
import { PrevAndNextPocTableComponent } from './components/prev-and-next-poc-table/prev-and-next-poc-table.component';
import { SearchCountryComponent } from './components/search-country/search-country.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { SearchOrganizationComponent } from './components/search-organization/search-organization.component';
import { SearchShipFlagCodeComponent } from './components/search-ship-flag-code/search-ship-flag-code.component';
import { SearchShipComponent } from './components/search-ship/search-ship.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SelectShipContactComponent } from './components/select-ship-contact/select-ship-contact.component';
import { SelectedContactMediumsComponent } from './components/selected-contact-mediums/selected-contact-mediums.component';
import { ShipInfoTableComponent } from './components/ship-info-table/ship-info-table.component';
import { ShipButtonRowComponent } from './components/ship-smart-table/ship-button-row/ship-button-row.component';
import { ShipSmartTableComponent } from './components/ship-smart-table/ship-smart-table.component';
import { SsnBgComponent } from './components/ssn-bg/ssn-bg.component';
import { SsnCardComponent } from './components/ssn-card/ssn-card.component';
import { SsnTableComponent } from './components/ssn-table/ssn-table.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { UserButtonRowComponent } from './components/user-smart-table/user-button-row/user-button-row.component';
import { UserSmartTableComponent } from './components/user-smart-table/user-smart-table.component';
import { DbConnectionService } from './services/db-connection.service';
import { ErrorService } from './services/error.service';
import { LocationService } from './services/location.service';
import { OrganizationService } from './services/organization.service';
import { ShipService } from './services/ship.service';
import { ExtendedAlphaNumericValidator } from './utils/custom-validators/extended-alpha-numeric-validator.directive';
import { IntegerValidator } from './utils/custom-validators/integer-validator.directive';
import { NumberValidator } from './utils/custom-validators/number-validator.directive';
import { PositiveNumberValidator } from './utils/custom-validators/positive-number-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    NgbModule,
    NgSelectModule
  ],
  declarations: [
    ExtendedAlphaNumericValidator,
    ClearancesComponent,
    ConfirmationModalComponent,
    ConfirmationViewComponent,
    ContactSelectComponent,
    DateTimePickerComponent,
    IntegerValidator,
    LocationInfoTableComponent,
    LocationTimeInfoTableComponent,
    NumberValidator,
    OrganizationButtonRowComponent,
    OrganizationSmartTableComponent,
    PortCallDetailsComponent,
    PositiveNumberValidator,
    PrevAndNextPocTableComponent,
    SearchCountryComponent,
    SearchLocationComponent,
    SearchOrganizationComponent,
    SearchShipComponent,
    SearchUserComponent,
    SearchShipFlagCodeComponent,
    SelectedContactMediumsComponent,
    SelectedPurposesComponent,
    SelectShipContactComponent,
    ShipButtonRowComponent,
    UserButtonRowComponent,
    ShipInfoTableComponent,
    ShipSmartTableComponent,
    UserSmartTableComponent,
    SsnBgComponent,
    SsnCardComponent,
    SsnTableComponent,
    TableCardComponent,
    DateTimePickerComponent,
    SsnTableComponent,
    PrevAndNextPocTableComponent,
    SearchShipFlagCodeComponent,
    ContactSelectComponent,
    FeedbackComponent,
    CargoInfoTableComponent,
    UserInfoTableComponent,
    ShipStoresInfoTableComponent,
    CrewInfoTableComponent,
    PassengerInfoTableComponent,
    IsscComponent,
    DatePickerComponent,
    CountrySelectComponent,
    RsoSelectComponent,
    OrganizationInfoTableComponent,
    DpgConfirmationViewComponent,
    CrewListingTableComponent,
    CargoListingTableComponent,
    PassengerListingTableComponent,
    ShipStoresListingTableComponent
  ],
  exports: [
    ExtendedAlphaNumericValidator,
    ConfirmationModalComponent,
    ConfirmationViewComponent,
    ContactSelectComponent,
    DateTimePickerComponent,
    IntegerValidator,
    LocationInfoTableComponent,
    LocationTimeInfoTableComponent,
    NumberValidator,
    OrganizationSmartTableComponent,
    PositiveNumberValidator,
    PrevAndNextPocTableComponent,
    SearchCountryComponent,
    SearchLocationComponent,
    SearchOrganizationComponent,
    SearchShipComponent,
    SearchUserComponent,
    SearchShipFlagCodeComponent,
    SelectedContactMediumsComponent,
    SelectShipContactComponent,
    ShipInfoTableComponent,
    ShipSmartTableComponent,
    UserSmartTableComponent,
    SsnBgComponent,
    SsnCardComponent,
    SsnTableComponent,
    TableCardComponent,
    DateTimePickerComponent,
    SsnTableComponent,
    PrevAndNextPocTableComponent,
    SearchShipFlagCodeComponent,
    ContactSelectComponent,
    FeedbackComponent,
    FeedbackComponent,
    IsscComponent,
    OrganizationInfoTableComponent,
    CrewListingTableComponent,
    CargoListingTableComponent,
    PassengerListingTableComponent
  ],
  providers: [
    LocationService,
    OrganizationService,
    ShipService,
    DbConnectionService,
    ErrorService
  ],
  entryComponents: [
    ConfirmationModalComponent,
    ShipButtonRowComponent,
    UserButtonRowComponent,
    OrganizationButtonRowComponent,
  ]
})
export class SharedModule { }
