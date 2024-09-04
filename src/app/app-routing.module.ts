import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusinessComponent } from './components/addbusiness/addbusiness.component';
import { BusinessRegisterComponent } from './components/businessregister/businessregister.component';
import { CustomerregisterComponent } from './components/customerregister/customerregister.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'businessregister', component: BusinessRegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addbusiness', component: AddBusinessComponent },
  { path: 'customerregister', component: CustomerregisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
