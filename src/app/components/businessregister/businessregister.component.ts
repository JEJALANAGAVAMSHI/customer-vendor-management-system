import {Component} from '@angular/core';
import { ApiResponse } from '../../models/apiResponse';
import { RegisterVendor } from '../../models/registerVendor';
import { RegisterVendorService } from '../../services/register-vendor.service';

@Component({
    selector:'app-businessregister',
    templateUrl:'./businessregister.component.html',
    styleUrl:'./businessregister.component.css'
})

export class BusinessRegisterComponent{
    vendor : RegisterVendor={
        userName:  '',
        email: '',
        passwordHash: '',
        phoneNumber : '',
        address : '',
        state : '',
        postalCode : ''
    }
    constructor(private registerVendorService: RegisterVendorService) { }

    onRegister() {
        this.registerVendorService.RegisterVendor(this.vendor)
          .subscribe(
            
            (response : ApiResponse)=> {
              console.log('Registration successful');
            },
            error => {
              console.error('Registration failed', error);
            }
          );
    }
}