import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SsnBgComponent } from '../shared/components/ssn-bg/ssn-bg.component';
import { SsnCardComponent } from '../shared/components/ssn-card/ssn-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    SharedModule,
  ],
  exports: [
    SsnBgComponent,
    SsnCardComponent
  ]
})
export class AuthModule { }