import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddBusinessComponent } from './components/addbusiness/addbusiness.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { BusinessRegisterComponent } from './components/businessregister/businessregister.component';
import { CookiepolicyComponent } from './components/cookiepolicy/cookiepolicy.component';
import { CustomerdashboardComponent } from './components/customerdashboard/customerdashboard.component';
import { CustomerregisterComponent } from './components/customerregister/customerregister.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './components/termsofuse/termsofuse.component';
import { VendordashboardComponent } from './components/vendordashboard/vendordashboard.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'businessregister', component: BusinessRegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addbusiness', component: AddBusinessComponent,   },
  { path: 'admindashboard', component: AdmindashboardComponent, canActivate: [AuthGuard], data: { role: 'Admin' }},
  { path: 'vendordashboard', component: VendordashboardComponent ,canActivate: [AuthGuard], data: { role: 'Vendor' }},
  { path: 'customerdashboard', component: CustomerdashboardComponent, canActivate: [AuthGuard], data: { role: 'Customer' } },
  { path: 'customerregister', component: CustomerregisterComponent },
  { path : 'admindashboard/vendors' ,component: ViewVendorsComponent },
  { path : 'termsofuse' ,component: TermsofuseComponent },
  { path : 'privacypolicy' ,component: PrivacypolicyComponent },
  { path : 'cookiepolicy' ,component: CookiepolicyComponent },
  { path : 'admindashboard/customers' ,component: ViewCustomersComponent },
  { path : 'admindashboard/add-customer', component : AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
