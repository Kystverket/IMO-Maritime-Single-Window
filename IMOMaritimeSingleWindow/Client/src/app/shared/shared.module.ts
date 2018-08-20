import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { OrganizationButtonRowComponent } from 'app/shared/components/organization-smart-table/organization-button-row/organization-button-row.component';
import { OrganizationSmartTableComponent } from 'app/shared/components/organization-smart-table/organization-smart-table.component';
import { ShipButtonRowComponent } from 'app/shared/components/ship-smart-table/ship-button-row/ship-button-row.component';
import { DbConnectionService } from 'app/shared/services/db-connection.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { ClearancesComponent } from './components/confirmation-view/clearances/clearances.component';
import { ConfirmationViewComponent } from './components/confirmation-view/confirmation-view.component';
import { PortCallDetailsComponent } from './components/confirmation-view/port-call-details/port-call-details.component';
import { SelectedPurposesComponent } from './components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component';
import { ContactSelectComponent } from './components/contact-select/contact-select.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { LocationInfoTableComponent } from './components/location-info-table/location-info-table.component';
import { LocationTimeInfoTableComponent } from './components/location-time-info-table/location-time-info-table.component';
import { PrevAndNextPocTableComponent } from './components/prev-and-next-poc-table/prev-and-next-poc-table.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { SearchOrganizationComponent } from './components/search-organization/search-organization.component';
import { SearchShipFlagCodeComponent } from './components/search-ship-flag-code/search-ship-flag-code.component';
import { SearchShipComponent } from './components/search-ship/search-ship.component';
import { SelectShipContactComponent } from './components/select-ship-contact/select-ship-contact.component';
import { SelectedContactMediumsComponent } from './components/selected-contact-mediums/selected-contact-mediums.component';
import { ShipInfoTableComponent } from './components/ship-info-table/ship-info-table.component';
import { ShipSmartTableComponent } from './components/ship-smart-table/ship-smart-table.component';
import { SsnBgComponent } from './components/ssn-bg/ssn-bg.component';
import { SsnCardComponent } from './components/ssn-card/ssn-card.component';
import { SsnTableComponent } from './components/ssn-table/ssn-table.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { LocationService } from './services/location.service';
import { OrganizationService } from './services/organization.service';
import { ShipService } from './services/ship.service';
import { IntegerValidator } from './utils/custom-validators/integer-validator.directive';
import { NumberValidator } from './utils/custom-validators/number-validator.directive';
import { PositiveNumberValidator } from './utils/custom-validators/positive-number-validator.directive';
import { CargoInfoTableComponent } from './components/confirmation-view/cargo-info-table/cargo-info-table.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { UserInfoTableComponent } from './components/confirmation-view/user-info-table/user-info-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    NgbModule,
    NgSelectModule,
  ],
  declarations: [
    ClearancesComponent,
    ConfirmationModalComponent,
    ConfirmationViewComponent,
    IntegerValidator,
    LocationInfoTableComponent,
    LocationTimeInfoTableComponent,
    NumberValidator,
    OrganizationButtonRowComponent,
    OrganizationSmartTableComponent,
    PortCallDetailsComponent,
    PositiveNumberValidator,
    SearchLocationComponent,
    SearchOrganizationComponent,
    SearchShipComponent,
    SelectedContactMediumsComponent,
    SelectedPurposesComponent,
    SelectShipContactComponent,
    ShipButtonRowComponent,
    ShipInfoTableComponent,
    ShipSmartTableComponent,
    SsnBgComponent,
    SsnCardComponent,
    TableCardComponent,
    DateTimePickerComponent,
    SsnTableComponent,
    PrevAndNextPocTableComponent,
    SearchShipFlagCodeComponent,
    ContactSelectComponent,
    FeedbackComponent,
    CargoInfoTableComponent,
    UserInfoTableComponent,
  ],
  exports: [
    ConfirmationModalComponent,
    ConfirmationViewComponent,
    IntegerValidator,
    LocationInfoTableComponent,
    LocationTimeInfoTableComponent,
    NumberValidator,
    OrganizationSmartTableComponent,
    PositiveNumberValidator,
    SearchLocationComponent,
    SearchOrganizationComponent,
    SearchShipComponent,
    SelectedContactMediumsComponent,
    SelectShipContactComponent,
    ShipInfoTableComponent,
    ShipSmartTableComponent,
    SsnBgComponent,
    SsnCardComponent,
    TableCardComponent,
    DateTimePickerComponent,
    SsnTableComponent,
    PrevAndNextPocTableComponent,
    SearchShipFlagCodeComponent,
    ContactSelectComponent,
    FeedbackComponent
  ],
  providers: [
    LocationService,
    OrganizationService,
    ShipService,
    DbConnectionService
  ],
  entryComponents: [
    ConfirmationModalComponent,
    ShipButtonRowComponent,
    OrganizationButtonRowComponent,
  ]
})
export class SharedModule { }
