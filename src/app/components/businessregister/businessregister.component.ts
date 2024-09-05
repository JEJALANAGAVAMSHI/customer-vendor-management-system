import {Component} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    submitted=false;
  registerForm: FormGroup = null!;
  constructor(private fb:FormBuilder, private registerVendorService: RegisterVendorService){}
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

  OnSubmit(){
    console.log(this.registerForm.value)
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