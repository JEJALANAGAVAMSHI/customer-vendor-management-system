import { Component } from '@angular/core';
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
        response => {
          console.log('Login successful');
        },
        error => {
          console.error('Login failed', error);
        }
      );
  }
}
