import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessByIdDto } from '../models/businessByIdDto';

@Injectable({
  providedIn: 'root'
})
export class VendorBusinessByIdService {

  private apiUrl = 'http://localhost:8080/vendor'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getBusinessById(businessId: number): Observable<BusinessByIdDto> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<BusinessByIdDto>(`${this.apiUrl}/get-businesses/${businessId}`, { headers });
  }
  deleteProduct(productId: number): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete<void>(`${this.apiUrl}/products/${productId}`, { headers });
  }

  deleteService(serviceId: number): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.delete<void>(`${this.apiUrl}/services/${serviceId}`, { headers });
  }

  addLocation(businessId: number, latitude: number, longitude: number ): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.post<void>(`${this.apiUrl}/location/add`, {businessId, latitude , longitude},{headers});
  }
}
