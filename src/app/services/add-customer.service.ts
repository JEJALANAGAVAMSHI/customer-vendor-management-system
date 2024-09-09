import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { RegisterCustomer } from '../models/registerCustomer';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  
  public addCustomer( body: RegisterCustomer) : Observable<ApiResponse> {
    const token = localStorage.getItem('token'); // Assuming the token is stored in local storage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<ApiResponse>(`${this.baseUrl}/register`, body, {headers});
  }

}
