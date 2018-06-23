import { ActivatePortCallComponent } from './activate-port-call/activate-port-call.component';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    SharedModule
  ],
  declarations: [
    ActivatePortCallComponent,
    ConfirmationComponent,
  ],
  exports: [
    ConfirmationComponent
  ]
})
export class ConfirmationModule { }
