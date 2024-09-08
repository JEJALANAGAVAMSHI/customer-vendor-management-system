import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from '../../services/login-user.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  constructor(private authService: LoginUserService, private router: Router) {}

  logout() {
    this.authService.logout();  // Call the logout method from your authentication service
    this.router.navigate(['']);  // Redirect to the login page or home page
  }
  viewAllVendors() {
    this.router.navigate(['/admindashboard/vendors']);
  }
}
