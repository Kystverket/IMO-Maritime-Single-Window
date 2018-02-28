import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { UserModule } from './user/user.module';
import { Route } from '@angular/compiler/src/core';

import { AddUserComponent } from './user/add-user/add-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent 
    },
    {
        path: 'user/registrer', component: AddUserComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}