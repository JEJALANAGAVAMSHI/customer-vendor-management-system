import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessDto } from '../../models/businessDto';
import { GetBusinessService } from '../../services/get-business.service';
import { LoginUserService } from '../../services/login-user.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrl: './customerdashboard.component.css'
})
export class CustomerdashboardComponent implements OnInit{
  businesses : BusinessDto[] =[]
  constructor(private authService: LoginUserService, 
    private router: Router,
    private businessService : GetBusinessService) {}
  ngOnInit(): void {
    this.businessService.getAllBusinesses().subscribe({
      next: (data : BusinessDto[]) => {
        this.businesses = data;
      },
      error: (err) => {
        console.error('Error fetching businesses:', err);
        alert('Failed to load businesses.');
      }
    });  
  }

  logout() {
    this.authService.logout();  // Call the logout method from your authentication service
    this.router.navigate(['']);  // Redirect to the login page or home page
  }
}
