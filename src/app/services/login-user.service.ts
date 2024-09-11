import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl = 'http://localhost:5000/api/auth'; 
  private tokenKey = 'token';
  private roleKey = 'userRole';
  private role = '';
  

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(body: LoginUser): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, body)
      .pipe(
        tap(response => this.handleLoginSuccess(response)),
        catchError(this.handleError)
      );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    
    localStorage.removeItem('token');
    localStorage.removeItem('userRole') 
    this.router.navigate(['/login']);
  }


  getUserRoleFromToken(): string | null {
    
    return localStorage.getItem(this.roleKey);
    
  }

  private handleLoginSuccess(response:any): void {
    if (response?.value?.token) {
      localStorage.setItem(this.tokenKey, response.value.token);
      const role = response.value.roles[0];
      localStorage.setItem(this.roleKey, role);
      this.redirectBasedOnRole(role);
    }
  }

  public redirectBasedOnRole(role: string | null): void {
    
    switch (role) {
      case 'Admin':
        this.router.navigate(['/admindashboard']);
        break;
      case 'Vendor':
        this.router.navigate(['/vendordashboard']);
        break;
      case 'Customer':
        console.log('inside customer')
        this.router.navigate(['/customerdashboard']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
  
    if (error.error && error.error.statusCode) {
      // Assuming the error object has a nested error object with a statusCode property
      if (error.error.statusCode === 404) {
        errorMessage = 'User Not Found';
      } else if (error.error.statusCode === 400) {
        errorMessage = 'Invalid Credentials';
      } else {
        errorMessage = `Server returned code: ${error.error.statusCode}, error message is: ${error.error.message}`;
      }
    } else if (error instanceof Error) {
      // Handling manually thrown errors in the tap block
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
  
    return throwError(errorMessage);
  }
  
  
  
 
}
