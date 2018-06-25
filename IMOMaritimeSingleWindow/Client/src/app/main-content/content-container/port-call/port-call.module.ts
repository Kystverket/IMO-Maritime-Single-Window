import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PortCallService } from 'app/shared/services/port-call.service';
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
import { OverviewComponent } from './overview/overview.component';
import { PortCallComponent } from './port-call.component';
import { FormsComponent } from './registration/forms/forms.component';
import { PortCallDetailsComponent } from './registration/forms/port-call-details/port-call-details.component';
import { PurposeComponent } from './registration/forms/port-call-details/purpose/purpose.component';
import { ReportingComponent } from './registration/forms/port-call-details/reporting/reporting.component';
import { SaveDetailsComponent } from './registration/forms/port-call-details/save-details/save-details.component';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewPortCallComponent } from './view-port-call/view-port-call.component';
// tslint:disable-next-line:max-line-length
import { CrewPassengersDimensionsComponent } from './registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component';
import { ClearanceRowComponent } from './overview/clearance-row/clearance-row.component';
import { ShipStoresComponent } from './registration/forms/ship-stores/ship-stores.component';
import { DeleteButtonComponent } from './registration/forms/ship-stores/delete-button/delete-button.component';
import { PortCallShipStoresService } from '../../../shared/services/port-call-ship-stores.service';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    NgSelectModule,
    ConfirmationModule,
    SharedModule
  ],
  entryComponents: [ButtonRowComponent, ClearanceRowComponent, DeleteButtonComponent],
  declarations: [
    RegistrationComponent,
    ProgressBarComponent,
    FormsComponent,
    ShipLocationTimeComponent,
    FindShipComponent,
    FindLocationComponent,
    EtaEtdComponent,
    ConfirmDataComponent,
    PortCallDetailsComponent,
    ReportingComponent,
    CrewPassengersDimensionsComponent,
    PurposeComponent,
    OverviewComponent,
    PortCallComponent,
    ButtonRowComponent,
    ViewPortCallComponent,
    ClearanceComponent,
    SaveDetailsComponent,
    NewPortCallDraftComponent,
    ClearanceRowComponent,
    ShipStoresComponent,
    DeleteButtonComponent
  ],
  exports: [
    PortCallComponent,
    NewPortCallDraftComponent,
    RegistrationComponent,
    ViewPortCallComponent,
    ClearanceComponent
  ],
  providers: [PortCallService, PortCallShipStoresService]
})
export class PortCallModule {}
