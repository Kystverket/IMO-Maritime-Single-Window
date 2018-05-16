import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { RegisterLocationComponent } from './location/register-location/register-location.component';
import { RegisterOrganizationComponent } from './organization/register-organization/register-organization.component';
import { RegisterShipComponent } from './ship/register-ship/register-ship.component';
import { SearchShipFlagCodeComponent } from './ship/search-ship-flag-code/search-ship-flag-code.component';
import { ViewShipInfoComponent } from './ship/view-ship-info/view-ship-info.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { UserConfirmationComponent } from './user/register-user/user-confirmation/user-confirmation.component';
import { ViewOrganizationInfoComponent } from './organization/view-organization-info/view-organization-info.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgSelectModule,
    SharedModule
  ],
  declarations: [
    RegisterUserComponent,
    UserConfirmationComponent,
    RegisterShipComponent,
    SearchShipFlagCodeComponent,
    ViewShipInfoComponent,
    RegisterOrganizationComponent,
    ViewOrganizationInfoComponent,
    RegisterLocationComponent
  ],
  exports: [
    RegisterUserComponent,
    ViewShipInfoComponent,
    RegisterShipComponent,
    RegisterLocationComponent,
    RegisterOrganizationComponent,
    ViewOrganizationInfoComponent
  ]
})
export class BasisDataModule { }
