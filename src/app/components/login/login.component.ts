import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseDto } from '../../models/authResponseDto';
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
  errorMessage: string = '';
  submitted=false;
  registerForm: FormGroup = null!;

  constructor(private authService: LoginUserService, private fb:FormBuilder,private router:Router) { }

  ngOnInit(){
    this.registerForm = this.fb.group({
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
      .subscribe({
      next: (response: AuthResponseDto) => {
        if (response.value.token) {
        
          this.errorMessage = ''
        } else {
          if (response.statusCode === 404 || response.statusCode ===400) {
            this.errorMessage = 'Invalid Credentials';
          }  else {
            this.errorMessage = `Server returned code: ${response.statusCode}, error message is: ${response.value}`;
          }
          
        }
      },
      error: (error) => {
        
        console.error('Login failed', error);
      }
    });
      
  }
}
