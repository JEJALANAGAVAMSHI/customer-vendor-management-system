import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { RegisterVendor } from '../models/registerVendor';

@Injectable({
  providedIn: 'root'
})
export class RegisterVendorService {
  baseUrl:string = 'http://localhost:5000/api/auth/register-vendor'
  constructor(private http:HttpClient) { }
  public RegisterVendor( body: RegisterVendor) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, body);
  }
}
