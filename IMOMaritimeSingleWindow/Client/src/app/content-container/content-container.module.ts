import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RegisterUserComponent } from './basis-data/user/register-user/register-user.component';
import { EditUserComponent } from './basis-data/user/edit-user/edit-user.component';
import { RegisterShipComponent } from './basis-data/ship/register-ship/register-ship.component';
import { RegisterLocationComponent } from './basis-data/location/register-location/register-location.component';
import { RegisterCompanyComponent } from './basis-data/company/register-company/register-company.component';
import { UserFormComponent } from './basis-data/user/user-form/user-form.component';
import { ShipFormComponent } from './basis-data/ship/ship-form/ship-form.component';
import { LocationFormComponent } from './basis-data/location/location-form/location-form.component';
import { CompanyFormComponent } from './basis-data/company/company-form/company-form.component';

import { ShipService } from '../shared/services/ship.service';
import { CompanyService } from '../shared/services/company.service';
import { CountryService } from '../shared/services/country.service';
import { UserService } from '../shared/services/user.service';
import { LocationService } from '../shared/services/location.service';
import { SearchCompanyComponent } from './basis-data/company/search-company/search-company.component';
import { PortCallOverviewService } from '../shared/services/port-call-overview.service'

import { SearchCountryComponent } from './basis-data/country/search-country/search-country.component';
import { SearchShipFlagCodeComponent } from './basis-data/ship-flag-code/search-ship-flag-code/search-ship-flag-code.component';
import { ShipFlagCodeService } from '../shared/services/ship-flag-code.service';
import { ContentContainerComponent } from './content-container.component';
import { PortCallModule } from './port-call/port-call.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule,
    PortCallModule
  ],
  declarations: [
    ContentContainerComponent,
    RegisterUserComponent,
    EditUserComponent,
    RegisterShipComponent,
    RegisterLocationComponent,
    RegisterCompanyComponent,
    UserFormComponent,
    ShipFormComponent,
    LocationFormComponent,
    CompanyFormComponent,
    SearchCompanyComponent,
    SearchCountryComponent,
    SearchShipFlagCodeComponent
  ],
  exports: [ContentContainerComponent]
})
export class ContentContainerModule { }
