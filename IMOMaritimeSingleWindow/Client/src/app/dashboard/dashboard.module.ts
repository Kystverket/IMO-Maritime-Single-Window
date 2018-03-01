import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { RegistrerUserComponent } from './user/registrer-user/registrer-user.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    RegistrerUserComponent,
    EditUserComponent
  ]
})

export class DashboardModule { }
