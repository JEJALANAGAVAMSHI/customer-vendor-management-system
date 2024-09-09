import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddCustomerService } from '../../services/add-customer.service';
import { RegisterCustomer } from '../../models/registerCustomer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {
  customer : RegisterCustomer={
    userName:  '',
    email: '',
    passwordHash: '',
    phoneNumber : '',
    address : '',
    state : '',
    postalCode : ''
  }

  
  submitted=false;
  registerForm: FormGroup = null!;
  constructor(private fb:FormBuilder,
     private customerService: AddCustomerService,
     private router: Router){}
ngOnInit(){
  this.registerForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required]],
    username: ['',[Validators.required]],
    phonenumber : ['',[Validators.required]],
    postalCode : ['',[Validators.required]],
    address : ['',[Validators.required]],
    state : ['',[Validators.required]],
    confirmpassword: ['']
  },
  {
    validator:this.passwordMatchValidator
  })}
  

  validateControl(input: string){
    return this.registerForm.get(input)?.invalid &&
    (this.registerForm.get(input)?.touched ||
    this.registerForm.get(input)?.dirty)
  }
  validateControlError(input:string,errorType: string){
    return this.registerForm.get(input)?.hasError(errorType) &&
    (this.registerForm.get(input)?.touched ||
    this.registerForm.get(input)?.dirty)
  }


  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password')?.value;
    const confirmPassword: string = control.get('confirmpassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.customerService.addCustomer(this.customer).subscribe({
        next: () => {
          alert('Customer added successfully!');
          this.registerForm.reset();
        },
        error: (err) => {
          console.error('Error adding customer:', err);
          alert('Failed to add customer.');
        }
      });
    }
  }
}
