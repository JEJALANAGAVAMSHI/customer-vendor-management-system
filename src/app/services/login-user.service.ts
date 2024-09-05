import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthResponseDto } from '../models/authResponseDto';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl = 'http://localhost:5000/api/auth'; 

  private role = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Method to handle user login
  loginUser(body: LoginUser): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, body)
      .pipe(
        tap(response => {
          if (response && response.value && response.value.token) {
            localStorage.setItem('token', response.value.token); 
            this.role = response.value.roles[0]
            this.redirectBasedOnRole(response.value.roles[0]); 
          }
        })
      );
  }


  getUserRoleFromToken(token:string): string | null {
    
    return this.role;
    
  }

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
