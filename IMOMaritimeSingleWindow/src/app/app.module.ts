import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { AddUserComponent } from './dashboard/user/add-user/add-user.component';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from './shared/utils/config.service';
import { AuthenticateXHRBackend } from '../authenticate-xhr.backend';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AddUserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [ConfigService, {
    provide: XHRBackend,
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
