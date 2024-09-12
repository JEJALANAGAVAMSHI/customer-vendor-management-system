import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
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
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  loggedInStatus = this.loggedIn.asObservable();  // Exposing as an observable

  

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) {}
  private hasToken(): boolean {
    const token = localStorage.getItem('token');
    //return !!token && !this.jwtHelper.isTokenExpired(token);
    return !!token;
  }
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
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn.getValue();
  }


  getUserRoleFromToken(): string | null {
    
    return localStorage.getItem(this.roleKey);
    
  }

  private handleLoginSuccess(response:any): void {
    if (response?.value?.token) {
      this.loggedIn.next(true);
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

   handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    console.log(error)
    if (error && error.statusCode) {
      // Assuming the error object has a nested error object with a statusCode property
      if (error.statusCode === 404) {
        errorMessage = 'User Not Found';
        console.log(errorMessage)
      } else if (error.statusCode === 400) {
        errorMessage = 'Invalid Credentials';
        console.log(errorMessage)
      } else {
        errorMessage = `Server returned code: ${error.statusCode}, error message is: ${error.message}`;
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
