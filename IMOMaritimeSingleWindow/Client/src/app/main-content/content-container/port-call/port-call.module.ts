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
import { PortCallFalPassengerListService } from 'app/shared/services/port-call-fal-passenger-list.service';
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
import { SetActualTimeComponent } from './overview/set-actual-time/set-actual-time.component';
import { PortCallComponent } from './port-call.component';
import { CargoComponent } from './registration/forms/cargo/cargo.component';
import { ConsignmentFormComponent } from './registration/forms/cargo/consignment-form/consignment-form.component';
import { FormsComponent } from './registration/forms/forms.component';
import { PassengerListComponent } from './registration/forms/passenger-list/passenger-list.component';
import { PassengerModalComponent } from './registration/forms/passenger-list/passenger-modal/passenger-modal.component';
import { SavePassengerListComponent } from './registration/forms/passenger-list/save-passenger-list/save-passenger-list.component';
import { CargoDescriptionComponent } from './registration/forms/port-call-details/cargo-description/cargo-description.component';
import { CrewPassengersDimensionsComponent } from './registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component';
import { PortCallDetailsComponent } from './registration/forms/port-call-details/port-call-details.component';
import { PurposeComponent } from './registration/forms/port-call-details/purpose/purpose.component';
import { ReportingComponent } from './registration/forms/port-call-details/reporting/reporting.component';
import { SaveDetailsComponent } from './registration/forms/port-call-details/save-details/save-details.component';
import { PrevAndNextPocComponent } from './registration/forms/prev-and-next-poc/prev-and-next-poc.component';
import { SavePrevAndNextPocComponent } from './registration/forms/prev-and-next-poc/save-prev-and-next-poc/save-prev-and-next-poc.component';
import { ActionButtonsComponent } from './registration/forms/shared/action-buttons/action-buttons.component';
import { DeleteButtonComponent } from './registration/forms/shared/delete-button/delete-button.component';
import { IdentityDocumentComponent } from './registration/forms/shared/identity-document/identity-document.component';
import { DatePickerComponent } from './registration/forms/shared/date-picker/date-picker.component';
import { SaveShipStoresComponent } from './registration/forms/ship-stores/save-ship-stores/save-ship-stores.component';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewPortCallComponent } from './view-port-call/view-port-call.component';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { ValidateDateTimeService } from 'app/shared/services/validate-date-time.service';
import { CrewListComponent } from './registration/forms/crew-list/crew-list.component';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    NgbModule,
    NgSelectModule,
    SharedModule
  ],
  entryComponents: [ButtonRowComponent, ClearanceRowComponent, DeleteButtonComponent, ActionButtonsComponent],
  declarations: [
    ActionButtonsComponent,
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
    SavePrevAndNextPocComponent,
    CargoDescriptionComponent,
    SetActualTimeComponent,
    CargoComponent,
    CargoTableComponent,
    ConsignmentFormComponent,
    CargoItemFormComponent,
    DatePickerComponent,
    SavePassengerListComponent,
    SavePrevAndNextPocComponent,
    IdentityDocumentComponent,
    PassengerModalComponent,
    CrewListComponent
  ],
  exports: [
    ClearanceComponent,
    NewPortCallDraftComponent,
    PortCallComponent,
    RegistrationComponent,
    ViewPortCallComponent,
  ],
  providers: [
    PortCallService,
    FalShipStoresService,
    PortCallFalPassengerListService,
    IdentityDocumentService,
    CountryService,
    PrevAndNextPocService,
    PortCallDetailsService,
    FalCargoService,
    ValidateDateTimeService,
    PortCallFalPersonOnBoardService
  ]
})
export class PortCallModule { }
