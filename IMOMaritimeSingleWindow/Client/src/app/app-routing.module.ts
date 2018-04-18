import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: MainContentComponent
  },
  {
    path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'
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