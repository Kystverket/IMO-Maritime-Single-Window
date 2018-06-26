import { ButtonRowComponent } from './overview/button-row/button-row.component';
import { ClearanceComponent } from './clearance/clearance.component';
import { CommonModule } from '@angular/common';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { ConfirmDataComponent } from './new-port-call-draft/ship-location-time/confirm-data/confirm-data.component';
import { EtaEtdComponent } from './new-port-call-draft/ship-location-time/eta-etd/eta-etd.component';
import { FindLocationComponent } from './new-port-call-draft/ship-location-time/find-location/find-location.component';
import { FindShipComponent } from './new-port-call-draft/ship-location-time/find-ship/find-ship.component';
import { FormsComponent } from './registration/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NewPortCallDraftComponent } from './new-port-call-draft/new-port-call-draft.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { OverviewComponent } from './overview/overview.component';
import { PortCallComponent } from './port-call.component';
import { PortCallDetailsComponent } from './registration/forms/port-call-details/port-call-details.component';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';
import { PurposeComponent } from './registration/forms/port-call-details/purpose/purpose.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReportingComponent } from './registration/forms/port-call-details/reporting/reporting.component';
import { SaveDetailsComponent } from './registration/forms/port-call-details/save-details/save-details.component';
import { SharedModule } from 'app/shared/shared.module';
import { ShipLocationTimeComponent } from './new-port-call-draft/ship-location-time/ship-location-time.component';
import { ViewPortCallComponent } from './view-port-call/view-port-call.component';
// tslint:disable-next-line:max-line-length
import { CrewPassengersDimensionsComponent } from './registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component';
import { ClearanceRowComponent } from './overview/clearance-row/clearance-row.component';
import { ShipStoresComponent } from './registration/forms/ship-stores/ship-stores.component';
import { DeleteButtonComponent } from './registration/forms/ship-stores/delete-button/delete-button.component';
import { PortCallShipStoresService } from '../../../shared/services/port-call-ship-stores.service';

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
    ViewPortCallComponent,
  ],
  exports: [
    ClearanceComponent,
    NewPortCallDraftComponent,
    PortCallComponent,
    RegistrationComponent,
    ViewPortCallComponent,
  ],
  providers: [PortCallService, PortCallShipStoresService]
})
export class PortCallModule {}
