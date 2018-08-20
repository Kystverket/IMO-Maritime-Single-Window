import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error.component';
import { HeaderModule } from '../main-content/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    SharedModule
  ],
  declarations: [
    ErrorComponent
  ]
})
export class ErrorModule { }
