import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Add any properties or methods needed for your login functionality here

  constructor() {}

  onLogin(): void {
    // Implement login logic here
    console.log('Login button clicked');
  }
}
