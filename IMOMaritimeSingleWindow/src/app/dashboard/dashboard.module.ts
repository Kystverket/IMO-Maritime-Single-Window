import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserModule } from './user/user.module';
import { AddUserComponent } from './user/add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    UserModule
  ],
  declarations: [],
})

export class DashboardModule { }
