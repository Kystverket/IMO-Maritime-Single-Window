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
import { LoginService } from './shared/services/login.service';

import { AppRoutingModule } from './app-routing.module';
import { ContentContainerModule } from './content-container/content-container.module';
import { ContentService } from './shared/services/content.service';

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
    ContentContainerModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: XHRBackend, useClass: AuthenticateXHRBackend },
    ConfigService,
    LoginService,
    ContentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
