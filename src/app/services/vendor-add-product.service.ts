import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VendorProduct } from '../models/vendorProduct';
import { VendorService } from '../models/vendorService';

@Injectable({
  providedIn: 'root'
})
export class VendorAddProductService {
  private baseUrl = 'http://localhost:8080/vendor';

  constructor(private http: HttpClient) {}

  addProduct(productData: VendorProduct): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.post<void>(`${this.baseUrl}/products/add`, productData, { headers });
  }

  addService(serviceData: VendorService): Observable<void> {
    console.log('hello')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
    return this.http.post<void>(`${this.baseUrl}/services/add`, serviceData, { headers });
  }

  private getToken(): string {
    return localStorage.getItem('token') || '';
  }
}
