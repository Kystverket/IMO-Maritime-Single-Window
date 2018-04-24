import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsnCardComponent } from './ssn-card/ssn-card.component';
import { TableCardComponent } from './table-card/table-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SsnCardComponent,
    TableCardComponent
  ],
  exports: [
    SsnCardComponent,
    TableCardComponent
  ]
})
export class SharedModule { }
