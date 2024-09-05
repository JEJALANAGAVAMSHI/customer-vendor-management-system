import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginUser } from '../../models/login-user';
import { LoginUserService } from '../../services/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Add any properties or methods needed for your login functionality here
  user : LoginUser={
    username:  '',
    email: '',
    password: ''
  }
  submitted=false;
  registerForm: FormGroup = null!;

  constructor(private authService: LoginUserService, private fb:FormBuilder,private router:Router) { }

  ngOnInit(){
    this.registerForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
      username: ['',[Validators.required]]
    })
  }

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

  onLogin() {
    this.authService.loginUser(this.user)
      .subscribe(
        response => {
          console.log('Login successful');
          console.log('Token:', response.value.token);
          console.log('Role:', response.value.roles);
          
          
        },
        error => {
          console.error('Login failed', error);
        }
      );
      
  }
}
