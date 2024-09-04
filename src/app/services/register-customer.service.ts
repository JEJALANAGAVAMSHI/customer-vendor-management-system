import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseDto } from '../models/authResponseDto';
import { RegisterCustomer } from '../models/registerCustomer';

@Injectable({
  providedIn: 'root'
})
export class RegisterCustomerService {
  baseUrl:string = 'http://localhost:5000/api/auth/register-customer'
  constructor(private http:HttpClient) { }
  public RegisterCustomer = ( body: RegisterCustomer) => {
    return this.http.post<AuthResponseDto>(this.baseUrl, body);
  }
}
