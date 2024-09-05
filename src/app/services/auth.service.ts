import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5000/api/auth'; // Adjust the URL to your API

  constructor(private http: HttpClient, private router: Router) {}

  // Method to handle user login
  loginUser(body: LoginUser): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, body)
      .pipe(
        tap(response => {
          if (response && response.value && response.value.token) {
            localStorage.setItem('token', response.value.token);
            console.log("working") // Store the token in localStorage
            this.redirectBasedOnRole(response.value.roles[0]); // Redirect based on the role
          }
        })
      );
  }

  // Method to extract and return the user role from the token stored in localStorage
  getUserRoleFromToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      return decodedToken?.role || null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  // Method to redirect the user based on their role
  private redirectBasedOnRole(role: string): void {
    switch (role) {
      case 'Admin':
        this.router.navigate(['/admindashboard']);
        break;
      case 'Vendor':
        this.router.navigate(['/vendordashboard']);
        break;
      case 'Customer':
        this.router.navigate(['/customerdashboard']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}
