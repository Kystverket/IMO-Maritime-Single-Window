import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { ConfirmationComponent } from './confirmation.component';
import { ActivatePortCallComponent } from './activate-port-call/activate-port-call.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    ConfirmationComponent,
    ActivatePortCallComponent
  ],
  exports: [
    ConfirmationComponent
  ]
})
export class ConfirmationModule { }
