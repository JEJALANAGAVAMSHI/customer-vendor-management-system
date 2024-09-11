import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginUserService } from '../../services/login-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  role: string = '';
  constructor(private authService: LoginUserService, private router: Router, private jwtHelper: JwtHelperService) {}
  ngOnInit(): void {
    this.authService.loggedInStatus.subscribe((status: boolean) => {
      this.isLoggedIn = status;
      if (this.isLoggedIn) {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = this.jwtHelper.decodeToken(token);
          this.role = decodedToken.role;
        }
      }
    });
  }
  onLogout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

  navigateToNotifications() {
    if (this.role === 'admin') {
      this.router.navigate(['/admindashboard']);
    } else if (this.role === 'vendor') {
      this.router.navigate(['/vendordashboard']);
    } else if (this.role === 'customer') {
      this.router.navigate(['/customerdashboard']);
    }
  }
}
