import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/components/shared.module';
import { ConfirmationComponent } from './confirmation.component';
import { PortCallDetailsComponent } from './port-call-details/port-call-details.component';
import { SelectedPurposesComponent } from './port-call-details/selected-purposes/selected-purposes.component';

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
    PortCallDetailsComponent,
    SelectedPurposesComponent
  ],
  exports: [
    ConfirmationComponent,
    SelectedPurposesComponent
  ]
})
export class ConfirmationModule { }
