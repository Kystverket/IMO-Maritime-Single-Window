import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { LocationFormComponent } from './basis-data/location/location-form/location-form.component';
import { RegisterLocationComponent } from './basis-data/location/register-location/register-location.component';
import { RegisterOrganizationComponent } from './basis-data/organization/register-organization/register-organization.component';
import { RegisterShipComponent } from './basis-data/ship/register-ship/register-ship.component';
import { SearchShipFlagCodeComponent } from './basis-data/ship/search-ship-flag-code/search-ship-flag-code.component';
import { ViewShipInfoComponent } from './basis-data/ship/view-ship-info/view-ship-info.component';
import { EditUserComponent } from './basis-data/user/edit-user/edit-user.component';
import { RegisterUserComponent } from './basis-data/user/register-user/register-user.component';
import { UserFormComponent } from './basis-data/user/user-form/user-form.component';
import { ContentContainerComponent } from './content-container.component';
import { PortCallModule } from './port-call/port-call.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule,
    PortCallModule,
    NgSelectModule,
    SharedModule
  ],
  declarations: [
    ContentContainerComponent,
    RegisterUserComponent,
    EditUserComponent,
    RegisterShipComponent,
    RegisterLocationComponent,
    RegisterOrganizationComponent,
    UserFormComponent,
    LocationFormComponent,
    SearchShipFlagCodeComponent,
    ViewShipInfoComponent
  ],
  exports: [ContentContainerComponent]
})
export class ContentContainerModule { }
