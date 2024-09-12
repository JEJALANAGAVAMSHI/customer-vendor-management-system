import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BusinessRegisterComponent } from './components/businessregister/businessregister.component';
import { LoginComponent } from './components/login/login.component';
import { AddBusinessComponent } from './components/addbusiness/addbusiness.component';
import { CustomerregisterComponent } from './components/customerregister/customerregister.component';
import { provideHttpClient } from '@angular/common/http';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { VendordashboardComponent } from './components/vendordashboard/vendordashboard.component';
import { CustomerdashboardComponent } from './components/customerdashboard/customerdashboard.component';
import { ViewVendorsComponent } from './components/view-vendors/view-vendors.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { TermsofuseComponent } from './components/termsofuse/termsofuse.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { CookiepolicyComponent } from './components/cookiepolicy/cookiepolicy.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddVendorComponent } from './components/add-vendor/add-vendor.component';
import { GetBusinessByIdComponent } from './components/get-business-by-id/get-business-by-id.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { VendorBusinessByIdComponent } from './components/vendor-business-by-id/vendor-business-by-id.component';
import { VendorAddProductComponent } from './components/vendor-add-product/vendor-add-product.component';
import { VendorAddServiceComponent } from './components/vendor-add-service/vendor-add-service.component';
import { CustomerOffersComponent } from './components/customer-offers/customer-offers.component';
import { VendorOffersComponent } from './components/vendor-offers/vendor-offers.component';
import { VendorAddOffersComponent } from './components/vendor-add-offers/vendor-add-offers.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { VendorAddLocationComponent } from './components/vendor-add-location/vendor-add-location.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BusinessRegisterComponent,
    LoginComponent,
    AddBusinessComponent,
    CustomerregisterComponent,
    AdmindashboardComponent,
    VendordashboardComponent,
    CustomerdashboardComponent,
    ViewVendorsComponent,
    ViewCustomersComponent,
    TermsofuseComponent,
    PrivacypolicyComponent,
    CookiepolicyComponent,
    AddCustomerComponent,
    AddVendorComponent,
    GetBusinessByIdComponent,
    BusinessListComponent,
    VendorBusinessByIdComponent,
    VendorAddProductComponent,
    VendorAddServiceComponent,
    CustomerOffersComponent,
    VendorOffersComponent,
    VendorAddOffersComponent,
    VendorAddLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(),{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
