import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { ClearancesComponent } from './components/confirmation-view/clearances/clearances.component';
import { ConfirmationViewComponent } from './components/confirmation-view/confirmation-view.component';
import { PortCallDetailsComponent } from './components/confirmation-view/port-call-details/port-call-details.component';
import { SelectedPurposesComponent } from './components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component';
import { LocationInfoTableComponent } from './components/location-info-table/location-info-table.component';
import { LocationTimeInfoTableComponent } from './components/location-time-info-table/location-time-info-table.component';
import { SearchHarbourComponent } from './components/search-harbour/search-harbour.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { SearchOrganizationComponent } from './components/search-organization/search-organization.component';
import { SearchShipComponent } from './components/search-ship/search-ship.component';
import { ShipInfoTableComponent } from './components/ship-info-table/ship-info-table.component';
import { SsnCardComponent } from './components/ssn-card/ssn-card.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { ContactService } from './services/contact.service';
import { LocationService } from './services/location.service';
import { OrganizationService } from './services/organization.service';
import { ShipService } from './services/ship.service';
import { IntegerValidator } from './utils/custom-validators/integer-validator.directive';
import { NumberValidator } from './utils/custom-validators/number-validator.directive';
import { PositiveNumberValidator } from './utils/custom-validators/positive-number-validator.directive';
import { ContactSelectComponent } from './components/contact-select/contact-select.component';
import { SelectedContactMediumsComponent } from './components/selected-contact-mediums/selected-contact-mediums.component';
import { SelectShipContactComponent } from './components/select-ship-contact/select-ship-contact.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, NgSelectModule, NgbModule
  ],
  declarations: [
    SsnCardComponent,
    TableCardComponent,
    ConfirmationViewComponent,
    SelectedPurposesComponent,
    PortCallDetailsComponent,
    ClearancesComponent,
    PositiveNumberValidator,
    NumberValidator,
    IntegerValidator,
    ConfirmationModalComponent,
    SearchOrganizationComponent,
    SearchShipComponent,
    ShipInfoTableComponent,
    LocationTimeInfoTableComponent,
    LocationInfoTableComponent,
    SearchLocationComponent,
    SearchHarbourComponent,
    SelectShipContactComponent,
    SelectedContactMediumsComponent
  ],
  exports: [
    SsnCardComponent,
    TableCardComponent,
    ConfirmationViewComponent,
    PositiveNumberValidator,
    NumberValidator,
    IntegerValidator,
    ConfirmationModalComponent,
    SearchOrganizationComponent,
    SearchShipComponent,
    ShipInfoTableComponent,
    LocationTimeInfoTableComponent,
    LocationInfoTableComponent,
    SearchLocationComponent,
    SearchHarbourComponent,
    SelectShipContactComponent,
    SelectedContactMediumsComponent
  ],
  providers: [
    ContactService, OrganizationService, ShipService, LocationService
  ],
  entryComponents: [
    ConfirmationModalComponent
  ]
})
export class SharedModule { }
