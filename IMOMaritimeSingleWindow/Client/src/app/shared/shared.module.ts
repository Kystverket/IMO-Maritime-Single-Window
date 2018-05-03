import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClearancesComponent } from './components/confirmation-view/clearances/clearances.component';
import { ConfirmationViewComponent } from './components/confirmation-view/confirmation-view.component';
import { PortCallDetailsComponent } from './components/confirmation-view/port-call-details/port-call-details.component';
import { SelectedPurposesComponent } from './components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component';
import { SsnCardComponent } from './components/ssn-card/ssn-card.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { PositiveNumberValidator } from './utils/custom-validators/positive-number-validator.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [
    SsnCardComponent,
    TableCardComponent,
    ConfirmationViewComponent,
    SelectedPurposesComponent,
    PortCallDetailsComponent,
    ClearancesComponent,
    PositiveNumberValidator
  ],
  exports: [
    SsnCardComponent,
    TableCardComponent,
    ConfirmationViewComponent,
    PositiveNumberValidator
  ]
})
export class SharedModule { }
