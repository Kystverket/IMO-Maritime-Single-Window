import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderHomeComponent
  ],
  exports: [
    HeaderComponent,
    HeaderHomeComponent
  ]
})
export class HeaderModule { }
