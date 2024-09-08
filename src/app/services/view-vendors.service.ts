import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorDto } from '../models/vendorDto';

@Injectable({
  providedIn: 'root'
})
export class ViewVendorsService {

  private baseUrl = 'http://localhost:8080/vendors';

  constructor(private http: HttpClient) {}
  
  getAllVendors(): Observable<{ vendors: VendorDto[] }> {
    const token = localStorage.getItem('token'); // Assuming the token is stored with key 'authToken'
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{ vendors: VendorDto[] }>(this.baseUrl, {headers});
  }

  
}
