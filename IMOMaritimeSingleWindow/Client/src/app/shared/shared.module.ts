import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClearancesComponent } from './components/confirmation-view/clearances/clearances.component';
import { ConfirmationViewComponent } from './components/confirmation-view/confirmation-view.component';
import { PortCallDetailsComponent } from './components/confirmation-view/port-call-details/port-call-details.component';
import { SelectedPurposesComponent } from './components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component';
import { ContactSelectComponent } from './components/contact-select/contact-select.component';
import { SsnCardComponent } from './components/ssn-card/ssn-card.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { IntegerValidator } from './utils/custom-validators/integer-validator.directive';
import { NumberValidator } from './utils/custom-validators/number-validator.directive';
import { PositiveNumberValidator } from './utils/custom-validators/positive-number-validator.directive';
import { ContactService } from './services/contact.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, NgSelectModule
  ],
  declarations: [
    SsnCardComponent,
    TableCardComponent,
    ConfirmationViewComponent,
    SelectedPurposesComponent,
    PortCallDetailsComponent,
    ClearancesComponent,
    PositiveNumberValidator,
    NumberValidator,
    IntegerValidator,
    ContactSelectComponent
  ],
  exports: [
    SsnCardComponent,
    TableCardComponent,
    ConfirmationViewComponent,
    PositiveNumberValidator,
    NumberValidator,
    IntegerValidator,
    ContactSelectComponent
  ],
  providers: [
    ContactService
  ]
})
export class SharedModule { }
