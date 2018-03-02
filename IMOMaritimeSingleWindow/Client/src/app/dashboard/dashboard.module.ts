import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { RegistrerUserComponent } from './user/registrer-user/registrer-user.component';
import { RegistrerShipComponent } from './ship/registrer-ship/registrer-ship.component';
import { RegistrerLocationComponent } from './location/registrer-location/registrer-location.component';
import { RegistrerCompanyComponent } from './company/registrer-company/registrer-company.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { ShipFormComponent } from './ship/ship-form/ship-form.component';
import { LocationFormComponent } from './location/location-form/location-form.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
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
    CompanyFormComponent
  ]
})

export class DashboardModule { }
