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

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    RegisterUserComponent,
    UserConfirmationComponent,
    RegisterShipComponent,
    SearchShipFlagCodeComponent,
    ViewShipInfoComponent,
    RegisterOrganizationComponent,
    RegisterLocationComponent
  ],
  exports: [
    RegisterUserComponent,
    ViewShipInfoComponent,
    RegisterShipComponent,
    RegisterLocationComponent,
    RegisterOrganizationComponent
  ]
})
export class BasisDataModule { }
