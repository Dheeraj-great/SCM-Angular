import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from './app-layout/app-layout.component'
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'app-layout', component: AppLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
