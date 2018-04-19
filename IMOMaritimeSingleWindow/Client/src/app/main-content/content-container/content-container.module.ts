import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyFormComponent } from './basis-data/company/company-form/company-form.component';
import { RegisterCompanyComponent } from './basis-data/company/register-company/register-company.component';
import { SearchCompanyComponent } from './basis-data/company/search-company/search-company.component';
import { LocationFormComponent } from './basis-data/location/location-form/location-form.component';
import { RegisterLocationComponent } from './basis-data/location/register-location/register-location.component';
import { SearchShipFlagCodeComponent } from './basis-data/ship-flag-code/search-ship-flag-code/search-ship-flag-code.component';
import { RegisterShipComponent } from './basis-data/ship/register-ship/register-ship.component';
import { ShipFormComponent } from './basis-data/ship/ship-form/ship-form.component';
import { EditUserComponent } from './basis-data/user/edit-user/edit-user.component';
import { RegisterUserComponent } from './basis-data/user/register-user/register-user.component';
import { UserFormComponent } from './basis-data/user/user-form/user-form.component';
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
    SearchShipFlagCodeComponent,
  ],
  exports: [ContentContainerComponent]
})
export class ContentContainerModule { }
