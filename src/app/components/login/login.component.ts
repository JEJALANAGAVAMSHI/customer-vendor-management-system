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
          
          console.log('Login successful', response);
          this.errorMessage = ''

          // Store the token
          // localStorage.setItem('token', response.value.token);

          // const roles = response.value.roles;
          // if (roles.includes('Admin')) {
          //   this.router.navigate(['/dashboard/admin']);
          //   console.log('User is an Admin');
          // } else if (roles.includes('User')) {
          //   this.router.navigate(['/dashboard/resident']);
          //   console.log('User is a Resident');
          // }
          // else if (roles.includes('ServiceProvider')) {
          //   this.router.navigate(['/dashboard/serviceprovider']);
          //   console.log('User is a ServceProvider');
          // }
        } else {
          if (response.statusCode === 404) {
            this.errorMessage = 'User Not Found';
            console.log(this.errorMessage)
          } else if (response.statusCode === 400) {
            this.errorMessage = 'Invalid Credentials';
            console.log(this.errorMessage)
          } else {
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
