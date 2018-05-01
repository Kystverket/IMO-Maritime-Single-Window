import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/components/shared.module';
import { ConfirmationComponent } from './confirmation.component';
import { SaveAndSendComponent } from './save-and-send/save-and-send.component';

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
    SaveAndSendComponent
  ],
  exports: [
    ConfirmationComponent
  ]
})
export class ConfirmationModule { }
