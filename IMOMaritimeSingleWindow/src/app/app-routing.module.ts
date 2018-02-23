import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './components/login/login.component';
import { MenuComponent }        from './components/menu/menu.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'user/add', component: AddUserComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}