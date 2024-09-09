import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessByIdDto } from '../models/businessByIdDto';

@Injectable({
  providedIn: 'root'
})
export class VendorGetBusinessesService {

  private apiUrl = 'http://localhost:8080/vendor/businesses'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  getBusinesses(): Observable<BusinessByIdDto[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust token retrieval as needed
    });
    return this.http.get<BusinessByIdDto[]>(this.apiUrl, { headers });
  }
}
