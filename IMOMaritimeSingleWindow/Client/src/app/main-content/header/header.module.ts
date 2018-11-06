import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HeaderComponent } from './header.component';

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
