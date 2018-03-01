import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { ConfigService } from './shared/utils/config.service';
import { AuthenticateXHRBackend } from '../authenticate-xhr.backend';
import { UserService } from './shared/services/user.service';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: XHRBackend, useClass: AuthenticateXHRBackend },
    ConfigService, 
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
