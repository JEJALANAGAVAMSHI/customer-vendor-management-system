import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
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
          console.log(response.statusCode)
          if (response && response.statusCode==200 && response.value && response.value.token) {
            localStorage.setItem('token', response.value.token); 
            this.role = response.value.roles[0]
            this.redirectBasedOnRole(response.value.roles[0]); 
          }else if (response.statusCode === 404) {
            throw new Error('User Not Found');
          } else if (response.statusCode === 400) {
            throw new Error('Invalid Credentials');
          } else {
            throw new Error(response.message || 'An unexpected error occurred');
          }
        }),
        catchError(this.handleError)
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
