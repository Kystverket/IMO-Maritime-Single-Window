import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../main-content/header/header.module';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error.component';

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
