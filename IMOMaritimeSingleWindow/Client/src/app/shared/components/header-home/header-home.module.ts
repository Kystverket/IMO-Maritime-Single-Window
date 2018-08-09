import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../../node_modules/@angular/router';
import { HeaderHomeComponent } from './header-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderHomeComponent
  ],
  exports: [
    HeaderHomeComponent
  ]
})
export class HeaderHomeModule { }
