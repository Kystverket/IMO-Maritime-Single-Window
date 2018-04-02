import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ProgressBarComponent } from './registration/progress-bar/progress-bar.component';
import { FormsComponent } from './registration/forms/forms.component';
import { ShipLocationTimeComponent } from './registration/forms/ship-location-time/ship-location-time.component';
import { FindShipComponent } from './registration/forms/ship-location-time/find-ship/find-ship.component';
import { FindLocationComponent } from './registration/forms/ship-location-time/find-location/find-location.component';
import { EtaEtdComponent } from './registration/forms/ship-location-time/eta-etd/eta-etd.component';
import { ConfirmDataComponent } from './registration/forms/ship-location-time/confirm-data/confirm-data.component';
import { PortCallDetailsComponent } from './registration/forms/port-call-details/port-call-details.component';
import { ReportingComponent } from './registration/forms/port-call-details/reporting/reporting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CrewPassengersDimensionsComponent } from './registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component';



@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
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
    CrewPassengersDimensionsComponent
  ],
  exports: [
    RegistrationComponent
  ]
})
export class PortCallModule { }
