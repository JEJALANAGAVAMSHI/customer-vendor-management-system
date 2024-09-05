import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { AuthResponseDto } from '../models/authResponseDto';
import { RegisterCustomer } from '../models/registerCustomer';

@Injectable({
  providedIn: 'root'
})
export class RegisterCustomerService {
  baseUrl:string = 'http://localhost:5000/api/auth/register-customer'
  constructor(private http:HttpClient) { }
  public RegisterCustomer( body: RegisterCustomer) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, body);
  }
}
