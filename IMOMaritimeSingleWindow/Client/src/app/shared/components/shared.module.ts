import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsnCardComponent } from './ssn-card/ssn-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SsnCardComponent
  ],
  exports: [
    SsnCardComponent
  ]
})
export class SharedModule { }
