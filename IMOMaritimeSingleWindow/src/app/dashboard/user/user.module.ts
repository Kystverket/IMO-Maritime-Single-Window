import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AddUserComponent
  ],
})
export class UserModule { }
