import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CargoItemFormComponent } from 'app/main-content/content-container/port-call/registration/forms/cargo/cargo-item-form/cargo-item-form.component';
import { CargoTableComponent } from 'app/main-content/content-container/port-call/registration/forms/cargo/cargo-table/cargo-table.component';
import { ShipStoresComponent } from 'app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component';
import { CountryService } from 'app/shared/services/country.service';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
import { PortCallPassengerListService } from 'app/shared/services/port-call-passenger-list.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ClearanceComponent } from './clearance/clearance.component';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { ButtonRowComponent } from './overview/button-row/button-row.component';
import { ClearanceRowComponent } from './overview/clearance-row/clearance-row.component';
import { OverviewComponent } from './overview/overview.component';
import { SetActualTimeComponent } from './overview/set-actual-time/set-actual-time.component';
import { PortCallComponent } from './port-call.component';
import { CargoComponent } from './registration/forms/cargo/cargo.component';
import { ConsignmentFormComponent } from './registration/forms/cargo/consignment-form/consignment-form.component';
import { FormsComponent } from './registration/forms/forms.component';
import { FindPortOfEmbarkationComponent } from './registration/forms/passenger-list/find-port-of-embarkation/find-port-of-embarkation.component';
import { PassengerListComponent } from './registration/forms/passenger-list/passenger-list.component';
import { SearchPassengerPortComponent } from './registration/forms/passenger-list/search-passenger-port/search-passenger-port.component';
import { CargoDescriptionComponent } from './registration/forms/port-call-details/cargo-description/cargo-description.component';
import { CrewPassengersDimensionsComponent } from './registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component';
import { PortCallDetailsComponent } from './registration/forms/port-call-details/port-call-details.component';
import { PurposeComponent } from './registration/forms/port-call-details/purpose/purpose.component';
import { ReportingComponent } from './registration/forms/port-call-details/reporting/reporting.component';
import { SaveDetailsComponent } from './registration/forms/port-call-details/save-details/save-details.component';
import { DeleteButtonComponent } from './registration/forms/shared/delete-button/delete-button.component';
import { SaveShipStoresComponent } from './registration/forms/ship-stores/save-ship-stores/save-ship-stores.component';
import { SaveNewPortCallComponent } from './registration/forms/voyages/save-new-port-call/save-new-port-call.component';
import { SaveVoyagesComponent } from './registration/forms/voyages/save-voyages/save-voyages.component';
import { VoyagesComponent } from './registration/forms/voyages/voyages.component';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewPortCallComponent } from './view-port-call/view-port-call.component';

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
    CrewPassengersDimensionsComponent,
    FormsComponent,
    OverviewComponent,
    PortCallComponent,
    PortCallDetailsComponent,
    ProgressBarComponent,
    PurposeComponent,
    RegistrationComponent,
    ReportingComponent,
    SaveDetailsComponent,
    ClearanceRowComponent,
    ShipStoresComponent,
    DeleteButtonComponent,
    ViewPortCallComponent,
    SaveShipStoresComponent,
    PassengerListComponent,
    FindPortOfEmbarkationComponent,
    SearchPassengerPortComponent,
    CargoDescriptionComponent,
    SetActualTimeComponent,
    CargoComponent,
    CargoTableComponent,
    ConsignmentFormComponent,
    CargoItemFormComponent,
    VoyagesComponent,
    SaveVoyagesComponent,
    SaveNewPortCallComponent,
  ],
  exports: [
    ClearanceComponent,
    PortCallComponent,
    RegistrationComponent,
    ViewPortCallComponent,
  ],
  providers: [PortCallService, FalShipStoresService, PortCallPassengerListService, CountryService, PortCallDetailsService, FalCargoService]
})
export class PortCallModule { }
