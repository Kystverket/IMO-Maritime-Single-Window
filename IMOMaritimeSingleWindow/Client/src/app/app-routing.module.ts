import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  {
      path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent 
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes, 
//      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}