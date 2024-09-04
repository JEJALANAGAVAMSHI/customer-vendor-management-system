import { Component } from '@angular/core';
import { RegisterCustomer } from '../../models/registerCustomer';
import { RegisterCustomerService } from '../../services/register-customer.service';

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrl: './customerregister.component.css'
})
export class CustomerregisterComponent {
  user : RegisterCustomer={
    userName:  '',
    email: '',
    password: '',
    phoneNumber : '',
    address : '',
    state : '',
    postalCode : ''
  }

  constructor(private registerCustomerService: RegisterCustomerService) { }

  onLogin() {
    this.registerCustomerService.RegisterCustomer(this.user)
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
