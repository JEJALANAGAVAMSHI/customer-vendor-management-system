import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessRegisterComponent } from './components/businessregister/businessregister.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'businessregister', component: BusinessRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
