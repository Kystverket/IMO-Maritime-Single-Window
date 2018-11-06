import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CargoItemFormComponent } from 'app/main-content/content-container/port-call/registration/forms/cargo/cargo-item-form/cargo-item-form.component';
import { CargoTableComponent } from 'app/main-content/content-container/port-call/registration/forms/cargo/cargo-table/cargo-table.component';
import { ShipStoresComponent } from 'app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component';
import { ActionButtonsComponent } from 'app/shared/components/action-buttons/action-buttons.component';
import { DeleteButtonComponent } from 'app/shared/components/delete-button/delete-button.component';
import { IdentityDocumentComponent } from 'app/shared/components/identity-document/identity-document.component';
import { CountryService } from 'app/shared/services/country.service';
import { FalCargoService } from 'app/shared/services/fal-cargo.service';
import { FalShipStoresService } from 'app/shared/services/fal-ship-stores.service';
import { IdentityDocumentService } from 'app/shared/services/identtity-document.service';
import { PortCallDetailsService } from 'app/shared/services/port-call-details.service';
import { PortCallFalPersonOnBoardService } from 'app/shared/services/port-call-fal-person-on-board.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ValidateDateTimeService } from 'app/shared/services/validate-date-time.service';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FalSecurityService } from '../../../shared/services/fal-security.service';
import { PortCallOverviewService } from '../../../shared/services/port-call-overview.service';
import { ClearanceComponent } from './clearance/clearance.component';
import { ActivatePortCallComponent } from './confirmation/activate-port-call/activate-port-call.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoadPortCallService } from './load-port-call.service';
import { ButtonRowComponent } from './overview/button-row/button-row.component';
import { ClearanceRowComponent } from './overview/clearance-row/clearance-row.component';
import { OverviewComponent } from './overview/overview.component';
import { SetActualTimeComponent } from './overview/set-actual-time/set-actual-time.component';
import { PortCallComponent } from './port-call.component';
import { CargoComponent } from './registration/forms/cargo/cargo.component';
import { ConsignmentFormComponent } from './registration/forms/cargo/consignment-form/consignment-form.component';
import { CrewListComponent } from './registration/forms/crew-list/crew-list.component';
import { CrewMemberModalComponent } from './registration/forms/crew-list/crew-member-modal/crew-member-modal.component';
import { SaveCrewListComponent } from './registration/forms/crew-list/save-crew-list/save-crew-list.component';
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
import { CompanySecurityOfficerComponent } from './registration/forms/security/company-security-officer/company-security-officer.component';
import { Last10PortCallsTableComponent } from './registration/forms/security/last-10-port-calls/last-10-port-calls-table/last-10-port-calls-table.component';
import { Last10PortCallsComponent } from './registration/forms/security/last-10-port-calls/last-10-port-calls.component';
import { SaveSecurityButtonComponent } from './registration/forms/security/save-security/save-security-button/save-security-button.component';
import { SaveSecurityComponent } from './registration/forms/security/save-security/save-security.component';
import { SecurityDetailsComponent } from './registration/forms/security/security-details/security-details.component';
import { SecurityComponent } from './registration/forms/security/security.component';
import { ShipToShipActivityTableComponent } from './registration/forms/security/ship-to-ship-activity/ship-to-ship-activity-table/ship-to-ship-activity-table.component';
import { ShipToShipActivityComponent } from './registration/forms/security/ship-to-ship-activity/ship-to-ship-activity.component';
import { DatePickerComponent } from './registration/forms/shared/date-picker/date-picker.component';
import { SaveShipStoresComponent } from './registration/forms/ship-stores/save-ship-stores/save-ship-stores.component';
import { ShipStoresModalComponent } from './registration/forms/ship-stores/ship-stores-modal/ship-stores-modal.component';
import { SaveNewPortCallComponent } from './registration/forms/voyages/save-new-port-call/save-new-port-call.component';
import { SaveVoyagesComponent } from './registration/forms/voyages/save-voyages/save-voyages.component';
import { VoyagesComponent } from './registration/forms/voyages/voyages.component';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewPortCallComponent } from './view-port-call/view-port-call.component';

@NgModule({
  imports: [
    CommonModule,
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
    CargoDescriptionComponent,
    SetActualTimeComponent,
    CargoComponent,
    CargoTableComponent,
    ConsignmentFormComponent,
    CargoItemFormComponent,
    DatePickerComponent,
    SavePassengerListComponent,
    IdentityDocumentComponent,
    PassengerModalComponent,
    CrewListComponent,
    CrewMemberModalComponent,
    VoyagesComponent,
    SaveVoyagesComponent,
    SaveNewPortCallComponent,
    SecurityComponent,
    SecurityDetailsComponent,
    CompanySecurityOfficerComponent,
    Last10PortCallsComponent,
    Last10PortCallsTableComponent,
    ShipToShipActivityComponent,
    ShipToShipActivityTableComponent,
    SaveSecurityComponent,
    SaveSecurityButtonComponent,
    ActivatePortCallComponent,
    ConfirmationComponent,
    SaveCrewListComponent,
    ShipStoresModalComponent
  ],
  exports: [
    ClearanceComponent,
    PortCallComponent,
    RegistrationComponent,
    ViewPortCallComponent,
    ConfirmationComponent
  ],
  providers: [
    PortCallService,
    LoadPortCallService,
    FalShipStoresService,
    IdentityDocumentService,
    CountryService,
    PortCallDetailsService,
    FalCargoService,
    ValidateDateTimeService,
    PortCallFalPersonOnBoardService,
    FalSecurityService,
    PortCallOverviewService
  ]
})
export class PortCallModule { }
