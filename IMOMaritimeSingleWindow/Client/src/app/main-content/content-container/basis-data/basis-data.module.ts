import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccountService, LocationService, OrganizationService, ShipService } from 'app/shared/services/';
import { SharedModule } from 'app/shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RegisterLocationComponent } from './location/register-location/register-location.component';
import { LocationButtonRowComponent } from './location/view-location-info/location-button-row/location-button-row.component';
import { ViewLocationInfoComponent } from './location/view-location-info/view-location-info.component';
import { RegisterOrganizationComponent } from './organization/register-organization/register-organization.component';
import { ViewOrganizationInfoComponent } from './organization/view-organization-info/view-organization-info.component';
import { CertificateOfRegistryComponent } from './ship/register-ship/certificate-of-registry/certificate-of-registry.component';
import { RegisterShipComponent } from './ship/register-ship/register-ship.component';
import { ViewShipInfoComponent } from './ship/view-ship-info/view-ship-info.component';
import { RegisterUserComponent } from './user/register-user/register-user.component';
import { ViewUserInfoComponent } from './user/view-user-info/view-user-info.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgSelectModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  declarations: [
    RegisterUserComponent,
    ViewUserInfoComponent,
    RegisterShipComponent,
    ViewShipInfoComponent,
    RegisterOrganizationComponent,
    ViewOrganizationInfoComponent,
    RegisterLocationComponent,
    ViewLocationInfoComponent,
    LocationButtonRowComponent,
    CertificateOfRegistryComponent
  ],
  exports: [
    RegisterUserComponent,
    ViewUserInfoComponent,
    ViewShipInfoComponent,
    RegisterShipComponent,
    RegisterLocationComponent,
    RegisterOrganizationComponent,
    ViewOrganizationInfoComponent,
    ViewLocationInfoComponent
  ],
  providers: [
    LocationService,
    OrganizationService,
    ShipService,
    AccountService
  ],
  entryComponents: [
    LocationButtonRowComponent
  ]
})
export class BasisDataModule { }
