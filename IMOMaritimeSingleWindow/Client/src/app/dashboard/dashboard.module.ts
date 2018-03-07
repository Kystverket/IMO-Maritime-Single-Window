import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RegistrerUserComponent } from './basis-data/user/registrer-user/registrer-user.component';
import { EditUserComponent } from './basis-data/user/edit-user/edit-user.component';
import { RegistrerShipComponent } from './basis-data/ship/registrer-ship/registrer-ship.component';
import { RegistrerLocationComponent } from './basis-data/location/registrer-location/registrer-location.component';
import { RegistrerCompanyComponent } from './basis-data/company/registrer-company/registrer-company.component';
import { UserFormComponent } from './basis-data/user/user-form/user-form.component';
import { ShipFormComponent } from './basis-data/ship/ship-form/ship-form.component';
import { LocationFormComponent } from './basis-data/location/location-form/location-form.component';
import { CompanyFormComponent } from './basis-data/company/company-form/company-form.component';
import { PortCallRegistrationComponent } from './port-call/port-call-registration/port-call-registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    RegistrerUserComponent,
    EditUserComponent,
    RegistrerShipComponent,
    RegistrerLocationComponent,
    RegistrerCompanyComponent,
    UserFormComponent,
    ShipFormComponent,
    LocationFormComponent,
    CompanyFormComponent,
    PortCallRegistrationComponent
  ]
})

export class DashboardModule { }
