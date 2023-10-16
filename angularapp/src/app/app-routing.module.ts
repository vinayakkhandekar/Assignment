import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateaccComponent } from './createacc/createacc.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboardcomponent';

const routes: Routes = [
 {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"createform",component:CreateaccComponent},
  {path:"login" , component:LoginComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
