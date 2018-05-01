import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsnCardComponent } from './ssn-card/ssn-card.component';
import { TableCardComponent } from './table-card/table-card.component';
import { ConfirmationViewComponent } from './confirmation-view/confirmation-view.component';
import { SelectedPurposesComponent } from './confirmation-view/port-call-details/selected-purposes/selected-purposes.component';
import { PortCallDetailsComponent } from './confirmation-view/port-call-details/port-call-details.component';
import { ClearancesComponent } from './confirmation-view/clearances/clearances.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SsnCardComponent,
    TableCardComponent,
    ConfirmationViewComponent,
    SelectedPurposesComponent,
    PortCallDetailsComponent,
    ClearancesComponent
  ],
  exports: [
    SsnCardComponent,
    TableCardComponent,
    ConfirmationViewComponent
  ]
})
export class SharedModule { }
