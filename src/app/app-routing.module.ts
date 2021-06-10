import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from './app-layout/app-layout.component'
import {LoginComponent} from './login/login.component';
import {EnquiryComponent} from './enquiry/enquiry.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'app-layout', component: AppLayoutComponent, children:[
    {path:'app-layout/app-dashboard', component:DashboardComponent},
    {path:'app-enquiry', component:EnquiryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
