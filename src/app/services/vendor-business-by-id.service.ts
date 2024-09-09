import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessByIdDto } from '../models/businessByIdDto';

@Injectable({
  providedIn: 'root'
})
export class VendorBusinessByIdService {

  private apiUrl = 'https://your-api-url/api/businesses'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getBusinessById(businessId: number): Observable<BusinessByIdDto> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<BusinessByIdDto>(`${this.apiUrl}/${businessId}`, { headers });
  }
}
