import { Component } from '@angular/core';
import { ApiResponse } from '../../models/apiResponse';
import { RegisterCustomer } from '../../models/registerCustomer';
import { RegisterCustomerService } from '../../services/register-customer.service';

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrl: './customerregister.component.css'
})
export class CustomerregisterComponent {
  customer : RegisterCustomer={
    userName:  '',
    email: '',
    passwordHash: '',
    phoneNumber : '',
    address : '',
    state : '',
    postalCode : ''
  }

  constructor(private registerCustomerService: RegisterCustomerService) { }

  onRegister() {
    this.registerCustomerService.RegisterCustomer(this.customer)
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
