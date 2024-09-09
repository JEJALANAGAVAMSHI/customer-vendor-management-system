import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBusinessDto } from '../models/addBusinessDto';

@Injectable({
  providedIn: 'root'
})
export class AddBusinessService {

  private apiUrl = 'http://localhost:8080/businesses'; // Update with your actual API endpoint

  constructor(private http: HttpClient) { }

  addBusiness(business: AddBusinessDto): Observable<any> {
    const token = localStorage.getItem('token'); // Assumes the token is stored in localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(this.apiUrl, business, { headers });
  }
}
