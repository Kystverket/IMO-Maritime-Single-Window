import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserModule } from './user/user.module';

import { AddUserComponent } from './user/add-user/add-user.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    UserModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardModule { }
