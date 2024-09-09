import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessByIdDto } from '../models/businessByIdDto';

@Injectable({
  providedIn: 'root'
})
export class GetBusinessByIdService {

  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getBusinesses(id :number): Observable<BusinessByIdDto> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<BusinessByIdDto>(`${this.apiUrl}/customer/get-businesses/${id}`, { headers });
  }
}
