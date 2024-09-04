import { Component } from '@angular/core';
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

  constructor(private authService: LoginUserService) { }

  onLogin() {
    this.authService.loginUser(this.user)
      .subscribe(
        response => {
          console.log('Login successful');
          console.log('Token:', response.token);
        },
        error => {
          console.error('Login failed', error);
        }
      );
  }
}
