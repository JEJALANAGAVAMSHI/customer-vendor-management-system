import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterVendor } from '../../models/registerVendor';
import { AddVendorService } from '../../services/add-vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrl: './add-vendor.component.css'
})
export class AddVendorComponent {
  vendor : RegisterVendor={
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
     private vendorService: AddVendorService,
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
      this.vendorService.addVendor(this.vendor).subscribe({
        next: () => {
          alert('Vendor added successfully!');
          this.registerForm.reset();
        },
        error: (err: any) => {
          console.error('Error adding Vendor:', err);
          alert('Failed to add Vendor.');
        }
      });
    }
  }
}
