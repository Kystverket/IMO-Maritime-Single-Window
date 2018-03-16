import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RegisterUserComponent } from './basis-data/user/register-user/register-user.component';
import { EditUserComponent } from './basis-data/user/edit-user/edit-user.component';
import { RegisterShipComponent } from './basis-data/ship/register-ship/register-ship.component';
import { RegisterLocationComponent } from './basis-data/location/register-location/register-location.component';
import { RegisterCompanyComponent } from './basis-data/company/register-company/register-company.component';
import { UserFormComponent } from './basis-data/user/user-form/user-form.component';
import { ShipFormComponent } from './basis-data/ship/ship-form/ship-form.component';
import { LocationFormComponent } from './basis-data/location/location-form/location-form.component';
import { CompanyFormComponent } from './basis-data/company/company-form/company-form.component';
import { PortCallRegistrationComponent } from './port-call/port-call-registration/port-call-registration.component';
import { ShipService } from '../shared/services/ship.service';
import { CompanyService } from '../shared/services/company.service';

import { FindLocationComponent } from './basis-data/location/find-location/find-location.component';
import { LocationService } from '../shared/services/location.service';
import { FindShipComponent } from './basis-data/ship/find-ship/find-ship.component';
import { SearchCompanyComponent } from './basis-data/company/search-company/search-company.component';
import { EtaEtdComponent } from './port-call/eta-etd/eta-etd.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    RegisterUserComponent,
    EditUserComponent,
    RegisterShipComponent,
    RegisterLocationComponent,
    RegisterCompanyComponent,
    UserFormComponent,
    ShipFormComponent,
    LocationFormComponent,
    CompanyFormComponent,
    PortCallRegistrationComponent,
    FindLocationComponent,
    SearchCompanyComponent,
    FindShipComponent,
    EtaEtdComponent
  ],
  providers: [ShipService, LocationService],
})

export class DashboardModule { }
