import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PrevAndNextPocService } from 'app/shared/services/prev-and-next-poc.service';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ClearanceComponent } from './clearance/clearance.component';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { NewPortCallDraftComponent } from './new-port-call-draft/new-port-call-draft.component';
import { ConfirmDataComponent } from './new-port-call-draft/ship-location-time/confirm-data/confirm-data.component';
import { EtaEtdComponent } from './new-port-call-draft/ship-location-time/eta-etd/eta-etd.component';
import { FindLocationComponent } from './new-port-call-draft/ship-location-time/find-location/find-location.component';
import { FindShipComponent } from './new-port-call-draft/ship-location-time/find-ship/find-ship.component';
import { ShipLocationTimeComponent } from './new-port-call-draft/ship-location-time/ship-location-time.component';
import { ButtonRowComponent } from './overview/button-row/button-row.component';
import { ClearanceRowComponent } from './overview/clearance-row/clearance-row.component';
import { OverviewComponent } from './overview/overview.component';
import { PortCallComponent } from './port-call.component';
import { FormsComponent } from './registration/forms/forms.component';
import { CrewPassengersDimensionsComponent } from './registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component';
import { PortCallDetailsComponent } from './registration/forms/port-call-details/port-call-details.component';
import { PurposeComponent } from './registration/forms/port-call-details/purpose/purpose.component';
import { ReportingComponent } from './registration/forms/port-call-details/reporting/reporting.component';
import { SaveDetailsComponent } from './registration/forms/port-call-details/save-details/save-details.component';
import { PrevAndNextPocComponent } from './registration/forms/prev-and-next-poc/prev-and-next-poc.component';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewPortCallComponent } from './view-port-call/view-port-call.component';
import { ShipStoresComponent } from 'app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component';
import { DeleteButtonComponent } from './registration/forms/shared/delete-button/delete-button.component';
import { PortCallShipStoresService } from 'app/shared/services/port-call-ship-stores.service';
import { SaveShipStoresComponent } from './registration/forms/ship-stores/save-ship-stores/save-ship-stores.component';
import { PassengerListComponent } from './registration/forms/passenger-list/passenger-list.component';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { CountryService } from 'app/shared/services/country.service';
import { SearchCountryComponent } from './registration/forms/shared/search-country/search-country.component';
import { FindCountryOfBirthComponent } from './registration/forms/passenger-list/find-country-of-birth/find-country-of-birth.component';
import { FindNationalityComponent } from './registration/forms/passenger-list/find-nationality/find-nationality.component';
import { DateOfBirthComponent } from './registration/forms/passenger-list/date-of-birth/date-of-birth.component';
import { SavePassengerListComponent } from './registration/forms/passenger-list/save-passenger-list/save-passenger-list.component';
import { SavePrevAndNextPocComponent } from './registration/forms/prev-and-next-poc/save-prev-and-next-poc/save-prev-and-next-poc.component';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    NgbModule,
    NgSelectModule,
    SharedModule,
  ],
  entryComponents: [ButtonRowComponent, ClearanceRowComponent, DeleteButtonComponent],
  declarations: [
    ButtonRowComponent,
    ClearanceComponent,
    ClearanceRowComponent,
    ConfirmDataComponent,
    CrewPassengersDimensionsComponent,
    EtaEtdComponent,
    FindLocationComponent,
    FindShipComponent,
    FormsComponent,
    NewPortCallDraftComponent,
    OverviewComponent,
    PortCallComponent,
    PortCallDetailsComponent,
    ProgressBarComponent,
    PurposeComponent,
    RegistrationComponent,
    ReportingComponent,
    SaveDetailsComponent,
    NewPortCallDraftComponent,
    ClearanceRowComponent,
    ShipStoresComponent,
    DeleteButtonComponent,
    ShipLocationTimeComponent,
    PrevAndNextPocComponent,
    ViewPortCallComponent,
    SaveShipStoresComponent,
    PassengerListComponent,
    SearchCountryComponent,
    FindCountryOfBirthComponent,
    FindNationalityComponent,
    DateOfBirthComponent,
    SavePassengerListComponent,
    SavePrevAndNextPocComponent
  ],
  exports: [
    ClearanceComponent,
    NewPortCallDraftComponent,
    PortCallComponent,
    RegistrationComponent,
    ViewPortCallComponent,
  ],
  providers: [PortCallService, PortCallShipStoresService, PortCallPassengerListService, CountryService, PrevAndNextPocService]
})
export class PortCallModule { }
