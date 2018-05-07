import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from '../../../shared/shared.module';
import { PortCallService } from '../../../shared/services/port-call.service';
import { ClearanceComponent } from './clearance/clearance.component';
import { ConfirmationModule } from './confirmation/confirmation.module';
import { NewPortCallComponent } from './new-port-call/new-port-call.component';
import { ConfirmDataComponent } from './new-port-call/ship-location-time/confirm-data/confirm-data.component';
import { EtaEtdComponent } from './new-port-call/ship-location-time/eta-etd/eta-etd.component';
import { FindLocationComponent } from './new-port-call/ship-location-time/find-location/find-location.component';
import { FindShipComponent } from './new-port-call/ship-location-time/find-ship/find-ship.component';
import { ShipLocationTimeComponent } from './new-port-call/ship-location-time/ship-location-time.component';
import { ButtonRowComponent } from './overview/button-row/button-row.component';
import { OverviewComponent } from './overview/overview.component';
import { PortCallComponent } from './port-call.component';
import { FormsComponent } from './registration/forms/forms.component';
import { CrewPassengersDimensionsComponent } from './registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component';
import { PortCallDetailsComponent } from './registration/forms/port-call-details/port-call-details.component';
import { PurposeComponent } from './registration/forms/port-call-details/purpose/purpose.component';
import { ReportingComponent } from './registration/forms/port-call-details/reporting/reporting.component';
import { SaveDetailsComponent } from './registration/forms/port-call-details/save-details/save-details.component';
import { InfoComponent } from './registration/info/info.component';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewPortCallComponent } from './view-port-call/view-port-call.component';
import { NgSelectModule } from '@ng-select/ng-select';

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
  entryComponents: [ButtonRowComponent],
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
    InfoComponent,
    ButtonRowComponent,
    ViewPortCallComponent,
    ClearanceComponent,
    SaveDetailsComponent,
    NewPortCallComponent
  ],
  exports: [
    PortCallComponent,
    NewPortCallComponent,
    RegistrationComponent,
    ViewPortCallComponent,
    ClearanceComponent
  ],
  providers: [
    PortCallService
  ]
})
export class PortCallModule { }
