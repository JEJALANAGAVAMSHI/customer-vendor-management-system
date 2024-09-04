import { Component } from '@angular/core';
import { LoginUser } from '../../models/login-user';
import { LoginUserService } from '../../services/login-user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  user : LoginUser={
    username:  '',
    email: '',
    password: ''
  }

  constructor(private authService: LoginUserService) { }

  onSubmit() {
    this.authService.loginUser(this.user)
      .subscribe(
        response => {
          console.log('Registration successful');
          console.log('Token:', response.token);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
  }
}
